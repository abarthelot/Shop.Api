namespace ShopApp.API.Dtos
{
    public class ImagesForDetailsDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsProfilePic { get; set; }
        public bool IsItemImage { get; set; }
    }
}