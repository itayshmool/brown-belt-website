"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { CategoryBadge } from "./CategoryBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface-hover)] hover:shadow-[0_0_30px_rgba(222,255,154,0.06)]"
    >
      <div className="mb-4 flex items-start justify-between">
        <CategoryBadge category={product.category} />
        <span className="text-xs text-[var(--color-text-muted)]">
          {product.platform}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
        {product.name}
      </h3>

      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {product.description}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {product.owners.map((owner) => (
            <img
              key={owner.github}
              src={`${owner.avatar}?s=64`}
              alt={owner.name}
              width={24}
              height={24}
              className="rounded-full border-2 border-[var(--color-surface-raised)]"
            />
          ))}
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">
          {product.owners.map((o) => o.name).join(", ")}
        </span>
      </div>
    </Link>
  );
}
