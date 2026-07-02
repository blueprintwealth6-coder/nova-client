
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "@/components/VideoCard";
import BottomNav from "@/components/BottomNav";

export default function FeedPage() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/video/feed"
      );

      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {videos.map((video) => (
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

