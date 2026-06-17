"use client";

import type { Category } from "@/lib/types";

export type Filter = "All" | Category;

type Props = {
  options: Filter[];
  active: Filter;
  onChange: (value: Filter) => void;
};

export default function CategoryFilter({ options, active, onChange }: Props) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`rounded-[3px] border px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-brand bg-brand text-espresso"
                : "border-paper/20 text-cream/70 hover:border-brand/60 hover:text-cream"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
