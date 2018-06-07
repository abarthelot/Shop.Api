
using System.Threading.Tasks;
using ShopApp.API.Models;

namespace ShopApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password); 
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
         Task<bool> EmailExists(string email);
    }
}