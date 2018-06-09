using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace ShopApp.API.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsService { get; set; }
        public string Description { get; set; }
        public string ShipingAddress { get; set; }
        public string ShipingCountry{ get; set; }
        public DateTime CreatedDate { get; set; }
        public int Quantity { get; set; }
        public string ImageUrl { get; set; }
        public string OtherUrl { get; set; } 
        public User User { get; set; }
        public int UserId { get; set; }

        public ICollection<Image> Photo {get; set;}

        
        public Item()
        {
           Photo = new Collection<Image>(); 
        }
    }

}