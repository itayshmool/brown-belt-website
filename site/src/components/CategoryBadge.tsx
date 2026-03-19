import type { Category } from "@/data/products";

const colors: Record<Category, string> = {
  "CLI Tool": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Web App": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Desktop App": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "IDE Extension": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "AI Skill": "bg-pink-500/15 text-pink-400 border-pink-500/30",
};

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${colors[category]}`}
    >
      {category}
    </span>
  );
}
