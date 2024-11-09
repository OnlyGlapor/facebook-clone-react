import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Users,
  Clock,
  Bookmark,
  Flag,
  Calendar,
  ShoppingBag,
  Play,
  Gamepad2,
  Heart,
  Share2,
  MessagesSquare,
  RssIcon
} from 'lucide-react';

const LeftSidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const mainMenuItems = [
    {
      icon: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Kel Kel",
      type: "profile"
    },
    {
      icon: Users,
      text: "Friends (18 online)",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      text: "Memories",
      color: "text-blue-500"
    },
    {
      icon: Bookmark,
      text: "Saved",
      color: "text-purple-500"
    },
    {
      icon: Flag,
      text: "Pages",
      color: "text-blue-500"
    }
  ];

  const expandedMenuItems = [
    {
      icon: Calendar,
      text: "Events",
      color: "text-red-500"
    },
    {
      icon: ShoppingBag,
      text: "Marketplace",
      color: "text-blue-500"
    },
    {
      icon: Play,
      text: "Video",
      color: "text-blue-500"
    },
    {
      icon: Gamepad2,
      text: "Gaming",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      text: "Fundraisers",
      color: "text-gold-500"
    },
    {
      icon: Share2,
      text: "Professional Dashboard",
      color: "text-blue-500"
    },
    {
      icon: MessagesSquare,
      text: "Groups",
      color: "text-blue-500"
    },
    {
      icon: RssIcon,
      text: "Feeds",
      color: "text-blue-500"
    }
  ];

  // Enhanced shortcuts with realistic groups and pages
  const shortcuts = [
    {
      image: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-1/462298099_122183805776199105_8996132930416358823_n.jpg?stp=c3.3.37.37a_cp0_dst-jpg_p43x43&_nc_cat=100&ccb=1-7&_nc_sid=6738e8&_nc_eui2=AeGBkJ886w6FUJ3u3Dw8BfD5TJ-NgqS1S2hMn42CpLVLaCEtEWIlXrCnmZqTbCmPdjTFnA05ivLELtenF3YczHlq&_nc_ohc=150VFrPfNoUQ7kNvgETMbG-&_nc_zt=24&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AtBWyduwtqnuK2pm_o90wm6&oh=00_AYBcIVvzoR2aD8y0cHrAenapnPH2SGb_Qx2FUykTEUiyGQ&oe=67349619",
      text: "Strkze Studios",
      type: "page",
      memberCount: "2.5M followers"
    },
    {
      image: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-1/392881523_122129100452120937_8620606228159981724_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=110&ccb=1-7&_nc_sid=6738e8&_nc_eui2=AeHJZary9LRowgcDAFrOFanX7w5nbXSCy6_vDmdtdILLrwJuh1nXCROOiHaJ8p-Gntj1AvEdLG8tTusm12fuwKoy&_nc_ohc=6kKcrEfB2KMQ7kNvgGCuFlx&_nc_zt=24&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AtBWyduwtqnuK2pm_o90wm6&oh=00_AYCVXhcA_FKe1gU-JpYP5kf3YYFEGskU0JJ2fN9JjVMNQg&oe=6734A681",
      text: "Messiah Mission Church",
      type: "group",
      memberCount: "12.8K members"
    },
    {
      image: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-1/392881523_122129100452120937_8620606228159981724_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=110&ccb=1-7&_nc_sid=6738e8&_nc_eui2=AeHJZary9LRowgcDAFrOFanX7w5nbXSCy6_vDmdtdILLrwJuh1nXCROOiHaJ8p-Gntj1AvEdLG8tTusm12fuwKoy&_nc_ohc=6kKcrEfB2KMQ7kNvgGCuFlx&_nc_zt=24&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AtBWyduwtqnuK2pm_o90wm6&oh=00_AYCVXhcA_FKe1gU-JpYP5kf3YYFEGskU0JJ2fN9JjVMNQg&oe=6734A681",
      text: "Messiah Mission Church - Youth",
      type: "group",
      memberCount: "3.2K members"
    },
    {
      image: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-1/420170642_302491329517746_1202137075180165435_n.jpg?stp=c27.6.38.38a_cp0_dst-jpg_p68x68&_nc_cat=106&ccb=1-7&_nc_sid=6738e8&_nc_eui2=AeFAWuWbYA6u5VbvH4glFBARUsACuzJ33ldSwAK7MnfeV-BG7eYyVCizVGe1bFamAH2tKcqvAOV9NBClvLEnsSpQ&_nc_ohc=FKiYN6Ir318Q7kNvgGpvBoi&_nc_zt=24&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AtBWyduwtqnuK2pm_o90wm6&oh=00_AYAl-pCreFq0c0rj6n1nVa1m8FirnTdlpODOHYsVEtGIdw&oe=6734829C",
      text: "Web Developers Hub",
      type: "group",
      memberCount: "89.4K members"
    },
    {
      image: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.2081-6/11405239_786131601497923_1105720388_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=109&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHgp628k2AhtC119NRf7YEg9N30De8v1Zz03fQN7y_VnFLDykOs1nHRslDmqLc7Mufc9lqUBW917BxJ5AxxA5FE&_nc_ohc=8-FQl9tAJpsQ7kNvgF4GaQ3&_nc_zt=14&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=AB3btQDNCHP7aANc6WexlmV&oh=00_AYA--gNckmn37BoOjK3n0aazhec5FWeFkyAH1lzR0sdmLw&oe=6734B037",
      text: "Gaming Community",
      type: "group",
      memberCount: "45.6K members"
    }
  ];

  const MenuItem = ({ item }) => (
    <div className="flex items-center space-x-2 p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer 
                    transition-all duration-200 group">
      {item.type === 'profile' ? (
        <img src={item.icon} alt={item.text} className="w-8 h-8 rounded-full" />
      ) : (
        <div className={`p-1.5 rounded-full bg-gray-200 group-hover:scale-105 transition-transform duration-200`}>
          <item.icon className={`h-5 w-5 ${item.color}`} />
        </div>
      )}
      <span className="flex-1 text-[14px] font-medium truncate">{item.text}</span>
    </div>
  );

  return (
    <div className="fixed top-[56px] left-0 h-[calc(100vh-56px)] w-[240px] xl:w-[280px] 
                    pt-2 pb-4 pl-1 pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 
                    hover:scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div className="space-y-1">
        {/* Main Menu Items */}
        {mainMenuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}

        {/* See More/Less Button */}
        <div 
          onClick={() => setShowMore(!showMore)} 
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer 
                     transition-all duration-200 group"
        >
          <div className="p-2 rounded-full bg-gray-200 group-hover:scale-105 transition-transform duration-200">
            {showMore ? (
              <ChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </div>
          <span className="flex-1 text-[15px] font-medium">
            {showMore ? 'See Less' : 'See More'}
          </span>
        </div>

        {/* Expanded Menu Items */}
        {showMore && (
          <div className="space-y-1 animate-fadeIn">
            {expandedMenuItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        )}

        {/* Separator */}
        <div className="my-4 border-b border-gray-300"></div>

        {/* Shortcuts Section */}
        <div className="mb-2">
          <h3 className="px-2 text-gray-500 font-semibold text-[17px]">Your shortcuts</h3>
        </div>

        {/* Enhanced Shortcut Items */}
        {shortcuts.map((shortcut, index) => (
          <div 
            key={index}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer 
                       transition-all duration-200 group"
          >
            <img 
              src={shortcut.image}
              alt={shortcut.text}
              className="w-9 h-9 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-medium truncate">{shortcut.text}</p>
              <p className="text-xs text-gray-500 truncate">{shortcut.memberCount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-4 px-2 space-y-2">
        <div className="flex flex-wrap text-[13px] text-gray-500">
          <a href="#" className="hover:underline mr-2">Privacy</a>·
          <a href="#" className="hover:underline mx-2">Terms</a>·
          <a href="#" className="hover:underline mx-2">Advertising</a>·
          <a href="#" className="hover:underline mx-2">Ad Choices</a>·
          <a href="#" className="hover:underline mx-2">Cookies</a>
        </div>
        <div className="text-[13px] text-gray-500">
          Meta © 2024
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;