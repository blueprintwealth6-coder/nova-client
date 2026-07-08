"use client";

import VideoCard from "./VideoCard";

export default function Feed() {
  return (
    <div
      style={{
        width: "430px",
      }}
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}