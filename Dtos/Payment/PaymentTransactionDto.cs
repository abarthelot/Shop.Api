using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.API.Dtos.Payment
{
    public class PaymentTransactionDto
    {
        public int UserId { get; set; }
        public double Amount { get; set; }
        public Info Info { get; set; }

    }
}
