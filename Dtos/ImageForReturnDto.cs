using System;

namespace ShopApp.API.Dtos
{
    public class ImageForReturnDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsProfilePic { get; set; }
        public bool IsItemImage { get; set; }
        public string PublicId { get; set; }
        public DateTime DateAdded { get; set; }
    }
}