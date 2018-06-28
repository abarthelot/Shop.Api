using System;
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
    [Route ("api/items/{itemId}/images")]
    public class ImagesController : Controller {
        private readonly IShopRepository _repo;
        public readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public ImagesController (IShopRepository repo, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig) {
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

        [HttpGet("{id}", Name = "GetImage")]
        public async Task<IActionResult> GetImage(int id)
        {
            var imageFromRepo = await _repo.GetImage(id);
            var image = _mapper.Map<ImageForReturnDto>(imageFromRepo);
            return Ok(image);
        }

        [HttpPost]
        public async Task<IActionResult> AddImagesForItem(int itemId, ImagesForCreateDto imageDto)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(currentUserId);
            var item = await _repo.GetItem(itemId);

            if(user == null){
                return BadRequest("User dosen't exist.");
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
            imageDto.IsItemImage = true;

            var image = _mapper.Map<Image>(imageDto);
            image.User = user;
            image.DateAdded = DateTime.Now;

            if(!user.Photo.Any(m => m.IsProfilePic))
            {
                image.IsProfilePic = true;
            }
            item.Photo.Add(image);

            if(await _repo.SaveAll())
            {
                var imageToReturn = _mapper.Map<ImageForReturnDto>(image);
                return CreatedAtRoute("GetImage", new { id = image.Id }, imageToReturn);
            }
            
            return BadRequest("Error while saving.");
        }

        [HttpPost("{id}/setProfile")]
        public async Task<IActionResult> SetProfilePic(int itemId, int id)
        {
            var item = await _repo.GetItem(itemId);
            if(item.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var imageFromRepo = _repo.GetImage(id);
            var currentProfilePic = _repo.GetProfilePic(itemId);
            if(imageFromRepo == null)
            {
                return NotFound();
            }
            if(imageFromRepo.Result.IsProfilePic == true)
            {
                return BadRequest("Image already main image.");
            }
            if(currentProfilePic != null)
            {
                currentProfilePic.IsProfilePic = false;
            }
            
            imageFromRepo.Result.IsProfilePic = true;


            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            
            return BadRequest("Error while saving.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImage(int itemId, int id)
        {
            var item = await _repo.GetItem(itemId);
            if(item.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var imageFromRepo = _repo.GetImage(id);
            if(imageFromRepo == null)
            {
                return NotFound();
            }
            if(imageFromRepo.Result.IsProfilePic)
            {
                return BadRequest("Can't delete main image.");
            }
            if(!imageFromRepo.Result.IsItemImage)
            {
                return BadRequest("Can't delete user main images.");
            } 
            if(imageFromRepo.Result.PublicId != null)
            {
                var delPara = new DeletionParams(imageFromRepo.Result.PublicId);
                var result = _cloudinary.Destroy(delPara);
                if(result.Result == "ok")
                {
                    item.Photo.Remove(imageFromRepo.Result);
                    _repo.Delete(imageFromRepo.Result);
                }
            }

            if(imageFromRepo.Result.PublicId == null)
            {
                item.Photo.Remove(imageFromRepo.Result);
                _repo.Delete(imageFromRepo.Result);
            }

            if(await _repo.SaveAll())
            {
                return Ok();
            }
            
            return BadRequest("Error while saving.");
        }


    }
}