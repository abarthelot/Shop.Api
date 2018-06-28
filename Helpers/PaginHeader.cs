namespace ShopApp.API.Helpers
{
    public class PaginHeader
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }

        public PaginHeader(int currentPage, int itemperPage,int totalItems, int totalPages)
        {
            this.CurrentPage = currentPage;
            this.ItemsPerPage = itemperPage;
            this.TotalItems = totalItems;
            this.TotalPages = totalPages;
        }
    }
}