using System;

namespace ShopApp.API.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public Item Item { get; set; }
        public int ItemId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public int Quantity { get; set; }
        public DateTime AddedDate { get; set; }
    }
}