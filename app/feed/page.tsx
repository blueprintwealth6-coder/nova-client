"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

interface Video {
  _id: string;
  title: string;
  videoUrl: string;
  description?: string;
  views?: number;
  likes?: number;
  user?: {
    username: string;
    avatarUrl?: string;
  };
}

export default function FeedPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGlobalFeed = async () => {
      try {
        // Puray feed ki videos lane ke liye backend api route ko target kiya hai
        const res = await API.get("/videos");
        
        // Agar response array hai toh store karein, warna data key check karein
        if (Array.isArray(res.data)) {
          setVideos(res.data);
        } else if (res.data && Array.isArray(res.data.videos)) {
          setVideos(res.data.videos);
        }
      } catch (err) {
        console.error("Feed lane me masla hua:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalFeed();
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-cyan-400 font-bold text-lg">
        <div className="animate-pulse">Loading NOVA Feed...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#05070f] min-h-screen text-white p-6 pt-28">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-cyan-400 mb-8 border-b border-white/10 pb-4">
          Trending Feed
        </h1>

        {videos.length === 0 ? (
          <div className="text-center py-20 bg-[#111] rounded-2xl border border-white/5">
            <p className="text-gray-400 text-lg">Abhi tak feed par koi video maujood nahi hai.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div 
                key={video._id} 
                className="bg-[#111424] rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all group flex flex-col justify-between"
              >
                {/* Video Player Box */}
                <div className="relative aspect-video bg-black w-full overflow-hidden">
                  <video 
                    src={video.videoUrl} 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/icon-512x512.png" // Fallback logo preview jab tak load na ho
                  />
                </div>

                {/* Video Details Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-bold text-lg text-white group-hover:text-cyan-400 transition line-clamp-1">
                      {video.title}
                    </h2>
                    {video.description && (
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>

                  {/* Creator Info Footer */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-xs text-gray-400">
                    <span className="font-semibold text-pink-400">
                      @{video.user?.username || "creator"}
                    </span>
                    <div className="flex gap-3">
                      <span>👁️ {video.views || 0}</span>
                      <span>❤️ {video.likes || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
