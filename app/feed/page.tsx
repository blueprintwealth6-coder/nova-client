"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

interface Video {
  _id: string;
  title: string;
  videoUrl: string;
  description?: string;
}

export default function FeedPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Apne backend ke sahi videos wale route ke mutabik badlein (e.g., /videos ya /feed)
        const res = await API.get("/videos"); 
        setVideos(res.data);
      } catch (err) {
        console.error("Videos lane me masla hua:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="text-white text-center p-10">Loading Feed...</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white p-6 pt-24">
      <h1 className="text-2xl font-bold mb-6">Video Feed</h1>

      {videos.length === 0 ? (
        <p className="text-gray-400">Abhi tak koi video upload nahi hui.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video._id} className="bg-[#111] p-4 rounded-xl border border-white/10">
              <video 
                src={video.videoUrl} 
                controls 
                className="w-full aspect-video rounded-lg bg-black"
              />
              <h2 className="mt-3 font-bold text-lg">{video.title}</h2>
              {video.description && <p className="text-sm text-gray-400 mt-1">{video.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
