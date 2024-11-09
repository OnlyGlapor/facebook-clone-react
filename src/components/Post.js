import React, { useState } from 'react';
import { Globe, MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState(false);

  // Enhanced reaction display
  const reactionTypes = [
    { icon: "👍", count: post.likes, color: "bg-blue-500" },
    { icon: "❤️", count: Math.floor(post.likes * 0.3), color: "bg-red-500" },
    { icon: "😆", count: Math.floor(post.likes * 0.1), color: "bg-yellow-500" }
  ];

  // Action menu items
  const actionMenuItems = [
    { label: "Save post", icon: "📥" },
    { label: "Edit post", icon: "✏️" },
    { label: "Hide post", icon: "👁️" },
    { label: "Delete post", icon: "🗑️", danger: true }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 transition-shadow duration-200 hover:shadow-md">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Author Avatar */}
            <div className="relative group cursor-pointer">
              <img
                src={post.userImage || "https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-1/358436123_746713900796196_3501156095924192639_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeFyfYJIglFkX8g6PRuFlMTnnJpedSNzQTacml51I3NBNgGgHk_f_ckaLO2DTkC9XtEW1Te9JqRwSrcyVk673Gg4&_nc_ohc=ppyWtxRZz5MQ7kNvgFg2gR4&_nc_zt=24&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=ApH_XRnenGx3HGxYy-igASE&oh=00_AYADHqxmVItJEsNi_gB3v-M2c4ivELUiUJ0gTPnXt_Ti-w&oe=6734958F"}
                alt={post.user}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-gray-200 
                         transition-all duration-200"
              />
              {post.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full 
                               border-2 border-white"></div>
              )}
            </div>

            {/* Author Info */}
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold hover:underline cursor-pointer text-[15px]">{post.user}</h3>
                {post.verified && (
                  <div className="group relative">
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
                    </svg>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block 
                                  bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      Verified Account
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-gray-500 text-[13px]">
                <span>{post.timeAgo}</span>
                <span>·</span>
                <div className="flex items-center space-x-1 group cursor-pointer">
                  <Globe className="h-3.5 w-3.5 group-hover:text-blue-500 transition-colors duration-200" />
                  <span className="group-hover:text-blue-500 transition-colors duration-200">Public</span>
                </div>
              </div>
            </div>
          </div>

          {/* More Actions Button */}
          <div className="relative">
            <button 
              onClick={() => setShowActionMenu(!showActionMenu)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>

            {/* Action Menu Dropdown */}
            {showActionMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border 
                             border-gray-200 z-50 py-2 animate-fadeIn">
                {actionMenuItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-gray-50 
                              transition-colors duration-200
                              ${item.danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'}`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[14px] font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Post Content */}
        <div className="mt-3 text-[15px] whitespace-pre-line">
          {post.content}
        </div>

        {/* Post Image (if exists) */}
        {post.image && (
          <div className="mt-3 -mx-4">
            <img
              src={post.image}
              alt="Post content"
              className="w-full hover:brightness-95 transition-all duration-200 cursor-pointer"
            />
          </div>
        )}

        {/* Post Stats */}
        <div className="mt-3 flex items-center justify-between text-gray-500 text-sm">
          {/* Reactions */}
          <div className="flex items-center space-x-2 group cursor-pointer hover:underline">
            <div className="flex -space-x-1">
              {reactionTypes.map((reaction, index) => (
                <div 
                  key={index}
                  className={`w-5 h-5 rounded-full ${reaction.color} flex items-center justify-center 
                             ring-2 ring-white`}
                >
                  <span className="text-xs">{reaction.icon}</span>
                </div>
              ))}
            </div>
            <span>{post.likes.toLocaleString()}</span>
          </div>

          {/* Comments and Shares */}
          <div className="flex space-x-3 text-[13px]">
            <button className="hover:underline">
              {post.comments.toLocaleString()} comments
            </button>
            <button className="hover:underline">
              {post.shares.toLocaleString()} shares
            </button>
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between px-2 py-1 border-t">
        {/* Like Button */}
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex items-center justify-center space-x-2 flex-1 p-2 rounded-lg
                     transition-all duration-200 hover:bg-gray-100 group
                     ${liked ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <ThumbsUp className={`h-5 w-5 group-hover:scale-110 transition-transform duration-200 
                              ${liked ? 'fill-current' : ''}`} />
          <span className="font-medium text-[15px]">Like</span>
        </button>

        {/* Comment Button */}
        <button className="flex items-center justify-center space-x-2 flex-1 p-2 rounded-lg
                          transition-all duration-200 hover:bg-gray-100 group text-gray-500">
          <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium text-[15px]">Comment</span>
        </button>

        {/* Share Button */}
        <button className="flex items-center justify-center space-x-2 flex-1 p-2 rounded-lg
                          transition-all duration-200 hover:bg-gray-100 group text-gray-500">
          <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium text-[15px]">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;