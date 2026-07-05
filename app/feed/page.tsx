
"use client";

import { useState, useEffect } from "react";
import API from "@/lib/api";
import VideoCard from "@/components/VideoCard";
import BottomNav from "@/components/BottomNav";

export default function FeedPage() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    try {
      const res = await API.get("/video/feed");
      setVideos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        display: "flex",
        justifyContent: "center",
        paddingRight: "110px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
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
      </div>

      <BottomNav />
    </div>
  );
}

