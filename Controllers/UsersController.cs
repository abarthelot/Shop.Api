using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ShopApp.API.Data;
using ShopApp.API.Dtos;
using ShopApp.API.Helpers;
using ShopApp.API.Models;

namespace ShopApp.API.Controllers {
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route ("api/[controller]")]
    public class UsersController : Controller {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public UsersController (IShopRepository repo, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig) {
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;
            _repo = repo;

            Account ac = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.APISecret
            );

            _cloudinary = new Cloudinary(ac);
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers () {
            var users = await _repo.GetUsers ();
            var usersToReturn = _mapper.Map<IEnumerable<UsersForListDto>>(users);
            return Ok (usersToReturn);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> GetUser (int id) 
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if(id != currentUserId)
            {
                return Unauthorized();
            }
            var user = await _repo.GetUser (id);
            var userToReturn = _mapper.Map<UserForDetailsDto>(user);
            return Ok (userToReturn);
        }

        [HttpGet("GetUserImageToReturn/{id}", Name = "GetUserImage")]
        public async Task<IActionResult> GetImage(int id)
        {
            var imageFromRepo = await _repo.GetImage(id);
            var image = _mapper.Map<ImageForReturnDto>(imageFromRepo);
            return Ok(image);
        }

        [HttpPost("{userId}/images")]
        public async Task<IActionResult> AddImagesForItem(int userId, ImagesForCreateDto imageDto)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(userId);

            if(user == null){
                return BadRequest("User dosen't exist.");
            }
            if(currentUserId != user.Id){
                return Unauthorized();
            }

            var currentImage = _repo.GetUserImage(userId);

            if(currentImage.PublicId != null)
            {
                var delPara = new DeletionParams(currentImage.PublicId);
                var result = _cloudinary.Destroy(delPara);
                if(result.Result == "ok")
                {
                    user.Photo.Remove(currentImage);
                    _repo.Delete(currentImage);
                }
            }
            
            var file = imageDto.File;

            var uploadResult = new ImageUploadResult();

            if(file.Length > 0)
            {
                using(var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream)
                    }; 
                    uploadResult = _cloudinary.Upload(uploadParams);

                }
            }

            imageDto.Url = uploadResult.Uri.ToString();
            imageDto.PublicId = uploadResult.PublicId;

            var image = _mapper.Map<Image>(imageDto);
            image.User = user;

            if(!user.Photo.Any(m => m.IsProfilePic && m.IsItemImage == false))
            {
                image.IsProfilePic = true;
            }
            image.User = user;
            image.IsItemImage = false;
            await _repo.CreateImage(image);

            if(await _repo.SaveAll())
            {
                var imageToReturn = _mapper.Map<ImageForReturnDto>(image);
                return CreatedAtRoute("GetUserImage", new { id = image.Id }, imageToReturn);
            }
            
            return BadRequest("Error while saving.");
        }

        [HttpPost("{id}/favorite/{itemId}")]
        public async Task<IActionResult> AddFavorite(int id, int itemId)
        {
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var favorite = await _repo.GetFavorite(id, itemId);

            if(favorite != null)
            {
                return BadRequest("This item is already one of your favorites.");
            }

            if(await _repo.GetUser(id) == null)
            {
                return NotFound("User not found");
            }

            if(await _repo.GetItem(itemId) == null)
            {
                return NotFound("Item not found");
            }

            favorite = new FavoriteItem 
            {
                UserId = id,
                ItemId = itemId
            };

            _repo.Add<FavoriteItem>(favorite);

            if(await _repo.SaveAll())
            {
                return Ok();
            }
            
            return BadRequest("Error while saving.");
        }

    }
}