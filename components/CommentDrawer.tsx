
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  videoId: string;
  open: boolean;
  onClose: () => void;
}

export default function CommentDrawer({
  videoId,
  open,
  onClose,
}: Props) {
  const [comments, setComments] = useState<any[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (open) {
      loadComments();
    }
  }, [open]);

  const loadComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/video/comments/${videoId}`
      );

      setComments(res.data.comments || []);
    } catch (err) {
      console.log(err);
    }
  };

  const sendComment = async () => {
    if (!text.trim()) return;

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

      setText("");
      loadComments();
    } catch (err) {
      console.log(err);
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "65%",
        background: "#111",
        color: "#fff",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        padding: "20px",
        zIndex: 9999,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>Comments</h2>

        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      {comments.length === 0 && (
        <p style={{ color: "#999" }}>
          No comments yet.
        </p>
      )}

      {comments.map((comment: any) => (
        <div
          key={comment._id}
          style={{
            marginBottom: "18px",
            borderBottom: "1px solid #333",
            paddingBottom: "10px",
          }}
        >
          <strong>
            @{comment.user?.username || "User"}
          </strong>

          <p
            style={{
              marginTop: "6px",
            }}
          >
            {comment.text}
          </p>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Write a comment..."
          onChange={(e) => setText(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />

        <button
          onClick={sendComment}
          style={{
            padding: "12px 20px",
            background: "#ff0050",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

