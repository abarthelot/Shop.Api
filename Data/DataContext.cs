using Microsoft.EntityFrameworkCore;
using ShopApp.API.Models;

namespace ShopApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values{ get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Item> Items{ get; set; }
        public DbSet<FavoriteItem> Favorites { get; set; }
    }
}