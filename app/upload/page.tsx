"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [category, setCategory] = useState("Other");
  const [visibility, setVisibility] = useState("public");

  const [video, setVideo] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadVideo = async () => {
    if (!video) {
      alert("Please Select Video");
      return;
    }

    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("video", video);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("hashtags", hashtags);
    formData.append("category", category);
    formData.append("visibility", visibility);

    try {
      setUploading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/video/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

          onUploadProgress: (event) => {
            const percent = Math.round(
              (event.loaded * 100) / (event.total || 1)
            );

            setProgress(percent);
          },
        }
      );

      alert(res.data.message);

      setTitle("");
      setDescription("");
      setHashtags("");
      setCategory("Other");
      setVisibility("public");

      setVideo(null);
      setPreview("");
      setProgress(0);
    } catch (err: any) {
      alert(
        err.response?.data?.message ||
          err.message ||
          "Upload Failed"
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1250px",
          display: "flex",
          gap: "50px",
          background: "#111",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 0 30px rgba(255,0,80,.2)",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {preview ? (
            <video
              src={preview}
              controls
              autoPlay
              loop
              style={{
                width: "340px",
                height: "620px",
                objectFit: "cover",
                borderRadius: "25px",
                border: "3px solid #ff0050",
                background: "#000",
              }}
            />
          ) : (
            <div
              style={{
                width: "340px",
                height: "620px",
                borderRadius: "25px",
                border: "3px dashed #444",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#777",
                fontSize: "22px",
                background: "#000",
              }}
            >
              Video Preview
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "38px",
              marginBottom: "10px",
            }}
          >
            Upload New Video
          </h1>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];

                setVideo(file);

                setPreview(URL.createObjectURL(file));
              }
            }}
          />
<input
  type="text"
  placeholder="Video Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  style={{
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  }}
/>

          <textarea
            placeholder="Video Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              resize: "none",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <input
            type="text"
            placeholder="#AI,#Funny,#Gaming"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          >
            <option>AI</option>
            <option>Funny</option>
            <option>Gaming</option>
            <option>Sports</option>
            <option>Football</option>
            <option>Cricket</option>
            <option>Music</option>
            <option>Education</option>
            <option>Technology</option>
            <option>Other</option>
          </select>

          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          >
            <option value="public">🌍 Public</option>
            <option value="private">🔒 Private</option>
          </select>
          {uploading && (
            <div
              style={{
                width: "100%",
                background: "#333",
                borderRadius: "20px",
                overflow: "hidden",
                height: "12px",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "12px",
                  background: "#ff0050",
                  transition: "0.3s",
                }}
              />
            </div>
          )}

          {uploading && (
            <div
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Uploading... {progress}%
            </div>
          )}

          <button
            onClick={uploadVideo}
            disabled={uploading}
            style={{
              padding: "16px",
              background: uploading ? "#666" : "#ff0050",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              cursor: uploading ? "not-allowed" : "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            {uploading ? "Uploading..." : "Upload Video"}
          </button>
          </div> {/* RIGHT SIDE */}
      </div> {/* MAIN CARD */}
    </div>
  );
}