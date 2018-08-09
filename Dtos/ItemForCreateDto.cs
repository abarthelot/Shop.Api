using Microsoft.AspNetCore.Http;

namespace ShopApp.API.Dtos
{
    public class ItemForCreateDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsService { get; set; }
        public string ShipingAddress { get; set; }
        public string PostalCode { get; set; }
        public string ShipingCountry{ get; set; }
        public string Quantity { get; set; }
        public string UnitPrice { get; set; }
        public IFormFile Image { get; set; }
        public string FileName { get; set; }
        public string OtherUrl { get; set; } 
    }
}