"use client";

import { useEffect, useState } from "react";

const COLORS = ["#ccff00", "#ff2e88", "#17e9ff", "#1b52ff", "#f2eddf", "#6c2bff"];
const SHAPES = ["square", "circle", "strip"] as const;
const PIECE_COUNT = 90;

type Piece = {
  id: number;
  x: number;
  color: string;
  shape: (typeof SHAPES)[number];
  size: number;
  delay: number;
  drift: number;
  spin: number;
  duration: number;
};

function makePieces(): Piece[] {
  return Array.from({ length: PIECE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    size: 6 + Math.random() * 10,
    delay: Math.random() * 0.9,
    drift: -40 + Math.random() * 80,
    spin: 180 + Math.random() * 720,
    duration: 1.6 + Math.random() * 1.8,
  }));
}

export function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!fire) return;
    setPieces(makePieces());
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4200);
    return () => clearTimeout(timer);
  }, [fire]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
      aria-hidden
    >
      {pieces.map((p) => {
        const style: React.CSSProperties = {
          position: "absolute",
          left: `${p.x}%`,
          top: "-5%",
          width: p.shape === "strip" ? p.size * 0.4 : p.size,
          height: p.shape === "strip" ? p.size * 2.2 : p.size,
          backgroundColor: p.color,
          borderRadius: p.shape === "circle" ? "50%" : p.shape === "strip" ? "2px" : "2px",
          animation: `confetti-fall ${p.duration}s ${p.delay}s cubic-bezier(0.2, 0.8, 0.4, 1) forwards`,
          ["--drift" as string]: `${p.drift}px`,
          ["--spin" as string]: `${p.spin}deg`,
          opacity: 0,
        };
        return <div key={p.id} style={style} />;
      })}
    </div>
  );
}
