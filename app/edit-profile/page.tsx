
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function UserProfilePage() {
  const { id } = useParams();

  const [user, setUser] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/user/${id}`
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
        padding: "20px",
      }}
    >
      <img
        src={user.profilePic || "https://placehold.co/120"}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
        }}
      />

      <h2>{user.username}</h2>

      <p>{user.bio}</p>

      <h3>Videos</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "8px",
        }}
      >
        {videos.map((video: any) => (
          <video
            key={video._id}
            src={video.videoUrl}
            controls
            style={{
              width: "100%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

