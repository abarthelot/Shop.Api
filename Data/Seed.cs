using System.Collections.Generic;
using Newtonsoft.Json;
using ShopApp.API.Models;

namespace ShopApp.API.Data {
    public class Seed {
        private readonly DataContext _context;
        public Seed (DataContext context) {
            this._context = context;

        }

        public void SeedUsers(){
            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;
                createHashAndSalt("password",out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();

                _context.Users.Add(user);
            }
            _context.SaveChanges();
        }

        public void SeedItems(){
            var itemData = System.IO.File.ReadAllText("Data/ItemSeedData.json");
            var items = JsonConvert.DeserializeObject<List<Item>>(itemData);
            foreach (var item in items)
            {
                _context.Items.Add(item);
            }
            _context.SaveChanges();
        }

        private void createHashAndSalt(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}