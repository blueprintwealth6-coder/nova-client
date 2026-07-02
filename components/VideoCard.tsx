
"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function VideoCard({ video }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [likes, setLikes] = useState(video.likes?.length || 0);
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(false);
  const [views, setViews] = useState(video.views || 0);

  // ================= LIKE =================

  const likeVideo = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/video/like/${video._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLikes(res.data.likes);
    } catch (err) {
      console.log(err);
    }
  };

  // ================= COMMENT =================

  const addComment = async () => {
    if (!comment.trim()) return;

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:5000/api/video/comment/${video._id}`,
        {
          text: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Comment Added");
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  // ================= SHARE =================

  const shareVideo = () => {
    navigator.clipboard.writeText(window.location.href);

    alert("Video Link Copied");
  };

  // ================= SAVE =================

  const saveVideo = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/video/save/${video._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSaved(res.data.saved);
    } catch (err) {
      console.log(err);
    }
  };

  // ================= VIEW =================

  useEffect(() => {
    const addView = async () => {
      try {
        const res = await axios.put(
          `http://localhost:5000/api/video/view/${video._id}`
        );

        setViews(res.data.views);
      } catch (err) {
        console.log(err);
      }
    };

    addView();
  }, []);

  // ================= AUTOPLAY =================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.7,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (


    <div
      style={{
        width: "380px",
        height: "90vh",
        background: "#111",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ================= VIDEO ================= */}

      <video
        ref={videoRef}
        src={video.videoUrl}
        loop
        muted
        playsInline
        onClick={() => {
          if (!videoRef.current) return;

          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />

      {/* ================= USER INFO ================= */}

      <div
        style={{
          position: "absolute",
          left: "20px",
          bottom: "120px",
          color: "#fff",
          width: "70%",
        }}
      >
        <h3
          onClick={() => {
            window.location.href = `/user/${video.user._id}`;
          }}
          style={{
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          @{video.user?.username}
        </h3>

        <p>{video.caption}</p>

        <p
          style={{
            color: "#bbb",
            marginTop: "8px",
            fontSize: "14px",
          }}
        >
          👁 {views} Views
        </p>
      </div>

      {/* ================= RIGHT BUTTONS ================= */}

      <div
        style={{
          position: "absolute",
          right: "15px",
          bottom: "150px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {/* LIKE */}

        <button
          onClick={likeVideo}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          ❤️
          <br />
          {likes}
        </button>

        {/* SHARE */}

        <button
          onClick={shareVideo}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          📤
        </button>

        {/* SAVE */}

        <button
          onClick={saveVideo}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          {saved ? "⭐" : "☆"}
        </button>

      </div>

      {/* ================= COMMENT BOX ================= */}

      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          display: "flex",
          background: "rgba(0,0,0,0.6)",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          style={{
            flex: 1,
            padding: "12px",
            border: "none",
            outline: "none",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={addComment}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            background: "#ff0050",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
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

