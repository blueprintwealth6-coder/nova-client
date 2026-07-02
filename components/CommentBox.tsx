
"use client";

import { useState } from "react";
import axios from "axios";

export default function CommentBox({ videoId }: any) {
  const [text, setText] = useState("");

  const addComment = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:5000/api/video/comment/${videoId}`,
        {
          text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Comment Added");
      setText("");
    } catch (err) {
      console.log(err);
      alert("Comment Failed");
    }
  };

  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Write Comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "6px",
          border: "none",
        }}
      />

      <button
        onClick={addComment}
        style={{
          background: "#ff0050",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}

