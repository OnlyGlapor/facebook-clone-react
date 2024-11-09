import React from 'react';
import { 
  Video as VideoIcon,
  Image,
  Smile,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
  Globe,
  ChevronRight,
  PlusCircle
} from 'lucide-react';
import Stories from './Stories';
import CreatePost from './CreatePost';
import Post from './Post';

const Feed = () => {
  // Sample stories data
  const stories = [
    { id: 1, user: "Williametta Blessing Davids", image: "/api/placeholder/180/250" },
    { id: 2, user: "Van Dave Gbowea", image: "/api/placeholder/180/250" },
    { id: 3, user: "Onefootball", image: "/api/placeholder/180/250" },
    { id: 4, user: "HapDan TV", image: "/api/placeholder/180/250" }
  ];

  // Sample posts data
  const posts = [
    {
      id: 1,
      user: "T. Kla Wesley Jr.",
      verified: true,
      timeAgo: "1h",
      content: `Man United will try to sign Alphonso Davies next summer as a free agent. According to Dean Jones, the Canadian wants a signing-on fee of around £10m if he is to move to Manchester United. He’s demanding £240,000-a-week wage.
United is keen on Davies but Real Madrid is still leading the race to sign him.`,
      likes: "12K",
      comments: "1.5K",
      shares: "842",
      privacy: "Public"
    },
    // Add more posts as needed
  ];

  return (
    <div className="w-[80%] mx-auto pt-4 pb-4">
      <div className="max-w-[680px] mx-auto px-4">
        {/* Stories Section */}
        <Stories />
        {/* Create Post */}
        <CreatePost />

        {/* Posts */}
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;