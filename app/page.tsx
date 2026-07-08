"use client";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
      }}
    >
      <Feed />
    </div>
  );
}