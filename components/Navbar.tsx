"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-3xl font-black text-cyan-400">
          NOVA
        </h1>

        {/* Desktop Menu */}

        <div className="hidden lg:flex gap-10 text-gray-300">

          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Explore
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Communities
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            AI
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Desktop Button */}

        <button className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-bold transition">
          Login
        </button>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#0b1020] border-t border-white/10">

          <div className="flex flex-col p-6 gap-5">

            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Communities</a>
            <a href="#">AI</a>
            <a href="#">Contact</a>

            <button className="bg-cyan-500 rounded-xl py-3 mt-4">
              Login
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}