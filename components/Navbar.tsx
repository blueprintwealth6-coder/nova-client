"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Background me download event ko capture karne ke liye
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleDownloadClick = async () => {
    // Agar browser ka system prompt ready hai toh use chalayein
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      // Agar direct system prompt nahi chalta (jaise iOS/Safari pe), toh user ko guide karein
      alert("App download karne ke liye browser menu (3 dots ya share button) par ja kar 'Install App' ya 'Add to Home Screen' par click karein.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/">
          <h1 className="text-3xl font-black text-cyan-400 cursor-pointer">
            NOVA
          </h1>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-10 text-gray-300">
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

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Hamesha Dikhne Wala Download Button */}
          <button
            onClick={handleDownloadClick}
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
          >
            Download App
          </button>

          <Link href="/login">
            <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-bold transition text-black">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="bg-pink-500 hover:bg-pink-400 px-6 py-3 rounded-xl font-bold transition text-white">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0b1020] border-t border-white/10">
          <div className="flex flex-col p-6 gap-5 text-gray-300">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/feed" onClick={() => setMenuOpen(false)}>Explore</Link>
            <Link href="/search" onClick={() => setMenuOpen(false)}>Search</Link>
            <Link href="/upload" onClick={() => setMenuOpen(false)}>Upload</Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>

            {/* Mobile View Download Button */}
            <button
              onClick={() => {
                handleDownloadClick();
                setMenuOpen(false);
              }}
              className="border border-cyan-400 text-cyan-400 rounded-xl py-3 w-full font-bold text-center"
            >
              Download App
            </button>

            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-cyan-500 text-black font-bold rounded-xl py-3 w-full">
                Login
              </button>
            </Link>

            <Link href="/signup" onClick={() => setMenuOpen(false)}>
              <button className="bg-pink-500 text-white font-bold rounded-xl py-3 w-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
