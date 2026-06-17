// components/ProjectGallery.tsx
import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectGallery({ project }: { project: Project }) {
  const accentStyle = { "--accent": project.accent } as React.CSSProperties;
  const gallery = project.gallery ?? [];
  const hero = project.heroImage;

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
          <Image
            src={lead.src}
            alt={lead.alt}
            width={1280}
            height={720}
            className="h-auto w-full"
          />
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
            <div key={img.src} className="overflow-hidden rounded-[4px]">
              <Image
                src={img.src}
                alt={img.alt}
                width={420}
                height={260}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
