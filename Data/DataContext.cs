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
        public DbSet<Message> Message { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<PaypalTransaction> PaypalTransactions { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Message>()
                .HasOne(u => u.Sender)
                .WithMany(m => m.MessageSent)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
                .HasOne(u => u.Recipient)
                .WithMany(m => m.MessageRecieved)
                .OnDelete(DeleteBehavior.Restrict);
          
        }
    }
}