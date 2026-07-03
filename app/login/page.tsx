"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
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

      alert("Login Successful");

      router.push("/feed");
    } catch (err: any) {
      console.log(err);

      alert(
        err?.response?.data?.message ||
          "Login Failed. Please try again."
      );
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
      }}
    >
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