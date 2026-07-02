"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function SignupPage() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const res = await API.post("/auth/signup", {
        username,
        email,
        password,
      });

      alert(res.data.message);

      console.log(res.data);
    } catch (err: any) {
      console.log(err);

      alert(
        err?.response?.data?.message ||
          err?.message ||
          "Signup Failed"
      );
    }
  };

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-[#050816]"
    >
      <div className="bg-[#121826] p-8 rounded-2xl w-[400px]">

        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Signup
        </h1>

        <input
          className="w-full p-4 rounded-xl mb-4 bg-gray-900 text-white"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full p-4 rounded-xl mb-4 bg-gray-900 text-white"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-4 rounded-xl mb-6 bg-gray-900 text-white"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-white p-4 rounded-xl"
        >
          Create Account
        </button>

      </div>
    </main>
  );
}