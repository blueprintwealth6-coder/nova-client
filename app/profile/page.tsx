
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BottomNav from "@/components/BottomNav";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);
      setVideos(res.data.videos);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
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
        paddingBottom: "90px",
      }}
    >
      <div
        style={{
          height: "180px",
          background:
            "linear-gradient(135deg,#ff0050,#6a00ff)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-60px",
        }}
      >
        <img
          src={user.profilePic || "https://placehold.co/120x120"}
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "4px solid #000",
            objectFit: "cover",
          }}
        />

        <h2>{user.username}</h2>

        <p style={{ color: "#bbb" }}>
          {user.bio || "No bio yet"}
        </p>
        <button
  onClick={() => {
    window.location.href = "/edit-profile";
  }}
  style={{
    marginTop: "20px",
    background: "#ff0050",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  }}
>
  Edit Profile
</button>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>{user.followers?.length || 0}</h3>
            <span>Followers</span>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>{user.following?.length || 0}</h3>
            <span>Following</span>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>{videos.length}</h3>
            <span>Videos</span>
          </div>
        </div>
      </div>

      <h2
        style={{
          marginLeft: "20px",
          marginTop: "40px",
        }}
      >
        My Videos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
          padding: "10px",
        }}
      >
        ```tsx
{videos.map((video: any) => (
  <div
    key={video._id}
    style={{
      position: "relative",
    }}
  >
    <video
      src={video.videoUrl}
      controls
      style={{
        width: "100%",
        aspectRatio: "9/16",
        objectFit: "cover",
      }}
    />

    <button
      onClick={async () => {
        if (!confirm("Delete this video?")) return;

        const token = localStorage.getItem("token");

        try {
          await axios.delete(
            `http://localhost:5000/api/video/delete/${video._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          alert("Video Deleted");

          setVideos((prev) =>
            prev.filter((v) => v._id !== video._id)
          );
        } catch (err) {
          alert("Delete Failed");
        }
      }}
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        background: "red",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        cursor: "pointer",
      }}
    >
      ✕
    </button>
  </div>
))}
```

     
      </div>

      <BottomNav />
    </div>
  );
}
