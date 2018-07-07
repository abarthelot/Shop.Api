using System.Collections.Generic;
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
        public async Task<IActionResult> GetFavorites (int id, ItemParams param) 
        {
            if(string.IsNullOrEmpty(param.IsService))
            {
                param.IsService = "all";
            }
            if(string.IsNullOrEmpty(param.SearchTerm))
            {
                param.SearchTerm = "";
            }
            if(string.IsNullOrEmpty(param.OrderBy))
            {
                param.OrderBy = "created-dsc";
            }
            var items = await _repo.GetFavorites(id, param);
            var itemsToReturn = _mapper.Map<IEnumerable<ItemsForListDto>>(items);
            Response.AddPagination(items.CurrentPage, items.PageSize, items.TotalCount, items.TotalPages);
            return Ok (itemsToReturn);
        }
    }
}