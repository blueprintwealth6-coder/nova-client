"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import VideoCard from "@/components/VideoCard";
import BottomNav from "@/components/BottomNav";

export default function FeedPage() {
  const [videos, setVideos] = useState<any[]>([]);

  // Load Feed
  const loadFeed = async () => {
    try {
      const res = await API.get("/video/feed");
      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {videos.map((video: any) => (
        <div
          key={video._id}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
          }}
        >
          <VideoCard video={video} />
        </div>
      ))}

      <BottomNav />
    </div>
  );
}