using System.ComponentModel.DataAnnotations;

namespace ShopApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username{get; set;}
        [Required]
        [StringLength(12,MinimumLength = 8, ErrorMessage = "Password must be bitween 8 to 12 chracters long.")]
        public string Password{get; set;}
    }
}