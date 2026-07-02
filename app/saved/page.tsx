
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BottomNav from "@/components/BottomNav";

export default function SavedPage() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    loadSaved();
  }, []);

  const loadSaved = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/user/saved",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setVideos(res.data.videos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        paddingBottom: "80px",
      }}
    >
      <h1>Saved Videos</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        {videos.map((video: any) => (
          <video
            key={video._id}
            src={video.videoUrl}
            controls
            style={{
              width: "100%",
              aspectRatio: "9/16",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

