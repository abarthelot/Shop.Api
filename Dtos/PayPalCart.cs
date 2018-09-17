using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.API.Dtos
{
    public class PayPalCart
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Quantity { get; set; }
        public string Price { get; set; }
        public string Tax { get; set; } = "0.00";
        public string Sku { get; set; } = "1";
        public string Currency { get; set; } = "USD";
    }
}
