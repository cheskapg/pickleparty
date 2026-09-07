"use client";

import { useEffect, useRef, useState } from "react";

// Add a file to public/audio and set this, e.g. "/audio/pickle-party.mp3".
const MUSIC_SRC = "";

export function MusicDock() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const start = async () => {
      setOpened(true);
      if (!MUSIC_SRC || !audioRef.current) return;
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };
    window.addEventListener("invitation-opened", start);
    return () => window.removeEventListener("invitation-opened", start);
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!MUSIC_SRC || !audio) return;
    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  if (!opened) return null;

  return (
    <aside className="fixed bottom-4 left-4 z-[60] max-w-[calc(100vw-2rem)]">
      {MUSIC_SRC ? (
        <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
      ) : null}
      <button
        type="button"
        onClick={toggle}
        aria-label={MUSIC_SRC ? (playing ? "Pause music" : "Play music") : "Music placeholder"}
        className="flex items-center gap-3 border-[3px] border-ink bg-blue px-3 py-2.5 text-left text-bone shadow-[5px_5px_0_var(--pink)]"
      >
        <span
          className={`flex size-9 items-center justify-center rounded-full border-2 border-bone bg-ink text-base ${
            playing ? "music-spin" : ""
          }`}
          aria-hidden
        >
          {playing ? "❚❚" : "♪"}
        </span>
        <span>
          <span className="block font-display text-xs text-acid">
            {MUSIC_SRC ? "PARTY RADIO" : "ADD PARTY TRACK"}
          </span>
          <span className="mt-0.5 block text-xs font-medium text-bone/80">
            {MUSIC_SRC ? (playing ? "NOW PLAYING" : "TAP TO PLAY") : "AUTOPLAYS AFTER OPEN"}
          </span>
        </span>
      </button>
    </aside>
  );
}
