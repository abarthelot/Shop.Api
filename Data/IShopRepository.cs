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
         Task<IEnumerable<FavoriteItem>> GetFavorites(int id);
         Task<Image> GetImage(int id);
         Image GetProfilePic(int id);
         Task<Image> CreateImage(Image image);
         Image GetUserImage(int id);
    }
}