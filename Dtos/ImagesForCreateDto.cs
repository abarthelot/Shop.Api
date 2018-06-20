using System;
using Microsoft.AspNetCore.Http;

namespace ShopApp.API.Dtos
{
    public class ImagesForCreateDto
    {
        public int Id { get; set; }
        public IFormFile File { get; set; }
        public string Url { get; set; }
        public bool IsProfilePic { get; set; }
        public bool IsItemImage { get; set; }
        public string PublicId { get; set; }
        public DateTime DateAdded { get; set; }
        public int UserId { get; set; }

        public ImagesForCreateDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}