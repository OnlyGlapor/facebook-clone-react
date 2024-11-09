import React, { useState } from 'react';
import { 
  Search,
  Home,
  PlayCircle,
  StoreIcon,
  Users,
  Grid,
  MessageCircle,
  Bell
} from 'lucide-react';

const FacebookLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
    <circle cx="24" cy="24" r="24" fill="#1877F2"/>
    <path d="M27.7 25.6h5l.8-5.6h-5.8v-3.9c0-1.6.6-2.8 3-2.8H34V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1 .2 2 .2 3.1.2s2.1-.1 3.1-.2V25.6z" 
          fill="white"/>
  </svg>
);

const Header = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [notifications] = useState({
    messages: 3,
    alerts: 5
  });

  // Using a stable URL from randomuser.me
  const profileImageUrl = "https://randomuser.me/api/portraits/men/32.jpg";

  const navItems = [
    { id: 'home', icon: Home, tooltip: 'Home' },
    { id: 'videos', icon: PlayCircle, tooltip: 'Videos' },
    { id: 'marketplace', icon: StoreIcon, tooltip: 'Marketplace' },
    { id: 'groups', icon: Users, tooltip: 'Groups' },
    { id: 'gaming', icon: Grid, tooltip: 'Gaming' }
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b h-[56px]">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left */}
        <div className="flex items-center flex-1">
          <div className="flex items-center min-w-[60px] group">
            <FacebookLogo />
          </div>
          <div className="max-w-[240px] ml-2">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 group focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200">
              <Search className="h-4 w-4 text-gray-500 group-focus-within:text-blue-500" />
              <input
                type="text"
                placeholder="Search Facebook"
                className="hidden md:inline-flex ml-2 bg-transparent outline-none flex-1 placeholder-gray-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-1 justify-center space-x-2">
          {navItems.map(({ id, icon: Icon, tooltip }) => (
            <div
              key={id}
              onClick={() => setActiveNav(id)}
              className="relative group"
            >
              <div className={`px-10 py-2 cursor-pointer transition-all duration-200 
                ${activeNav === id 
                  ? 'border-b-4 border-blue-500' 
                  : 'hover:bg-gray-100 rounded-lg'}`}
              >
                <Icon 
                  className={`h-6 w-6 transition-colors duration-200
                    ${activeNav === id ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-700'}`} 
                />
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-700 text-white text-sm py-1 px-2 rounded-lg mt-2 whitespace-nowrap">
                  {tooltip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-end items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer 
                         hover:bg-gray-300 transition-colors duration-200 group">
            <Grid className="h-5 w-5 text-black group-hover:scale-105 transition-transform duration-200" />
          </div>
          
          {/* Messages */}
          <div className="relative">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer 
                           hover:bg-gray-300 transition-colors duration-200 group">
              <MessageCircle className="h-5 w-5 text-black group-hover:scale-105 transition-transform duration-200" />
              {notifications.messages > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center 
                               justify-center rounded-full animate-bounce">
                  {notifications.messages}
                </span>
              )}
            </div>
          </div>
          
          {/* Notifications */}
          <div className="relative">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer 
                           hover:bg-gray-300 transition-colors duration-200 group">
              <Bell className="h-5 w-5 text-black group-hover:scale-105 transition-transform duration-200" />
              {notifications.alerts > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center 
                               justify-center rounded-full animate-bounce">
                  {notifications.alerts}
                </span>
              )}
            </div>
          </div>
          
          {/* Profile */}
          <div className="cursor-pointer group">
            <img
              src={profileImageUrl}
              alt="Profile"
              className="w-9 h-9 rounded-full transform transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;