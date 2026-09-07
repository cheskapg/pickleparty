"use client";

import { useEffect, useRef, useState } from "react";
import { VinylRecord } from "./vectors/VinylRecord";

// Path is URL-style: a file at public/audio/x.mp3 is served as "/audio/x.mp3".
const MUSIC_SRC = "/audio/pickle-party.mp3";

export function MusicDock() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Autoplay on the gate click. The audio element is mounted from the start so
  // play() runs inside that click, which keeps browser autoplay rules happy.
  useEffect(() => {
    const start = () => {
      setVisible(true);
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().catch(() => setBlocked(true));
    };
    window.addEventListener("invitation-opened", start);
    return () => window.removeEventListener("invitation-opened", start);
  }, []);

  // Mirror the real element state so the icon never lies.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => {
      setPlaying(true);
      setBlocked(false);
    };
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setBlocked(true));
    } else {
      audio.pause();
    }
  }

  return (
    <>
      {MUSIC_SRC ? (
        <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
      ) : null}

      {visible ? (
        <aside className="fixed bottom-4 right-4 z-[60] max-w-[calc(100vw-2rem)]">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            aria-pressed={playing}
            className="flex items-center gap-3 border-[3px] border-ink bg-blue px-3 py-2.5 text-left shadow-[5px_5px_0_var(--pink)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative block size-12 shrink-0">
              <VinylRecord spinning={playing} className="size-full" />
              <span
                className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-ink bg-acid text-[8px] leading-none text-ink"
                aria-hidden
              >
                {playing ? "❚❚" : "▶"}
              </span>
            </span>
            <span>
              <span className="block font-display text-xs text-acid">
                PARTY RADIO
              </span>
              <span className="mt-0.5 block text-xs font-medium text-bone/85">
                {playing
                  ? "NOW PLAYING"
                  : blocked
                    ? "TAP TO PLAY"
                    : "PAUSED · TAP TO PLAY"}
              </span>
            </span>
          </button>
        </aside>
      ) : null}
    </>
  );
}
