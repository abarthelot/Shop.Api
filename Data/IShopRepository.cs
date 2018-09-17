using System.Collections.Generic;
using System.Threading.Tasks;
using ShopApp.API.Helpers;
using ShopApp.API.Models;

namespace ShopApp.API.Data
{
    public interface IShopRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<Item> CreateItem(Item item);
        Task<PagedList<Item>> GetItems(ItemParams param);
        Task<Item> GetItem(int id);
        Task<PagedList<Item>> GetFavorites(int id, ItemParams param);
        List<int> GetAllFavoritesIds(int id);
        Task<Image> GetImage(int id);
        Image GetProfilePic(int id);
        Task<Image> CreateImage(Image image);
        Image GetUserImage(int id);
        Task<FavoriteItem> GetFavorite(int userId, int itemId);
        Task<Message> GetMessage(int id);
        Task<PagedList<Message>> GetMessagesForUser(MessageParam param);
        Task<IEnumerable<Message>> GetMessagesThread(int userId, int recipientId, int itemId);
        Task<List<Cart>> GetCartItems(int userId);
        IEnumerable<Item> GetItemsFormCart(int userId);
        Task<Cart> GetCartItem(int userId, int itemId);
        Task<List<Item>> GetItemsByUser(int userId);

    }
}