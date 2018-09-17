using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ShopApp.API.Data;
using ShopApp.API.Dtos;
using ShopApp.API.Dtos.Payment;
using ShopApp.API.Helpers;
using ShopApp.API.Models;
using ShopApp.API.Paypal;

namespace ShopApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route ("api/[controller]")]
    public class CartController: Controller
    {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;
        private readonly IOptions<PaypalSettings> _paypalConfig;
        public CartController(IShopRepository repo, IMapper mapper, IOptions<PaypalSettings> paypalConfig)
        {
            _repo = repo;
            _mapper = mapper;
            _paypalConfig = paypalConfig;
        }

        [HttpGet ("{userId}")]
        public async Task<IActionResult> GetCart (int userId) 
        {
            
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var cartItems = await _repo.GetCartItems(userId);
            if(cartItems == null)
            {
                return NotFound();
            }
            var returnCart = _mapper.Map<IEnumerable<CartItemForListDto>>(cartItems);

            
            return Ok(cartItems);
        }

        [HttpGet ("count/{userId}")]
        public async Task<IActionResult> GetCount(int userId) 
        {
            
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var cartItems = await _repo.GetCartItems(userId);
            if(cartItems == null)
            {
                return Ok(0);
            }
            return Ok(cartItems.Count);
        }

        [HttpPost ("{userId}/Add/{itemId}/{quantity}")]
        public async Task<IActionResult> AddToCart(int userId, int itemId, int quantity) 
        {
            
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var item = await _repo.GetItem(itemId); 
            if(item == null)
            {
                return NoContent();
            }
            var currentCart = await _repo.GetCartItem(userId,itemId);
            
            if(currentCart != null){
                currentCart.Quantity = currentCart.Quantity + quantity;
            }else{
                Cart cart = new Cart
                {
                    UserId = userId,
                    User = await _repo.GetUser(userId),
                    ItemId = itemId,
                    Item = item,
                    Quantity = quantity
                };
                _repo.Add(cart);
            }

            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception("Failed to add item to your cart.");
        }


        [HttpPost ("{userId}/Update/{itemId}/{quantity}")]
        public async Task<IActionResult> UpdateQuantity(int userId, int itemId, int quantity) 
        {
            
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var item = await _repo.GetItem(itemId); 
            if(item == null)
            {
                return NoContent();
            }
            if(item.Quantity < quantity){
                return NotFound("Only " + item.Quantity + " available.");
            }
            var cart = _repo.GetCartItem(userId, itemId).Result;
            cart.Quantity = quantity;

            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception("Failed to add item to your cart.");
        }

        [HttpPost ("{userId}/Delete/{itemId}")]
        public async Task<IActionResult> DeleteItem(int userId, int itemId) 
        {
            
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var item = await _repo.GetItem(itemId); 
            if(item == null)
            {
                return NoContent();
            }

            var cart = _repo.GetCartItem(userId, itemId).Result;
            
            _repo.Delete(cart);

            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception("Failed to delete item from your cart.");

        }

        [HttpPost ("total/{userId}")]
        public async Task<IActionResult> GetTotal (int userId) 
        {
            
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var cartItems = await _repo.GetCartItems(userId);
            if(cartItems == null)
            {
                return NotFound();
            }
            double sum = 0;
            foreach(var item in cartItems)
            {
                sum = sum + (item.Item.UnitPrice * item.Quantity);
            }
            return Ok(sum);
        }

        [HttpGet("paypal/cart/{userId}")]
        public async Task<IActionResult> GetPaypalCart(int userId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var cartItems = await _repo.GetCartItems(userId);
            if (cartItems == null)
            {
                return NotFound();
            }
            //var returnCart = _mapper.Map<IEnumerable<PayPalCart>>(cartItems);


            return Ok(_mapper.Map<IEnumerable<PayPalCart>>(cartItems));
        }

        [HttpPost("paypal/cart/complete")]
        public async Task<IActionResult> FinPaypalCart([FromBody]PaymentTransactionDto payment)
        {
            if (payment.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var cartItems = await _repo.GetCartItems(payment.UserId);
            
            //var returnCart = _mapper.Map<IEnumerable<PayPalCart>>(cartItems);
            PaypalTransaction transaction = new PaypalTransaction();
            transaction.Intent = payment.Info.Intent;
            transaction.OrderID = payment.Info.OrderID;
            transaction.PayerID = payment.Info.PayerID;
            transaction.PaymentID = payment.Info.PaymentID;
            transaction.PaymentToken = payment.Info.PaymentToken;
            transaction.UserId = payment.UserId;
            transaction.User = await _repo.GetUser(payment.UserId);
            transaction.Items = _repo.GetItemsFormCart(payment.UserId);
            _repo.Add(transaction);

            foreach (Cart cart in cartItems)
            {
                var item = _repo.GetItem(cart.Item.Id);
                item.Result.Quantity = item.Result.Quantity - cart.Quantity;
                _repo.Delete(cart);
            }
            if (await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception("Failed to delete item from your cart.");
        }
    }
}