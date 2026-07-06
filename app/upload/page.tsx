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
      alert("Please select a video");
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
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          gap: "40px",
        }}
     >        {/* Left Side - Video Preview */}
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
             width: "320px",
             height: "600px",
             borderRadius: "20px",
             objectFit: "cover",
             background: "#111",
             border: "2px solid #333",
           }}
         />
       ) : (
         <div
           style={{
             width: "320px",
             height: "600px",
             borderRadius: "20px",
             background: "#111",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             color: "#888",
             fontSize: "20px",
           }}
         >
           Video Preview
         </div>
       )}
     </div>

     {/* Right Side - Upload Form */}
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
           fontSize: "35px",
           marginBottom: "10px",
         }}
       >
         Upload Video
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
           padding: "14px",
           borderRadius: "10px",
           border: "none",
           fontSize: "16px",
         }}
       />

       <textarea
         placeholder="Video Description"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         rows={5}
         style={{
           padding: "14px",
           borderRadius: "10px",
           border: "none",
           resize: "none",
           fontSize: "15px",
         }}
       />

       <input
         type="text"
         placeholder="#AI,#Funny,#Football"
         value={hashtags}
         onChange={(e) => setHashtags(e.target.value)}
         style={{
           padding: "14px",
           borderRadius: "10px",
           border: "none",
         }}
       />

       <select
         value={category}
         onChange={(e) => setCategory(e.target.value)}
         style={{
           padding: "14px",
           borderRadius: "10px",
         }}
       >
         <option>AI</option>
         <option>Funny</option>
         <option>Football</option>
         <option>Cricket</option>
         <option>Gaming</option>
         <option>Music</option>
         <option>Education</option>
         <option>Sports</option>
         <option>Technology</option>
         <option>Other</option>
       </select>

       <select
         value={visibility}
         onChange={(e) => setVisibility(e.target.value)}
         style={{
           padding: "14px",
           borderRadius: "10px",
         }}
       >
         <option value="public">🌍 Public</option>
         <option value="private">🔒 Private</option>
       </select></div> 
       {uploading && (
            <div
              style={{
                width: "100%",
                background: "#333",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "10px",
                  background: "#ff0050",
                  transition: "0.3s",
                }}
              />
            </div>
          )}

          <button
            onClick={uploadVideo}
            disabled={uploading}
            style={{
              padding: "15px",
              background: "#ff0050",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {uploading ? `Uploading ${progress}%` : "Upload Video"}
          </button>
        </div>
      </div>
    </div>
  );
}