// app/page.tsx
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectShelf from "@/components/ProjectShelf";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <SectionHeader
          id="shelf"
          eyebrow="{ the playable shelf }"
          title="The Playable Shelf"
          label="CC · archive"
        />
        <ProjectShelf />
      </section>

      <AboutPreview />
      <ContactSection />
    </main>
  );
}
