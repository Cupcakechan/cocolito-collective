"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { Project, ProjectImage } from "@/lib/types";

export default function ProjectGallery({ project }: { project: Project }) {
  const accentStyle = { "--accent": project.accent } as React.CSSProperties;
  const gallery = project.gallery ?? [];
  const hero = project.heroImage;

  // The image currently shown in the lightbox (null = closed).
  const [active, setActive] = useState<ProjectImage | null>(null);
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

  // No real media yet → accent-tinted placeholder (matches the shelf cards).
  if (!hero && gallery.length === 0) {
    return (
      <div
        style={{ ...accentStyle, backgroundColor: `${project.accent}1f` }}
        className="mt-8 flex aspect-[16/9] items-center justify-center rounded-[6px]"
      >
        <span aria-hidden className="font-mono text-5xl text-cream/20">
          {"</>"}
        </span>
      </div>
    );
  }

  const lead = hero ?? gallery[0];
  const thumbs = hero ? gallery : gallery.slice(1);

  return (
    <div className="mt-8">
      {lead ? (
        <figure className="overflow-hidden rounded-[6px]">
          <button
            type="button"
            onClick={() => setActive(lead)}
            aria-label={`Enlarge image: ${lead.alt}`}
            className="group block w-full cursor-zoom-in"
          >
            <Image
              src={lead.src}
              alt={lead.alt}
              width={1280}
              height={720}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
          {lead.caption ? (
            <figcaption className="mt-2 text-sm text-cream/50">
              {lead.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {thumbs.length > 0 ? (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {thumbs.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(img)}
              aria-label={`Enlarge image: ${img.alt}`}
              className="group block cursor-zoom-in overflow-hidden rounded-[4px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={420}
                height={260}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      ) : null}

      {/* Lightbox overlay — click backdrop, the ×, or press Esc to close. */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso/95 p-4 sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-cream/80 transition-colors hover:border-brand hover:text-brand"
          >
            <span aria-hidden className="text-2xl leading-none">
              ×
            </span>
          </button>

          {/* stopPropagation so clicking the image/caption doesn't close it */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-full flex-col items-center"
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1280}
              height={720}
              className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-[4px] object-contain"
            />
            {active.caption ? (
              <figcaption className="mt-3 text-center text-sm text-cream/60">
                {active.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </div>
  );
}
