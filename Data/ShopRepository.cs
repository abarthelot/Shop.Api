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
                items = items.Where(i => i.Title.ToLower().Contains(param.SearchTerm.ToLower())).ToList();
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

        public async Task<PagedList<Item>> GetFavorites(int userId, ItemParams param)
        {
            var returnItem = new List<Item>();
            var items = await _context.Favorites.Include(i => i.Item).ThenInclude(item => item.Photo).Where(f => f.UserId == userId).ToListAsync();
            for(int i = 0; i < items.Count; i ++)
            {
                returnItem.Add(items[i].Item);
            }

            if(param.IsService != "all")
            {
                if(param.IsService == "service")
                {
                    returnItem = returnItem.Where(i => i.IsService == true).ToList();
                }else
                {
                    returnItem = returnItem.Where(i => i.IsService == false).ToList();
                }

            }

            if(param.OrderBy.Trim() == "price-dsc")
            {
                returnItem = returnItem.OrderByDescending(u => u.UnitPrice).ToList();
            }
            if(param.OrderBy.Trim() == "price-asc")
            {
                returnItem = returnItem.OrderByDescending(u => u.UnitPrice).Reverse().ToList();
            }
            if(param.OrderBy.Trim() == "created-asc")
            {
                returnItem = returnItem.OrderByDescending(u => u.CreatedDate).Reverse().ToList();
            }
            if(param.SearchTerm.Trim() != "")
            {
                returnItem = returnItem.Where(i => i.Title.ToLower().Contains(param.SearchTerm.ToLower())).ToList();
            }
            if(param.MinPrice > 0)
            {
                returnItem = returnItem.Where(i => i.UnitPrice >= param.MinPrice).ToList();
            }
            if(param.MaxPrice > 0)
            {
                returnItem = returnItem.Where(i => i.UnitPrice <= param.MaxPrice).ToList();
            }

            return await PagedList<Item>.CreateAsync(returnItem.ToList().AsQueryable(), param.PageNumber, param.pageSize);
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

        public async Task<FavoriteItem> GetFavorite(int userId, int itemId)
        {
            return await _context.Favorites.FirstOrDefaultAsync(u => u.UserId == userId && u.ItemId == itemId);
        }

        public List<int> GetAllFavoritesIds(int id)
        {
            List<int> favoriteItem = _context.Favorites.ToList().Where(f => f.UserId == id).Select(i => i.ItemId).ToList();
            return favoriteItem;
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Message.Include(i => i.AboutItem).Include(s => s.Sender).Include(r => r.Recipient).FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParam param)
        {
            var messages = _context.Message.Include(u => u.Sender).ThenInclude(p => p.Photo)
                                           .Include(u => u.Recipient).ThenInclude(p => p.Photo)
                                           .Include(u => u.AboutItem).AsQueryable();
            
            switch(param.MessageContainer.ToLower())
            {
                case "inbox":
                    messages = messages.Where(u => u.RecipientId == param.UserId && u.RecipientDeleted == false);
                    break;
                case "outbox":
                    messages = messages.Where(u => u.SenderId == param.UserId && u.SenderDeleted == false);
                    break;
                case "unread":
                    messages = messages.Where(u => u.RecipientId == param.UserId && u.RecipientDeleted == false && u.IsRead == false);
                    break;
            }
            messages = messages.OrderByDescending(d => d.MessageSent);
            var messagesList = messages.ToList();
            return await PagedList<Message>.CreateAsync(messagesList.AsQueryable(), param.PageNumber, param.PageSize);
        }

        public async Task<IEnumerable<Message>> GetMessagesThread(int userId, int recipientId, int itemId)
        {
            var messages = await _context.Message.Include(u => u.Sender).ThenInclude(p => p.Photo)
                                            .Include(u => u.Recipient).ThenInclude(p => p.Photo)
                                            .Include(u => u.AboutItem)
                                            .Where(m => (m.RecipientId == userId && m.RecipientDeleted == false && m.SenderId == recipientId && m.AboutItemId == itemId) 
                                                    || (m.RecipientId == recipientId && m.SenderDeleted == false && m.SenderId == userId && m.AboutItemId == itemId))
                                            .OrderByDescending(m => m.MessageSent).ToListAsync();
            return messages;
        }

        public async Task<List<Cart>> GetCartItems(int userId)
        {
            var cart = await _context.Cart.Include(c => c.User).Include(i => i.Item).Where(c => c.UserId == userId).ToListAsync();
            return cart;
        }

        public async Task<List<Item>> GetItemsByUser(int userId)
        {
            var item = await _context.Items.Where(c => c.UserId == userId).OrderBy(c => c.CreatedDate).ToListAsync();
            return item;
        }

        public async Task<Cart> GetCartItem(int userId, int itemId)
        {
            var cart = await _context.Cart.Include(c => c.User).Include(i => i.Item).ThenInclude(p => p.Photo).Where(c => c.UserId == userId && c.ItemId == itemId).FirstOrDefaultAsync();
            return cart;
        }

        public IEnumerable<Item> GetItemsFormCart(int userId)
        {
            var cart = _context.Cart.Include(c => c.User).Include(i => i.Item).Where(c => c.UserId == userId).Select(s => s.Item).ToListAsync();
            return cart.Result;
        }
    }
}