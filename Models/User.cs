using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace ShopApp.API.Models
{
    public class User
    {
        public int Id {get; set;}
        public string Email {get; set;}
        public string Username {get; set;}
        public byte[] PasswordHash {get; set;}
        public byte[] PasswordSalt {get; set;}
        public string Address {get; set;}
        public string Country {get; set;}
        public string PostalCode {get; set;}
        public DateTime Joined {get; set;}
        public DateTime LastActive {get; set;}
        public ICollection<Image> Photo {get; set;}
        public ICollection<Item> PurchasedItems {get; set;}
        public ICollection<FavoriteItem> Favoriteslist {get; set;}
    
        public User()
        {
            Photo = new Collection<Image>();
            PurchasedItems = new Collection<Item>();
            Favoriteslist = new Collection<FavoriteItem>();
            Joined = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}