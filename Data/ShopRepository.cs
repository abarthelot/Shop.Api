using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopApp.API.Models;
using System.Linq;

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

        public async Task<IEnumerable<Item>> GetItems()
        {
            var items = await _context.Items.Include(p => p.Photo).ToListAsync();
            return items;
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
            var items = await _context.Favorites.Where(f => f.UserId == userId).ToListAsync();
            return items;
        }

    }
}