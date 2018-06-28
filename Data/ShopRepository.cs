using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopApp.API.Models;
using System.Linq;
using ShopApp.API.Helpers;

namespace ShopApp.API.Data
{
    public class ShopRepository : IShopRepository
    {
        public readonly DataContext _context;
        public ShopRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }


        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photo)
                        .Include(u => u.PurchasedItems).Include(u => u.Favoriteslist).FirstOrDefaultAsync( u => u.Id == id); 
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p => p.Photo)
                        .Include(u => u.PurchasedItems).Include(u => u.Favoriteslist).ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Item> CreateItem(Item item)
        {
            await _context.Items.AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<Item> GetItem(int id)
        {
            var item = await _context.Items.Include(p => p.Photo).FirstOrDefaultAsync( i => i.Id == id);
            return item;
        }

        public async Task<PagedList<Item>> GetItems(ItemParams param)
        {
            var items = await _context.Items.Include(p => p.Photo).Where(i => i.Quantity > 0).OrderByDescending(u => u.CreatedDate).ToListAsync();

            if(param.IsService != "all")
            {
                if(param.IsService == "service")
                {
                    items = items.Where(i => i.IsService == true).ToList();
                }else
                {
                    items = items.Where(i => i.IsService == false).ToList();
                }

            }
            if(param.OrderBy.Trim() == "price-dsc")
            {
                items = items.OrderByDescending(u => u.UnitPrice).ToList();
            }
            if(param.OrderBy.Trim() == "price-asc")
            {
                items = items.OrderByDescending(u => u.UnitPrice).Reverse().ToList();
            }
            if(param.OrderBy.Trim() == "created-asc")
            {
                items = items.OrderByDescending(u => u.CreatedDate).Reverse().ToList();
            }
            if(param.SearchTerm.Trim() != "")
            {
                items = items.Where(i => i.Title.Contains(param.SearchTerm)).ToList();
            }
            if(param.MinPrice > 0)
            {
                items = items.Where(i => i.UnitPrice >= param.MinPrice).ToList();
            }
            if(param.MaxPrice > 0)
            {
                items = items.Where(i => i.UnitPrice <= param.MaxPrice).ToList();
            }
            return await PagedList<Item>.CreateAsync(items.ToList().AsQueryable(), param.PageNumber, param.pageSize);
        }

        public async Task<Item> DeleteItem(int id)
        {
            var item = await _context.Items.Include(p => p.Photo).FirstOrDefaultAsync( i => i.Id == id);
            _context.Items.Remove(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<IEnumerable<FavoriteItem>> GetFavorites(int userId)
        {
            var items = await _context.Favorites.Include(i => i.Item).ThenInclude(item => item.Photo).Where(f => f.UserId == userId).ToListAsync();
            return items;
        }

        public Task<Image> GetImage(int id)
        {
            var image = _context.Images.FirstOrDefaultAsync(p => p.Id == id);
            return image;
        }

        public Image GetProfilePic(int id)
        {
            return _context.Items.FirstOrDefault(i => i.Id == id).Photo.FirstOrDefault(p => p.IsProfilePic == true);
        }

        public async Task<Image> CreateImage(Image image)
        {
            await _context.Images.AddAsync(image);
            await _context.SaveChangesAsync();
            return image;
        }

        public Image GetUserImage(int id)
        {
            return _context.Users.FirstOrDefault(i => i.Id == id).Photo.FirstOrDefault(p => p.IsProfilePic == true && p.IsItemImage == false);
        }
    }
}