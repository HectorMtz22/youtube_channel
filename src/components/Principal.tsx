import React from "react";
import ReactPlayer from "react-player";
import { videos } from "./../videos.json";
import { isMobile } from "react-device-detect";

function mapVideos(id: string) {
  let url = "https://youtube.com/embed/" + id;
  return (
    <ReactPlayer
      className="player"
      key={id}
      url={url}
      controls
      width="100%"
      height="100%"
    />
  );
}

function Principal() {
  let classVideos = "";
  isMobile ? (classVideos = "videos-mobile") : (classVideos = "videos-desktop");
  return (
    <main className={classVideos}>
      {videos.map((id: string) => mapVideos(id))}
    </main>
  );
}

export default Principal;
