using System;
using ShopApp.API.Models;

namespace ShopApp.API.Dtos
{
    public class MessageForListDto
    {
        public UserForDetailsDto Sender { get; set; }
        public UserForDetailsDto Recipient { get; set; }
        public Item AboutItem { get; set; }
        public string Content { get; set; }
        public DateTime MessageSent { get; set; }

    }
}