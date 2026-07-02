
"use client";

import { useState } from "react";
import axios from "axios";

export default function FollowButton({ userId }: any) {
  const [following, setFollowing] = useState(false);

  const followUser = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/follow/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFollowing(!following);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={followUser}
      style={{
        background: following ? "#444" : "#ff0050",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
}
