import React from 'react';
import { ChevronRight, PlusCircle } from 'lucide-react';

const Stories = () => {
  // Enhanced stories data with real user images and story previews
  const stories = [
    {
      id: 1,
      user: "Williametta Blessing",
      userImage: "https://randomuser.me/api/portraits/women/33.jpg",
      storyImage: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-6/465713190_1114780823345589_6055183685341663210_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6nrQezQhAeJx-mf35mDq2XmratqlCTeNeatq2qUJN4_ZpD7zaCfaKmaXICbiVWcI-MxsqDZw0ab4z7aRssTiD&_nc_ohc=F-5snczq8uoQ7kNvgE8orGD&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=A8O3xHfGLBiLVM9izDC3saI&oh=00_AYAUz-W5gS0PWXqfTZzNrSHAMLDvz3SY-OPBVcpfxTXYnQ&oe=6734B349",
      viewed: false
    },
    {
      id: 2,
      user: "Van Dave Gbowea",
      userImage: "https://randomuser.me/api/portraits/men/85.jpg",
      storyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmvX0i-iR1D-n5g6zv98ed2Vf5Nhdh2YmkA&s",
      viewed: false
    },
    {
      id: 3,
      user: "Sarah Connor",
      userImage: "https://randomuser.me/api/portraits/women/44.jpg",
      storyImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5L1yegKyoalDaKrVvqQ9iyoDoek8tAshow&s",
      viewed: true
    },
    {
      id: 4,
      user: "James Mitchell",
      userImage: "https://randomuser.me/api/portraits/men/55.jpg",
      storyImage: "https://source.unsplash.com/random/400x600/?city",
      viewed: false
    },
    {
      id: 5,
      user: "Emma Wilson",
      userImage: "https://randomuser.me/api/portraits/women/22.jpg",
      storyImage: "https://source.unsplash.com/random/400x600/?food",
      viewed: false
    }
  ];

  // Current user data for create story card
  const currentUser = {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    storyImage: "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-6/465739779_1066979571537568_8809550266083530912_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGJYzIOdnPanJ6Fuv2bWx-RGF7GdJyC0j8YXsZ0nILSP083Uchv778nioWeP1j8cra2BRcGkT9HCFkBq8ODTwMm&_nc_ohc=mPvEA3tOBb4Q7kNvgEk9pBB&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=Aga_VGWs5Uxh-jIIT4sTFnN&oh=00_AYAjJa-urcyNaLgZ1vDV-D2JmUipyjaoqh-ugOKokGHFwQ&oe=6734A415"
  };

  return (
    <div className="relative bg-white rounded-lg shadow mb-4 overflow-hidden">
      <div className="relative h-[250px] px-2 py-4">
        <div className="flex space-x-2 h-full">
          {/* Create Story Card */}
          <div className="relative flex-shrink-0 w-[140px] bg-white rounded-xl overflow-hidden cursor-pointer 
                        hover:transform hover:scale-[1.02] transition-all duration-200 shadow-sm">
            <div className="h-[170px] w-full relative">
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img
                src={currentUser.storyImage}
                alt="Create Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[80px] bg-white px-2 pt-6 pb-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full p-1 
                           ring-4 ring-white flex items-center justify-center">
                <PlusCircle className="h-full w-full text-white" />
              </div>
              <p className="text-sm font-semibold text-center">Create story</p>
            </div>
            {/* User Profile Picture Overlay */}
            <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full overflow-hidden 
                           ring-4 ring-white">
              <img
                src={currentUser.image}
                alt="Your Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Story Cards */}
          {stories.map((story) => (
            <div 
              key={story.id}
              className="relative flex-shrink-0 w-[140px] h-full rounded-xl overflow-hidden cursor-pointer 
                         group hover:transform hover:scale-[1.02] transition-all duration-200"
            >
              {/* Story Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={story.storyImage}
                  alt={story.user}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
              </div>

              {/* User Profile Picture */}
              <div className="absolute top-4 left-4">
                <div className={`ring-4 ${story.viewed ? 'ring-gray-300' : 'ring-blue-500'} rounded-full p-[2px] bg-gray-200`}>
                  <img
                    src={story.userImage}
                    alt={story.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-semibold line-clamp-2 drop-shadow-lg">
                  {story.user}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg 
                     flex items-center justify-center hover:bg-gray-100 transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-200 z-10"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Gradient Overlay for Scroll Indication */}
        <div className="absolute right-0 top-4 bottom-4 w-24 bg-gradient-to-l from-white pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Stories;