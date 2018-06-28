using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace ShopApp.API.Helpers
{
    public static class Extentions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        
        public static void AddPagination(this HttpResponse response, int currentPage,
                            int itemsPerPage, int totalItems, int totalPages)
        {
            var PaginationHeader = new PaginHeader(currentPage,itemsPerPage,totalItems,totalPages);
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            response.Headers.Add("Pagination", JsonConvert.SerializeObject(PaginationHeader, camelCaseFormatter));
            response.Headers.Add("Access-Control-Expose-Headers","Pagination");
        }
    }
}