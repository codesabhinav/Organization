import Link from "next/link";
import React from "react";

function Video({ bgColor = "#121212" }: { bgColor?: string }) {
  return (
    <div className="tz-video1" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="tz-video1__wrapper">
          <img
            src="Picture2.png"
            style={{width:"100%"}}
            alt="img"
            className="tz-video1__image"
          />
          <Link
            className="tz-button__ripple popup-video"
            href="https://youtube.com/shorts/M_lprl9mqwU?si=IVycaqves5utTIHB"
          >
            <i className="ph-fill ph-play" />
          </Link>
          <div className="tz-video1__circle">
            <img
              src="https://digiflow-html.netlify.app/assets/images/video/video-round-text.png"
              alt="img"
              className="tz-video1__circle-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
