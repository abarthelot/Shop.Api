using System.Linq;
using AutoMapper;
using ShopApp.API.Dtos;
using ShopApp.API.Models;

namespace ShopApp.API.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UsersForListDto>().ForMember(
                dest => dest.PhotoUrl,opt => {
                    opt.MapFrom(src => src.Photo.FirstOrDefault(p => p.IsProfilePic).Url);
                }
            );
            CreateMap<User, UserForDetailsDto>().ForMember(
                dest => dest.PhotoUrl,opt => {
                    opt.MapFrom(src => src.Photo.FirstOrDefault(p => p.IsProfilePic).Url);
                }
            );

            CreateMap<Image, ImagesForDetailsDto>();

            CreateMap<Item, ItemsForListDto>();
            CreateMap<Item, ItemForDetailsDto>();
        }
    }
}