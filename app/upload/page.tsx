
"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState<File | null>(null);

  const uploadVideo = async () => {
    console.log("Upload button clicked");

    if (!video) {
      alert("Please select a video");
      return;
    }

    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    const formData = new FormData();
    formData.append("video", video);
    formData.append("caption", caption);

    try {
      console.log("Sending request...");

      const res = await axios.post(
        "http://localhost:5000/api/video/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

      alert(res.data.message);

      setCaption("");
      setVideo(null);
    } catch (err: any) {
      console.log("Upload Error:", err);
      console.log("Response:", err.response);

      alert(
        err.response?.data?.message ||
          err.message ||
          "Upload Failed"
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Upload Video
        </h1>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setVideo(e.target.files[0]);
            }
          }}
        />

        <input
          type="text"
          placeholder="Enter Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={{
            padding: "10px",
          }}
        />

        <button
          onClick={uploadVideo}
          style={{
            padding: "12px",
            backgroundColor: "#ff0050",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Upload Video
        </button>
      </div>
    </div>
  );
}

