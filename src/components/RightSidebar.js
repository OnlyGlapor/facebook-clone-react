import React from 'react';
import { Search, MoreHorizontal, Gift, VideoIcon, Circle } from 'lucide-react';

const RightSidebar = () => {
  // Enhanced contact data with real profile images
  const contacts = [
    { 
      id: 1, 
      name: 'James F Blay', 
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      online: true, 
      active: true 
    },
    { 
      id: 2, 
      name: 'Princess Botoe', 
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: true, 
      active: false 
    },
    { 
      id: 3, 
      name: 'Ça Kelvin In Christ', 
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      online: true, 
      active: true 
    },
    { 
      id: 4, 
      name: 'Van Dave Gbowea', 
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      online: false, 
      active: false 
    },
    { 
      id: 5, 
      name: 'Williametta Blessing Davids', 
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      online: true, 
      active: true 
    },
    { 
      id: 6, 
      name: 'Sarah Connor', 
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      online: true, 
      active: false 
    },
    { 
      id: 7, 
      name: 'John Miller', 
      image: 'https://randomuser.me/api/portraits/men/91.jpg',
      online: true, 
      active: true 
    }
  ];

  // Sponsored content
  const sponsoredContent = [
    {
      id: 1,
      image: 'https://scontent.fmlw1-2.fna.fbcdn.net/v/t45.1600-4/465573212_120214404901750300_5715979975230168161_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeG_pXeSWxamoGJg9xzMVIrftW35TK1i7xu1bflMrWLvG4PAwxzpAVOILMrBFfUYDBMRReq_CZ5Af5Cn5I9IFDYP&_nc_ohc=LNeVWYRYQWQQ7kNvgF-EktZ&_nc_zt=1&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AOTs-JuxXW8Gm59YPcjF0b4&oh=00_AYCKMHgb8Wx8C0mf3-ibd9X6WmybQCmQpkdfL5lb3J97vQ&oe=67347CEA',
      title: 'Taskbar Styles Pro 2024',
      link: 'sites.google.com',
    },
    {
      id: 2,
      image: 'https://scontent.fmlw1-2.fna.fbcdn.net/v/t45.1600-4/465112849_120214538186190092_4777574034955787817_n.png?stp=cp0_dst-jpg_q90_s526x296_spS444&_nc_cat=111&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeHzIpdw6jSRvCQSrBEZgqT-q_FOESdohHWr8U4RJ2iEdet6c2MAAfk-V6JIB5IVbENHqwFwbR3CX0UOMahDMJDY&_nc_ohc=SmQ3Mlt-RjkQ7kNvgEkLMPt&_nc_zt=1&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AOTs-JuxXW8Gm59YPcjF0b4&oh=00_AYAmdqTTRAdkysuGZnacGWzeyozKjNAKgJLtLq_qih7eVg&oe=67347E2D',
      title: 'Discover if you can PAPSS it!',
      link: 'papss.com',
    }
  ];

  // Birthday people
  const birthdayPeople = [
    {
      id: 1,
      name: 'Ça Kelvin In Christ',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  return (
    <div className="fixed top-[56px] right-0 h-[calc(100vh-56px)] w-[220px] xl:w-[280px]
                    pt-2 pb-4 pl-2 pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 
                    hover:scrollbar-thumb-gray-400 scrollbar-track-transparent">
      {/* Sponsored Section */}
      <div className="mb-4">
        <h2 className="text-gray-500 font-semibold text-[17px] mb-2 px-2">Sponsored</h2>
        <div className="space-y-4">
          {sponsoredContent.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer 
                                        transition-all duration-200 group">
              <img
                src={item.image}
                alt={item.title}
                className="w-[130px] h-[130px] rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[15px] truncate">{item.title}</h3>
                <p className="text-[13px] text-gray-500 truncate">{item.link}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Birthday Section */}
      <div className="mb-4 border-t pt-4">
        <h2 className="text-gray-500 font-semibold text-[17px] mb-2 px-2">Birthdays</h2>
        {birthdayPeople.map((person) => (
          <div key={person.id} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer 
                                        transition-all duration-200 group">
            <div className="relative">
              <Gift className="h-8 w-8 text-blue-500" />
              <img 
                src={person.image}
                alt={person.name}
                className="w-4 h-4 rounded-full absolute -right-1 -bottom-1 ring-2 ring-white"
              />
            </div>
            <p className="text-[15px]">
              <span className="font-semibold hover:underline cursor-pointer">{person.name}</span>'s birthday is today.
            </p>
          </div>
        ))}
      </div>

      {/* Contacts Section */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-gray-500 font-semibold text-[17px]">Contacts</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full transition-all duration-200">
              <VideoIcon className="h-4 w-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full transition-all duration-200">
              <Search className="h-4 w-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full transition-all duration-200">
              <MoreHorizontal className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Contact List */}
        <div className="space-y-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer 
                         transition-all duration-200 group"
            >
              <div className="relative">
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-9 h-9 rounded-full group-hover:scale-105 transition-transform duration-200"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full 
                                border-2 border-white"></div>
                )}
              </div>
              <span className="flex-1 text-[15px] font-medium truncate">{contact.name}</span>
              {contact.active && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;