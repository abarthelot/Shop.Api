namespace ShopApp.API.Models
{
    public class MessageParam
    {
        private const int MaxPageSize = 10;
        public int PageNumber { get; set; } = 1;
        public int pageSize = 6;
        public int PageSize 
        {
            get { return pageSize;}
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }
        public int UserId { get; set; }
        public string MessageContainer { get; set; } = "unread";
    }
}