import { Bone, HeartPulse, Scissors, Sparkles } from "lucide-react";

const categories = [
  [Bone, "Corgi Food"],
  [Sparkles, "Corgi Toys"],
  [HeartPulse, "Corgi Care"],
  [Scissors, "Grooming"],
];

function CategoryStrip() {
  return (
    <section className="category-strip" aria-label="Corgi categories">
      {categories.map(([Icon, label]) => (
        <a href="#shop" key={label}>
          <Icon />
          {label}
        </a>
      ))}
    </section>
  );
}

export default CategoryStrip;
