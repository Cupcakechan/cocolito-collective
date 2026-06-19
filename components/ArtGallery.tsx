"use client";

import { useState, useEffect, useRef } from "react";
import { artPieces } from "@/data/art";
import type { ArtPiece } from "@/lib/types";

export default function ArtGallery() {
  // The piece currently shown enlarged (null = closed).
  const [active, setActive] = useState<ArtPiece | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // While the viewer is open: close on Escape, lock background scroll, and
  // move focus to the close button. Cleanup restores everything on close.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  // Nothing to show yet → a calm placeholder.
  if (artPieces.length === 0) {
    return (
      <div className="mt-8 flex aspect-[16/6] items-center justify-center rounded-[6px] bg-panel-warm">
        <span className="font-mono text-sm text-cream/40">pieces coming soon</span>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {artPieces.map((piece) => (
          <button
            key={piece.src}
            type="button"
            onClick={() => setActive(piece)}
            aria-label={`Enlarge: ${piece.caption ?? piece.alt}`}
            className="group block cursor-zoom-in text-left"
          >
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[6px] border border-paper/10 bg-panel-warm p-5 transition-colors group-hover:border-brand/40">
              {/* Plain <img>, not next/image: Next doesn't optimize animated
                  GIFs, and we want full control of the pixelated rendering so
                  small sprites scale up crisp instead of blurry. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.src}
                alt={piece.alt}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            {piece.caption || piece.from ? (
              <div className="mt-2.5">
                {piece.caption ? (
                  <p className="font-display text-sm font-semibold text-cream">
                    {piece.caption}
                  </p>
                ) : null}
                {piece.from ? (
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                    {piece.from}
                  </p>
                ) : null}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {/* Enlarge overlay — click the backdrop, the ×, or press Esc to close. */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Artwork viewer"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso/95 p-4 sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close viewer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-cream/80 transition-colors hover:border-brand hover:text-brand"
          >
            <span aria-hidden className="text-2xl leading-none">
              ×
            </span>
          </button>

          {/* stopPropagation so clicking the art/caption doesn't close it */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center"
          >
            <div
              className="flex items-center justify-center"
              style={{ width: "min(80vw, 70vh)", height: "min(80vw, 70vh)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                className="h-full w-full object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            {active.caption || active.from ? (
              <figcaption className="mt-3 text-center">
                {active.caption ? (
                  <span className="font-display text-base text-cream">
                    {active.caption}
                  </span>
                ) : null}
                {active.from ? (
                  <span className="mt-1 block font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {active.from}
                  </span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </div>
  );
}
