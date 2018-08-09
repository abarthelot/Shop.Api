using System;
using ShopApp.API.Models;

namespace ShopApp.API.Dtos
{
    public class CartItemForListDto
    {
        public int Id { get; set; }
        public Item Item { get; set; }
        public int ItemId { get; set; }
        public UserForDetailsDto User { get; set; }
        public int UserId { get; set; }
        public int Quantity { get; set; }
        public DateTime AddedDate { get; set; }
    }
}