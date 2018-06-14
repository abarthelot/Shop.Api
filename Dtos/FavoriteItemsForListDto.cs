using System.Collections.Generic;

namespace ShopApp.API.Dtos
{
    public class FavoriteItemsForListDto
    {
        public int Id { get; set; }
        public ICollection<ItemsForListDto> Item { get; set; }
        public int ItemId { get; set; }
        public int UserId { get; set; }
    }
}