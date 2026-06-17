// components/SiteFooter.tsx
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-paper/10 bg-panel"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <LogoMark />
          <p className="mt-3 max-w-xs text-sm text-cream/60">
            Small games. Useful apps. Built with care.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm sm:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-5 text-cream/70">
              <li>
                <Link href="/#shelf" className="transition-colors hover:text-brand">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-brand">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://mrcanela.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  itch.io
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-cream/40">
            © {new Date().getFullYear()} Cocolito Collective
          </p>
        </div>
      </div>
    </footer>
  );
}
