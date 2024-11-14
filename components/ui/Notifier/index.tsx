"use client";
import { useNotifications } from "@/zustand/hooks";
import React, { useRef, useEffect } from "react";

export function Notifier() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { notification } = useNotifications();

  useEffect(() => {
    if (notification === "added reservation") {
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
