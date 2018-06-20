using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopApp.API.Data;
using ShopApp.API.Dtos;
using ShopApp.API.Models;
using System.Security.Claims;
using System;

namespace ShopApp.API.Controllers
{
    [Authorize]
    [Route ("api/[controller]")]
    public class ItemsController: Controller
    {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;

        public ItemsController (IShopRepository repo, IMapper mapper) {
            _mapper = mapper;
            _repo = repo;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetItems () {
            var items = await _repo.GetItems();
            var itemsToReturn = _mapper.Map<IEnumerable<ItemsForListDto>>(items);
            return Ok (itemsToReturn);
        }

        [AllowAnonymous]
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetItem (int id) {
            var item = await _repo.GetItem (id);
            var itemToReturn = _mapper.Map<ItemForDetailsDto>(item);
            return Ok (itemToReturn);
        }

        [HttpGet ("Owner/{id}")]
        public async Task<IActionResult> GetItemOwner (int id) {
            var item = await _repo.GetItem(id);
            var itemToReturn = item.UserId;
            return Ok (itemToReturn);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateItem ([FromBody]ItemForUpdateDto item)
        {
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var currentItemId = item.Id;
            var currentItem = await _repo.GetItem(currentItemId);
            if(currentItem == null)
            {
                NotFound("No item found.");
            } 
            if(currentUserId != currentItem.UserId)
            {
                return Unauthorized();
            }
            currentItem.Title = item.Title;
            currentItem.IsService = item.IsService;
            currentItem.Description = item.Description;
            currentItem.ShipingAddress = item.ShipingAddress;
            currentItem.ShipingCountry = item.ShipingCountry;
            currentItem.CreatedDate = item.CreatedDate;
            currentItem.Quantity = item.Quantity;
            currentItem.UnitPrice = item.UnitPrice;
            currentItem.ImageUrl = item.ImageUrl;
            currentItem.OtherUrl = item.OtherUrl;
            //currentItem.Photo = item.Photo;
            //_mapper.Map(item, currentItem);
            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception("Failed to save item.");
        }
    }
}