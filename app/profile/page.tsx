"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import BottomNav from "@/components/BottomNav";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
      setVideos(res.data.videos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

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
          background: "linear-gradient(135deg,#ff0050,#6a00ff)",
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
          <div>
            <h3>{user.followers?.length || 0}</h3>
            <span>Followers</span>
          </div>

          <div>
            <h3>{user.following?.length || 0}</h3>
            <span>Following</span>
          </div>

          <div>
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
                  await API.delete(`/video/delete/${video._id}`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });

                  setVideos((prev) =>
                    prev.filter((v) => v._id !== video._id)
                  );

                  alert("Video Deleted");
                } catch (err) {
                  alert("Delete Failed");
                }
              }}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: "30px",
                height: "30px",
                border: "none",
                borderRadius: "50%",
                background: "red",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}