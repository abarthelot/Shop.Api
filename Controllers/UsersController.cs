using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopApp.API.Data;
using ShopApp.API.Dtos;

namespace ShopApp.API.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    public class UsersController : Controller {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;

        public UsersController (IShopRepository repo, IMapper mapper) {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers () {
            var users = await _repo.GetUsers ();
            var usersToReturn = _mapper.Map<IEnumerable<UsersForListDto>>(users);
            return Ok (usersToReturn);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> GetUser (int id) {
            var user = await _repo.GetUser (id);
            var userToReturn = _mapper.Map<UserForDetailsDto>(user);
            return Ok (userToReturn);
        }
    }
}