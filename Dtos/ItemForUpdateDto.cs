using System;
using System.Collections.Generic;

namespace ShopApp.API.Dtos
{
    public class ItemForUpdateDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsService { get; set; }
        public string Description { get; set; }
        public string ShipingAddress { get; set; }
        public string ShipingCountry{ get; set; }
        public DateTime CreatedDate { get; set; }
        public int Quantity { get; set; }
        public double UnitPrice { get; set; }
        public string ImageUrl { get; set; }
        public string OtherUrl { get; set; } 
        public int UserId { get; set; }
        public ICollection<ImagesForDetailsDto> Photo {get; set;}
    }
}