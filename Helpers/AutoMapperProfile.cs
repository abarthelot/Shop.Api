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
                    opt.MapFrom(src => src.Photo.FirstOrDefault(p => p.IsProfilePic == true && p.IsItemImage == false).Url);
                }
            );
            CreateMap<User, UserForDetailsDto>().ForMember(
                dest => dest.PhotoUrl,opt => {
                    opt.MapFrom(src => src.Photo.FirstOrDefault(p => p.IsProfilePic == true && p.IsItemImage == false).Url);
                }
            );

            CreateMap<Image, ImagesForDetailsDto>();

            CreateMap<Item, ItemsForListDto>().ForMember(
                dest => dest.ImageUrl,opt => {
                    opt.MapFrom(src => src.Photo.FirstOrDefault( p => p.IsProfilePic == true ).Url);
                }
            );
            CreateMap<Item, ItemForDetailsDto>().ForMember(
                dest => dest.ImageUrl,opt => {
                    opt.MapFrom(src => src.Photo.FirstOrDefault( p => p.IsProfilePic == true ).Url);
                }
            );

            CreateMap<ItemForUpdateDto,Item>(); 
            CreateMap<ImagesForCreateDto, Image>();
            CreateMap<Image, ImageForReturnDto>();
        }
    }
}