"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function UploadPage() {
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const uploadVideo = async () => {
    if (!video) {
      alert("Please select a video");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("caption", caption);

    try {
      setLoading(true);

      const res = await API.post("/video/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);

      setCaption("");
      setVideo(null);
    } catch (err: any) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          err.message ||
          "Upload Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Upload Video
        </h1>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => {
            if (e.target.files?.length) {
              setVideo(e.target.files[0]);
            }
          }}
        />

        <input
          type="text"
          placeholder="Video Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={uploadVideo}
          disabled={loading}
          style={{
            padding: "14px",
            background: "#18b6ff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </div>
    </div>
  );
}