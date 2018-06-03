using Microsoft.EntityFrameworkCore;
using ShopApp.API.Models;

namespace ShopApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values{ get; set; }
    }
}