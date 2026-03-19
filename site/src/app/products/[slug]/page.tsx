import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { CategoryBadge } from "@/components/CategoryBadge";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Not Found" };
    return {
      title: `${product.name} | Brown Belt`,
      description: product.description,
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-[var(--color-border)] px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-3 text-sm text-[var(--color-text-muted)]">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            Brown Belt
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">
            {product.name}
          </span>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-[var(--color-border)] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <CategoryBadge category={product.category} />
            <span className="text-sm text-[var(--color-text-muted)]">
              {product.platform}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mb-6 text-lg text-[var(--color-text-secondary)]">
            {product.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {product.owners.join(", ")}
            </div>
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/20"
              >
                Open App
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {product.repoPublic && (
              <a
                href={`https://github.com/${product.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-12">
          {/* What It Is */}
          <Section title="What It Is">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {product.whatItIs}
            </p>
          </Section>

          {/* The Problem */}
          <Section title="The Problem">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {product.problem}
            </p>
          </Section>

          {/* Key Features */}
          <Section title="Key Features">
            <div className="grid gap-3 sm:grid-cols-2">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-xs text-[var(--color-accent)]">
                    &#10003;
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Tech Stack */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* How to Use */}
          <Section title="How to Use">
            <pre className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 text-sm leading-relaxed text-[var(--color-accent)]">
              <code>{product.howToUse}</code>
            </pre>
          </Section>
        </div>

        {/* Back */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
