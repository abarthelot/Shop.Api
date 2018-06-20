using System;
using System.Collections.Generic;
using ShopApp.API.Models;

namespace ShopApp.API.Dtos
{
    public class UserForDetailsDto
    {
        public int Id { get; set; }
        public string Email {get; set;}
        public string Username {get; set;}
        public byte[] PasswordHash {get; set;}
        public byte[] PasswordSalt {get; set;}
        public string Address {get; set;}
        public string Country {get; set;}
        public string PostalCode {get; set;}
        public DateTime Joined {get; set;}
        public DateTime LastActive {get; set;}
        public string PhotoUrl { get; set; }
        public ICollection<ImagesForDetailsDto> Photo {get; set;}
        public ICollection<Item> PurchasedItems {get; set;}
        public ICollection<FavoriteItem> Favoriteslist {get; set;}
    }
}