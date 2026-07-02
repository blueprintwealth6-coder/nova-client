
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    searchUsers();
  }, []);

  const searchUsers = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/user/search?q=${query}`
      );

      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        padding: "20px",
        paddingBottom: "100px",
      }}
    >
      <h1>Search Users</h1>

      <input
        type="text"
        placeholder="Search username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          marginTop: "15px",
        }}
      />

      <button
        onClick={searchUsers}
        style={{
          marginTop: "10px",
          padding: "12px",
          width: "100%",
          background: "#ff0050",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {users.map((user) => (
          <Link
            key={user._id}
            href={`/profile/${user._id}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              background: "#111",
              marginBottom: "10px",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#333",
              }}
            />

            <div>
              <h3>{user.username}</h3>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
