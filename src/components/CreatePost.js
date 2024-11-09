import React from 'react';
import { Video, Image, Smile } from 'lucide-react';

const CreatePost = () => {
  // Current user data
  const currentUser = {
    name: "Kel",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg"
  };

  // Action buttons data
  const actionButtons = [
    {
      icon: Video,
      text: "Live Video",
      color: "text-red-500",
      hoverBg: "hover:bg-red-50"
    },
    {
      icon: Image,
      text: "Photo/Video",
      color: "text-green-500",
      hoverBg: "hover:bg-green-50"
    },
    {
      icon: Smile,
      text: "Feeling/Activity",
      color: "text-yellow-500",
      hoverBg: "hover:bg-yellow-50"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4">
      {/* Top Section */}
      <div className="p-4">
        <div className="flex items-center space-x-2">
          {/* Profile Picture */}
          <div className="relative group cursor-pointer">
            <img
              src={currentUser.profileImage}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover group-hover:filter group-hover:brightness-95 transition-all duration-200"
            />
          </div>
          
          {/* Input Button */}
          <button className="flex-grow bg-gray-100 hover:bg-gray-200 rounded-full h-10 px-4 text-left 
                         text-gray-600 font-normal transition-colors duration-200">
            <span className="line-clamp-1 py-2">What's on your mind, {currentUser.name}?</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 mx-4"></div>

      {/* Bottom Section */}
      <div className="px-2 py-1">
        <div className="flex items-center justify-between">
          {actionButtons.map((button, index) => (
            <button
              key={index}
              className={`flex items-center justify-center space-x-2 flex-1 py-2 px-2 mx-1 
                         rounded-lg transition-colors duration-200 ${button.hoverBg} group`}
            >
              <button.icon className={`h-6 w-6 ${button.color} group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-gray-600 font-medium text-[15px] hidden sm:inline">{button.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;