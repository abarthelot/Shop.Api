using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopApp.API.Data;
using ShopApp.API.Dtos;

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
    }
}