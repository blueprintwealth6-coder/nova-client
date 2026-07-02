
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    loadVideo();
  }, []);

  const loadVideo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/video/feed"
      );

      const found = res.data.find((v: any) => v._id === id);

      setVideo(found);
    } catch (err) {
      console.log(err);
    }
  };

  if (!video) {
    return (
      <div
        style={{
          background: "#000",
          color: "#fff",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        src={video.videoUrl}
        controls
        autoPlay
        style={{
          width: "360px",
          maxWidth: "100%",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
