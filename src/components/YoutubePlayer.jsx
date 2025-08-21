"use client";

import { useEffect, useRef, useState } from "react";

export default function YoutubePlayer({ videoId }) {
  const playerRef = useRef(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const initPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player("yt-player", {
        videoId,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 0,
          controls: 1,
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setIsDone(true);
    }
  };

  return (
    <>
      <div className="w-full max-w-5xl aspect-video mt-15 md:mt-20">
        <div key={videoId} id="yt-player" className="w-full h-full"></div>
      </div>

      <p className="mt-5 text-xl font-medium">
        Status :{" "}
        <span className={isDone ? "text-green-600" : "text-red-600"}>
          {isDone ? "Selesai ditonton" : "Belum selesai ditonton"}
        </span>
      </p>
    </>
  );
}
