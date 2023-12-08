import React from "react";
import "./YouTubeFrame.css";

export default function YouTubeFrame({ url }) {
  return (
    <li className="col-12 col-md-6 col-xl-4 my-3">
      <div className="yt-frame-container">
        <iframe className="yt-frame" src={url} allowFullScreen></iframe>
      </div>
    </li>
  );
}
