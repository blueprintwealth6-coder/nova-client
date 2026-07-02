
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BottomNav from "@/components/BottomNav";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/notification",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNotifications(res.data.notifications);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        paddingBottom: "90px",
      }}
    >
      <h1>Notifications</h1>

      {notifications.length === 0 ? (
        <p
          style={{
            marginTop: "30px",
            color: "#999",
          }}
        >
          No Notifications Yet
        </p>
      ) : (
        notifications.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "15px",
              marginTop: "15px",
              background: "#111",
              borderRadius: "10px",
            }}
          >
            <img
              src={
                item.sender?.profilePic ||
                "https://placehold.co/60x60"
              }
              alt="Profile"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div>
              <strong>@{item.sender?.username}</strong>

              <p
                style={{
                  color: "#bbb",
                  marginTop: "5px",
                }}
              >
                {item.type === "like" && "liked your video ❤️"}
                {item.type === "comment" && "commented on your video 💬"}
                {item.type === "follow" && "started following you 👤"}
              </p>
            </div>
          </div>
        ))
      )}

      <BottomNav />
    </div>
  );
}

