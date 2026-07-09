"use client";

import { useState, useRef, useEffect } from "react";
import API from "@/lib/api";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";

type VideoProps = {
  video: any;
};

export default function VideoCard({ video }: VideoProps) {

  // Safety check
  if (!video) {
    return null;
  }

  const videoRef = useRef<HTMLVideoElement>(null);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const [likes, setLikes] = useState(
    video?.likes?.length ?? 0
  );

  const [showHeart, setShowHeart] = useState(false);

  // Auto Play
  useEffect(() => {

    if (!videoRef.current) return;

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

    observer.observe(videoRef.current);

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
        `/video/like/${video?._id}`,
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
        `/video/save/${video?._id}`,
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
        src={video?.videoUrl}
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
            animation: "pop .6s ease",
          }}
        >
          ❤️
        </div>
      )}

      {/* Bottom Gradient */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "250px",
          background:
            "linear-gradient(transparent, rgba(0,0,0,.95))",
        }}
      />

      {/* User Info */}
      <div
        style={{
          position: "absolute",
          left: "18px",
          bottom: "140px",
          color: "#fff",
          width: "75%",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          @{video?.user?.username || "Unknown"}
        </h3>

        <h4
          style={{
            marginTop: "10px",
            marginBottom: "8px",
            fontSize: "18px",
          }}
        >
          {video?.title}
        </h4>

        <p
          style={{
            color: "#ddd",
            fontSize: "15px",
            lineHeight: "22px",
          }}
        >
          {video?.description}
        </p>

        <p
          style={{
            color: "#18b6ff",
            marginTop: "8px",
          }}
        >
          {(video?.hashtags || []).join(" ")}
        </p>

        <p
          style={{
            color: "#999",
            marginTop: "8px",
          }}
        >
          👁 {video?.views || 0} Views
        </p>
      </div>
      {/* Right Side Icons */}
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

        <span style={{ color: "#fff" }}>
          {likes}
        </span>

        <MessageCircle
          size={34}
          color="#18b6ff"
        />

        <span style={{ color: "#fff" }}>
          {video?.comments?.length || 0}
        </span>

        <Share2
          size={34}
          color="#18b6ff"
          style={{ cursor: "pointer" }}
        />

        <span style={{ color: "#fff" }}>
          0
        </span>

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
          left: "15px",
          right: "15px",
          bottom: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
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
            border: "none",
            borderRadius: "10px",
            background: "#18b6ff",
            color: "#fff",
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