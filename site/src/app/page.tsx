"use client";

import { useState } from "react";
import { products, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/FilterBar";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === null || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.owners.some((o) =>
        o.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <div className="mb-4 inline-block rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent)]">
              Premium Team
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Brown Belt{" "}
              <span className="text-[var(--color-accent)]">Projects</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              A{" "}
              <span className="font-semibold text-[var(--color-accent)]">
                secondary, self-learned
              </span>{" "}
              technical passion that lets you move things without waiting for
              others. These are the tools and products our team built outside
              their primary expertise.
            </p>
            <div className="mt-8 flex items-center gap-8 text-[var(--color-text-muted)]">
              <div className="flex flex-col">
                <span className="text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">{products.length}</span>
                <span className="text-sm">projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">{new Set(products.flatMap((p) => p.owners.map((o) => o.github))).size}</span>
                <span className="text-sm">builders</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl">{new Set(products.map((p) => p.category)).size}</span>
                <span className="text-sm">categories</span>
              </div>
            </div>
          </div>
          <div className="w-64 shrink-0 sm:w-72 lg:w-80">
            <div className="rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-surface-raised)] p-3 shadow-[0_0_40px_rgba(222,255,154,0.08)]">
              <img
                src="/brown-belt-website/hero.png"
                alt="Brown belt and black belt martial artists bowing"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-[var(--color-text-muted)]">
            No projects match your filters.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] px-6 py-8 text-center text-sm text-[var(--color-text-muted)]">
        <p>
          <span className="text-[var(--color-accent)]">Brown Belt</span> &mdash;
          Autodidactism. Don&apos;t wait for the Guild.
        </p>
      </footer>
    </main>
  );
}
