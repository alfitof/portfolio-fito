"use client";

import { useEffect, useState } from "react";
import { Music2 } from "lucide-react";

interface SpotifyData {
  isPlaying: boolean;
  title: string | null;
  artist?: string;
  albumImage?: string;
  songUrl?: string;
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetch_ = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then(setData)
        .catch(() => {});

    fetch_();
    const interval = setInterval(fetch_, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data?.title) return null;

  return (
    <a
      href={data.songUrl ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 group max-w-fit"
      title={data.isPlaying ? "Now Playing" : "Recently Played"}
    >
      {/* Album art */}
      {data.albumImage ? (
        <div className="relative w-7 h-7 flex-shrink-0">
          <img
            src={data.albumImage}
            alt={data.title}
            className="w-7 h-7 object-cover opacity-70 group-hover:opacity-100 transition-opacity"
          />
          {data.isPlaying && (
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
          )}
        </div>
      ) : (
        <Music2 className="w-3.5 h-3.5 text-zinc-600" />
      )}

      {/* Text */}
      <div className="min-w-0">
        <p className="text-[10px] text-zinc-600 leading-none mb-0.5">
          {data.isPlaying ? "▶ now playing" : "recently played"}
        </p>
        <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors truncate max-w-[160px]">
          {data.title}
          <span className="text-zinc-700"> — {data.artist}</span>
        </p>
      </div>
    </a>
  );
}
