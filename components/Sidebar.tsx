"use client";

import Link from "next/link";

import {
    FaHome,
    FaSearch,
    FaUpload,
    FaUser,
    FaBell,
    FaBookmark,
    FaCog,
    FaCommentDots
} from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-zinc-800 text-white flex flex-col">

            <div className="text-4xl font-bold text-pink-500 p-8">
                NOVA
            </div>

            <nav className="flex flex-col gap-3 px-5">

                <Link href="/" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaHome size={22}/>
                    Home
                </Link>

                <Link href="/search" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaSearch size={22}/>
                    Search
                </Link>

                <Link href="/upload" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaUpload size={22}/>
                    Upload
                </Link>

                <Link href="/notifications" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaBell size={22}/>
                    Notifications
                </Link>

                <Link href="/messages" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaCommentDots size={22}/>
                    Messages
                </Link>

                <Link href="/saved" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaBookmark size={22}/>
                    Saved
                </Link>

                <Link href="/profile" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaUser size={22}/>
                    Profile
                </Link>

                <Link href="/settings" className="flex items-center gap-4 hover:bg-zinc-900 p-4 rounded-xl">
                    <FaCog size={22}/>
                    Settings
                </Link>

            </nav>

        </aside>
    );
}