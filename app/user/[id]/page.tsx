
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import BottomNav from "@/components/BottomNav";

export default function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [following, setFollowing] = useState(false);

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

  const followUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/follow/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFollowing(res.data.following);

      loadUser();
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
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <img
          src={user.profilePic || "https://placehold.co/150"}
          alt=""
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <h2>@{user.username}</h2>

        <p>{user.bio}</p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          <div>
            <h3>{user.followers?.length || 0}</h3>
            <p>Followers</p>
          </div>

          <div>
            <h3>{user.following?.length || 0}</h3>
            <p>Following</p>
          </div>

          <div>
            <h3>{videos.length}</h3>
            <p>Videos</p>
          </div>
        </div>

        <button
          onClick={followUser}
          style={{
            marginTop: "20px",
            padding: "12px 35px",
            border: "none",
            borderRadius: "12px",
            background: following ? "#444" : "#ff0050",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
          padding: "15px",
          marginTop: "30px",
        }}
      >
        {videos.map((video: any) => (
          <video
            key={video._id}
            src={video.videoUrl}
            controls
            style={{
              width: "100%",
              aspectRatio: "9/16",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

