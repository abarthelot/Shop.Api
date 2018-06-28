using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopApp.API.Data;
using ShopApp.API.Dtos;
using ShopApp.API.Helpers;

namespace ShopApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route ("api/[controller]")]
    public class FavoritesController: Controller
    {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;
        public FavoritesController(IShopRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }


        [HttpGet ("{id}")]
        public async Task<IActionResult> GetFavorite (int id) {
            var item = await _repo.GetFavorites(id);
            //var itemToReturn = _mapper.Map<FavoriteItemsForListDto>(item);
            return Ok (item);
        }
    }
}