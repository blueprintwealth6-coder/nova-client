
"use client";

import { useState } from "react";
import API from "@/lib/api";
import {
  Heart,
  MessageCircle,
  Share2,
  Star,
} from "lucide-react";

export default function VideoCard({ video }: any) {

  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [likes, setLikes] = useState(video.likes?.length || 0);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes((prev: number) => prev + 1);
    }
  
    setShowHeart(true);
  
    setTimeout(() => {
      setShowHeart(false);
    }, 700);
  };

  const handleSave = async () => {
    try {
      await API.put(
        `/video/save/${video._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      alert("Video Saved ⭐");
    } catch (err) {
      console.log(err);
      alert("Please login first");
    }
  };

  return (

    <div
      style={{
        position: "relative",
        width: "420px",
        height: "90vh",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#111",
      }}
    >
      <video
    src={video.videoUrl}
    controls
    autoPlay
    loop
    onDoubleClick={handleLike}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      cursor: "pointer",
    }}
  />
      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "220px",
          background:
            "linear-gradient(transparent, rgba(0,0,0,0.9))",
        }}
      />

      {/* User Info */}
      <div
        style={{
          position: "absolute",
          bottom: "150px",
          left: "18px",
          color: "#fff",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          @{video.user?.username || "user"}
        </h3>

        <p
          style={{
            marginTop: "8px",
            color: "#ddd",
          }}
        >
          {video.caption}
        </p>

        <p
          style={{
            color: "#888",
          }}
        >
          👁 {video.views || 0} Views
        </p>
      </div>

      {/* Right Icons */}
      <div
        style={{
          position: "absolute",
          right: "15px",
          bottom: "130px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          color: "#18b6ff",
        }}
      >
       <Heart
  size={34}
  onClick={handleLike}
  color="#18b6ff"
  fill={liked ? "#18b6ff" : "transparent"}
  style={{
    cursor: "pointer",
    transition: ".3s",
  }}
/>
          <span>{likes}</span>

        <MessageCircle size={34} />
        <span>{video.comments?.length || 0}</span>

        <Share2 size={34} />
        <span>0</span>

        <Star
  size={34}
  color="#18b6ff"
  style={{
    cursor: "pointer",
  }}
  onClick={handleSave}
/>

<span>Save</span>

      </div>

      {/* Comment Box */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "15px",
          right: "15px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          placeholder="Write a comment..."
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            background: "#222",
            color: "#fff",
          }}
        />

        <button
          style={{
            width: "80px",
            background: "#18b6ff",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}