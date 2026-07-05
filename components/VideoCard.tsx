"use client";

import { useState, useRef, useEffect } from "react";
import API from "@/lib/api";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";

export default function VideoCard({ video }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(video.likes?.length || 0);
  const [showHeart, setShowHeart] = useState(false);

  // Play only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.7,
      }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  // Like Video
  const handleLike = async () => {
    if (!liked) {
      setLiked(true);
      setLikes((prev: number) => prev + 1);

      setShowHeart(true);

      setTimeout(() => {
        setShowHeart(false);
      }, 700);
    }

    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/video/like/${video._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Save Video
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/video/save/${video._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSaved(!saved);
    } catch (err) {
      console.log(err);
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
        ref={videoRef}
        src={video.videoUrl}
        loop
        controls
        playsInline
        onDoubleClick={handleLike}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Heart Animation */}
      {showHeart && (
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "90px",
            color: "#18b6ff",
          }}
        >
          ❤️
        </div>
      )}

      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "230px",
          background:
            "linear-gradient(transparent, rgba(0,0,0,.95))",
        }}
      />

      {/* User Info */}
      <div
        style={{
          position: "absolute",
          bottom: "140px",
          left: "18px",
          color: "#fff",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "22px",
          }}
        >
          @{video.user?.username}
        </h3>

        <p>{video.caption}</p>

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
          bottom: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <Heart
          size={34}
          onClick={handleLike}
          color="#18b6ff"
          fill={liked ? "#18b6ff" : "transparent"}
          style={{ cursor: "pointer" }}
        />

        <span style={{ color: "#fff" }}>{likes}</span>

        <MessageCircle
          size={34}
          color="#18b6ff"
        />

        <span style={{ color: "#fff" }}>
          {video.comments?.length || 0}
        </span>

        <Share2
          size={34}
          color="#18b6ff"
        />

        <span style={{ color: "#fff" }}>0</span>

        <Bookmark
          size={34}
          onClick={handleSave}
          color="#18b6ff"
          fill={saved ? "#18b6ff" : "transparent"}
          style={{ cursor: "pointer" }}
        />
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
            width: "90px",
            background: "#18b6ff",
            border: "none",
            color: "#fff",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}