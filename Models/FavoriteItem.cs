using System.Linq;

namespace ShopApp.API.Models
{
    public class FavoriteItem
    {
        public int Id { get; set; }
        public Item Item { get; set; }
        public int ItemId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}