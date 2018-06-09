using System;

namespace ShopApp.API.Dtos
{
    public class ItemForDetailsDto
    {
        public string Title { get; set; }
        public bool IsService { get; set; }
        public string Description { get; set; }
        public string ShipingAddress { get; set; }
        public string ShipingCountry{ get; set; }
        public DateTime CreatedDate { get; set; }
        public int Quantity { get; set; }
        public string ImageUrl { get; set; }
        public string OtherUrl { get; set; } 
    }
}