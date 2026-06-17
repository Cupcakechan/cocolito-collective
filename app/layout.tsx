import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Display face — warm, with a point of view (kept for headings only).
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body face — readable and friendly, deliberately not the default Inter/Geist.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const TITLE = "Cocolito Collective — Small games. Useful apps. Built with care.";
const DESCRIPTION =
  "A small indie studio archive by Daniel Dilena: games, apps, and creative software, built with care.";

export const metadata: Metadata = {
  // Tells Next the real domain so relative URLs (the share image) resolve to it.
  metadataBase: new URL("https://cocolitocollective.com"),
  title: TITLE,
  description: DESCRIPTION,
  // How the link looks when shared (Facebook, LinkedIn, Discord, iMessage, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Cocolito Collective",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Cocolito Collective — Small games. Useful apps. Built with care.",
      },
    ],
  },
  // How the link looks when shared on X / Twitter.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
