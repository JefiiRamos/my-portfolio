"use client";

import { useEffect, useRef } from "react";

type OrbConfig = {
  className: string;
  factor: number;
  maxOffset: number;
};

const ORBS: OrbConfig[] = [
  { className: "ambient-orb ambient-orb--one", factor: -0.18, maxOffset: 26 },
  { className: "ambient-orb ambient-orb--two", factor: -0.24, maxOffset: 34 },
  { className: "ambient-orb ambient-orb--three", factor: -0.14, maxOffset: 20 },
  { className: "ambient-orb ambient-orb--four", factor: -0.2, maxOffset: 28 },
  { className: "ambient-orb ambient-orb--five", factor: -0.12, maxOffset: 18 },
];

const DAMPING = 0.86;
const THRESHOLD = 0.08;
const IMPULSE_LIMIT = 18;

export function AmbientOrbs() {
  const orbRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const offsets = ORBS.map(() => 0);
    let frame = 0;
    let lastScrollY = window.scrollY;

    const render = () => {
      let hasMotion = false;

      orbRefs.current.forEach((orb, index) => {
        if (!orb) {
          return;
        }

        offsets[index] *= DAMPING;
        if (Math.abs(offsets[index]) < THRESHOLD) {
          offsets[index] = 0;
        } else {
          hasMotion = true;
        }

        orb.style.setProperty("--orb-scroll-y", `${offsets[index].toFixed(2)}px`);
      });

      frame = hasMotion ? window.requestAnimationFrame(render) : 0;
    };

    const kickAnimation = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (!delta) {
        return;
      }

      orbRefs.current.forEach((orb, index) => {
        if (!orb) {
          return;
        }

        const nextOffset = offsets[index] + delta * ORBS[index].factor;
        const maxOffset = ORBS[index].maxOffset;
        offsets[index] = Math.max(-maxOffset, Math.min(maxOffset, nextOffset));

        if (offsets[index] > IMPULSE_LIMIT) {
          offsets[index] = IMPULSE_LIMIT;
        }
        if (offsets[index] < -IMPULSE_LIMIT) {
          offsets[index] = -IMPULSE_LIMIT;
        }
      });

      kickAnimation();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="ambient-layer" aria-hidden>
      {ORBS.map((orb, index) => (
        <div
          key={orb.className}
          ref={(node) => {
            orbRefs.current[index] = node;
          }}
          className={orb.className}
        />
      ))}
    </div>
  );
}
