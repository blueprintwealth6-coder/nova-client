"use client";

import VideoCard from "./VideoCard";

const videos = [
  {
    _id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Welcome to NOVA 🚀",
    views: 1200,
    likes: [],
    comments: [],
    user: {
      username: "nova",
    },
  },
  {
    _id: "2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    caption: "Second Video",
    views: 800,
    likes: [],
    comments: [],
    user: {
      username: "alex",
    },
  },
];

export default function Feed() {
  return (
    <div
      style={{
        width: "430px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}