// components/SiteHeader.tsx
"use client";

import { useState, useEffect } from "react";
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
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-paper/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          aria-label="Cocolito Collective home"
          className="rounded-[3px]"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
        </Link>

        {/* Desktop nav (sm and up) */}
        <nav aria-label="Primary" className="hidden sm:block">
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

        {/* Mobile toggle (below sm) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-1 rounded-[3px] p-2 text-cream/80 transition-colors hover:text-brand sm:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown panel (below sm) */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-paper/10 sm:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[4px] px-2 py-2 text-cream/80 transition-colors hover:bg-panel-warm hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
