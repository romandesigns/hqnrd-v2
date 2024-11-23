"use client";
import { useNotifications } from "@/zustand/hooks";
import React, { useRef, useEffect } from "react";

export function Notifier() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { notification } = useNotifications();

  useEffect(() => {
    if (notification === "added reservation") {
      if (audioRef.current) {
        audioRef.current.volume = 0.25; // Set volume to halfway (50%)
      }
      audioRef.current?.play();
    }
  }, [notification]);

  return (
    <audio
      controls
      src="/assets/notifications/system-notification-199277.mp3"
      ref={audioRef}
      className="absolute top-60 hidden"
    />
  );
}
