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

            CreateMap<User, UserForDetailsDto>().ForMember(
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
            CreateMap<Cart, CartItemForListDto>().ForPath(
                dest => dest.Item.ImageUrl,opt => {
                    opt.MapFrom(src => src.Item.Photo.FirstOrDefault(p => p.IsProfilePic == true && p.IsItemImage == false).Url);
                }
            );
            CreateMap<CartItemForListDto, Cart>();

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
            CreateMap<MessageForCreateDto, Message>();
            CreateMap<Message, MessageForCreateDto>();
            CreateMap<Message, MessageToReturnDto>()
                        .ForMember(m => m.SenderPhotoUrl, opt => opt.MapFrom(u => u.Sender.Photo.FirstOrDefault(p => p.IsProfilePic && p.IsItemImage == false).Url))
                        .ForMember(m => m.RecipientPhotoUrl, opt => opt.MapFrom(u => u.Recipient.Photo.FirstOrDefault(p => p.IsProfilePic && p.IsItemImage == false).Url));

        }
    }
}