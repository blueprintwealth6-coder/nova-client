"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function ProfilePage() {

  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<any>({
    username: "",
    profilePic: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/video/my-videos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVideos(res.data.videos);

      if (res.data.videos.length > 0) {
        setUser(res.data.videos[0].user);
      }

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          color: "#fff",
          textAlign: "center",
          padding: "50px",
          fontSize: "22px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        color: "#fff",
        padding: "30px",
      }}
    >      {/* Profile Header */}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginBottom: "40px",
      }}
    >

      <img
        src={
          user.profilePic ||
          "https://i.pravatar.cc/200"
        }
        alt="profile"
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #18b6ff",
        }}
      />

      <div>

        <h1
          style={{
            margin: 0,
            fontSize: "38px",
          }}
        >
          @{user.username}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "35px",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >

          <div>
            <strong>{videos.length}</strong>
            <br />
            Videos
          </div>

          <div>
            <strong>0</strong>
            <br />
            Followers
          </div>

          <div>
            <strong>0</strong>
            <br />
            Following
          </div>

        </div>

        <button
          style={{
            marginTop: "25px",
            background: "#18b6ff",
            color: "#fff",
            border: "none",
            padding: "12px 35px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Edit Profile
        </button>

      </div>

    </div>

    <hr
      style={{
        borderColor: "#222",
        marginBottom: "25px",
      }}
    />

    <h2
      style={{
        marginBottom: "20px",
      }}
    >
      Uploaded Videos
    </h2>
    <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {videos.map((video) => (
          <div
            key={video._id}
            onClick={() => {
              window.location.href = `/watch/${video._id}`;
            }}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <video
              src={video.videoUrl}
              muted
              playsInline
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background:
                  "linear-gradient(transparent, rgba(0,0,0,.9))",
                padding: "10px",
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {video.title}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                  fontSize: "13px",
                  color: "#ddd",
                }}
              >
                <span>▶ {video.views || 0}</span>
                <span>❤️ {video.likes?.length || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}