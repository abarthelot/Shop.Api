namespace ShopApp.API.Dtos
{
    public class UserForDetailsDto
    {
        public int Id {get; set;}
        public string Email {get; set;}
        public string Username {get; set;}
        public string Address {get; set;}
        public string Country {get; set;}
        public string PostalCode {get; set;}
        public string PhotoUrl { get; set; }
    }
}