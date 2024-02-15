"use client";
import ReactPlayer from "react-player/lazy";
export const VideoPlayer = () => {
  return <ReactPlayer loop controls url={"/video/product.mp4"} />;
};
