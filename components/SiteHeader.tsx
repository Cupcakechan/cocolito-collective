// components/SiteHeader.tsx
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Art", href: "/art" },
  { label: "About", href: "/#about" },
  { label: "On AI", href: "/how-i-use-ai" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-paper/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Cocolito Collective home" className="rounded-[3px]">
          <LogoMark />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm text-cream/70 sm:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-[3px] transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
