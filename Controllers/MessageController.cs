using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopApp.API.Data;
using ShopApp.API.Dtos;
using ShopApp.API.Helpers;
using ShopApp.API.Models;

namespace ShopApp.API.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(LogUserActivity))]
    [Route("api/usr_msg/{userId}/[controller]")]
    public class MessageController: Controller
    {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;
        public MessageController(IShopRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{id}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage(int userId, int id)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var messageFromRepo = await _repo.GetMessage(id);
            if(messageFromRepo == null)
            {
                return NotFound();
            }
            return Ok(messageFromRepo);
        }

        [HttpGet("thread/{id}/item/{itemId}")]
        public async Task<IActionResult> GetMessageThread(int userId, int id, int itemId)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var messageFromRepo = await _repo.GetMessagesThread(userId, id, itemId);
            var messageThread = _mapper.Map<IEnumerable<MessageToReturnDto>>(messageFromRepo);
            return Ok(messageThread);
        }

        [HttpGet]
        public async Task<IActionResult> GetMessageForUser(int userId, MessageParam param)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var messageFromRepo = await _repo.GetMessagesForUser(param);
            var messages = _mapper.Map<IEnumerable<MessageToReturnDto>>(messageFromRepo);

            Response.AddPagination(messageFromRepo.CurrentPage, messageFromRepo.PageSize, messageFromRepo.TotalCount, messageFromRepo.TotalPages);
            return Ok(messages);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage (int userId, [FromBody]MessageForCreateDto msg)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var recipientId = _repo.GetUser(msg.RecipientId);
            //var 
            if(recipientId == null)
            {
                return BadRequest("Could not find recipient user.");
            }
            if(_repo.GetItem(msg.AboutItemId) == null)
            {
                return BadRequest("Item doesn't exist.");
            }

            var message = _mapper.Map<Message>(msg);

            message.Sender = _repo.GetUser(userId).Result;

            _repo.Add(message);

            var messageToReturn = _mapper.Map<MessageToReturnDto>(message);

            if(await _repo.SaveAll())
            {
                return CreatedAtRoute("GetMessage", new { id = message.Id }, messageToReturn);
            }

            return BadRequest("Error while saving.");
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> DeleteMessage (int userId, int id)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var messageFromRepo = _repo.GetMessage(id);

            if(messageFromRepo.Result.SenderId == userId)
            {
                messageFromRepo.Result.SenderDeleted = true;
            } 
            else if(messageFromRepo.Result.RecipientId == userId){
                messageFromRepo.Result.RecipientDeleted = true;
            }

            if(messageFromRepo.Result.SenderDeleted && messageFromRepo.Result.RecipientDeleted)
            {
                _repo.Delete(messageFromRepo);
            }
            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            return BadRequest("Error while saving.");

        }


        [HttpPost("{id}/read")]
        public async Task<IActionResult> MarkMessageAsRead (int userId, int id)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var messageFromRepo = _repo.GetMessage(id);

            if(messageFromRepo.Result.RecipientId != userId)
            {
                return BadRequest("Could not mark message as read.");
            }

            messageFromRepo.Result.IsRead = true;
            messageFromRepo.Result.DateRead = DateTime.Now;
            
            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            return BadRequest("Error while saving.");

        }
    }
}