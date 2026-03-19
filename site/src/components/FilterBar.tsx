"use client";

import type { Category } from "@/data/products";

const categories: Category[] = [
  "CLI Tool",
  "Web App",
  "Desktop App",
  "IDE Extension",
  "AI Skill",
];

interface FilterBarProps {
  activeCategory: Category | null;
  onCategoryChange: (category: Category | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
            activeCategory === null
              ? "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
              : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              onCategoryChange(activeCategory === cat ? null : cat)
            }
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-10 pr-4 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent)]/50 sm:w-64"
        />
      </div>
    </div>
  );
}
