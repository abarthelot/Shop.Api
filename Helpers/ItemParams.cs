namespace ShopApp.API.Helpers
{
    public class ItemParams
    {
        private const int MaxPageSize = 10;
        public int PageNumber { get; set; } = 1;
        public int pageSize = 6;
        public int PageSize 
        {
            get { return pageSize;}
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }
        public string IsService { get; set; }
        public double MinPrice { get; set; } = 0;
        public double MaxPrice { get; set; } = 0;
        public string SearchTerm { get; set; }
        public string OrderBy { get; set; }
    }
}