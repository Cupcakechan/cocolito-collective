// components/LogoMark.tsx
// Compact typographic wordmark used in the header and footer.
// The full illustrated cat logo appears in the hero (HeroSection).

type Props = {
  className?: string;
};

export default function LogoMark({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span aria-hidden className="font-mono text-brand">
        {"{"}
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-cream">
        Cocolito
      </span>
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand">
        Collective
      </span>
      <span aria-hidden className="font-mono text-brand">
        {"}"}
      </span>
    </span>
  );
}
