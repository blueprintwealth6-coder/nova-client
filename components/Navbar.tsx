"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/">
          <h1 className="text-3xl font-black text-cyan-400 cursor-pointer">
            NOVA
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-gray-300">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="/feed" className="hover:text-cyan-400 transition">
            Explore
          </Link>

          <Link href="/search" className="hover:text-cyan-400 transition">
            Search
          </Link>

          <Link href="/upload" className="hover:text-cyan-400 transition">
            Upload
          </Link>

          <Link href="/profile" className="hover:text-cyan-400 transition">
            Profile
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <Link href="/login">
            <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-bold transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="bg-pink-500 hover:bg-pink-400 px-6 py-3 rounded-xl font-bold transition">
              Sign Up
            </button>
          </Link>
        </div>

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
            <Link href="/">Home</Link>
            <Link href="/feed">Explore</Link>
            <Link href="/search">Search</Link>
            <Link href="/upload">Upload</Link>
            <Link href="/profile">Profile</Link>

            <Link href="/login">
              <button className="bg-cyan-500 rounded-xl py-3 w-full">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="bg-pink-500 rounded-xl py-3 w-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}