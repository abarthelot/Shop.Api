using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.API.Dtos.Payment
{
    public class Info
    {
        public string Intent { get; set; }
        public string OrderID { get; set; }
        public string PayerID { get; set; }
        public string PaymentID { get; set; }
        public string PaymentToken { get; set; }
    }
}
