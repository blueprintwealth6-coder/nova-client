"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  // Download App ka event catch karne ke liye useEffect
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleDownloadClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/">
          <h1 className="text-3xl font-black text-cyan-400 cursor-pointer">
            NOVA
          </h1>
        </Link>

        {/* Desktop Menu */}
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

        {/* Desktop Buttons & Download Button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Custom Download Button (Sirf tab dikhega jab website downloadable hogi) */}
          {isInstallable && (
            <button
              onClick={handleDownloadClick}
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
            >
              Download App
            </button>
          )}

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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0b1020] border-t border-white/10">
          <div className="flex flex-col p-6 gap-5 text-gray-300">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/feed" onClick={() => setMenuOpen(false)}>Explore</Link>
            <Link href="/search" onClick={() => setMenuOpen(false)}>Search</Link>
            <Link href="/upload" onClick={() => setMenuOpen(false)}>Upload</Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>

            {/* Mobile Download Button */}
            {isInstallable && (
              <button
                onClick={() => {
                  handleDownloadClick();
                  setMenuOpen(false);
                }}
                className="border border-cyan-400 text-cyan-400 rounded-xl py-3 w-full font-bold"
              >
                Download App
              </button>
            )}

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
