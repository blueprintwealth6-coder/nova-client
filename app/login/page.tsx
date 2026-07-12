"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Custom Toast State
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "" }>({
    message: "",
    type: "",
  });

  // Toast dikhane aur chupane ka function
  const triggerToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 3000);
  };

  const login = async () => {
    if (!email || !password) {
      triggerToast("Please enter email and password", "error");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Success Notification
      triggerToast("🎉 Login Successful!", "success");

      // 1.5 second ka pause taaki user success notification dekh sake, phir redirect ho
      setTimeout(() => {
        router.push("/feed");
      }, 1500);

    } catch (err: any) {
      console.log(err);
      const errMsg = err?.response?.data?.message || "Login Failed. Please try again.";
      
      // Error Notification
      triggerToast(`❌ ${errMsg}`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Toast position ke liye zaroori hai
      }}
    >
      {/* Dynamic Custom Toast Notification */}
      {toast.message && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: toast.type === "success" ? "#10b981" : "#ef4444", // Success pe Green, Error pe Red
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            fontWeight: "bold",
            zIndex: 9999,
            fontSize: "14px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {toast.message}
        </div>
      )}

      <div
        style={{
          width: "350px",
          background: "#111",
          padding: "30px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#222",
            color: "#fff",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#222",
            color: "#fff",
          }}
        />

        <button
          onClick={login}
          disabled={loading}
          style={{
            background: "#ff0050",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          onClick={() => router.push("/signup")}
          style={{
            background: "transparent",
            color: "#00d4ff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
}
