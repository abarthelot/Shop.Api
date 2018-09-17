using ShopApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.API.Models
{
    public class PaypalTransaction
    {
        public int Id { get; set; }
        public string Intent { get; set; }
        public string OrderID { get; set; }
        public string PayerID { get; set; }
        public string PaymentID { get; set; }
        public string PaymentToken { get; set; }
        public double PaidAmount { get; set; }
        public IEnumerable<Item> Items { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public DateTime TransactionDate { get; set; }

        public PaypalTransaction()
        {
            TransactionDate = DateTime.Now;
        }
    }
}
