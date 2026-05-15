import CategoryStrip from "../components/CategoryStrip.jsx";
import PageHero from "../components/PageHero.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { heroImages } from "../data/heroImages.js";
import { products } from "../data/products.js";
import { useMemo, useState } from "react";

const filters = [
  ["all", "All"],
  ["food", "Food"],
  ["toys", "Toys"],
  ["care", "Care"],
  ["grooming", "Grooming"],
];

function Shop({ onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageHero
        image={heroImages.shop}
        alt="Dog supplies arranged on a shop shelf"
        eyebrow="Shop by need"
        title="Corgi picks"
        copy="Food, toys, grooming essentials, and daily care products for Corgis who deserve a good routine."
      />
      <CategoryStrip />
      <section className="section">
        <div className="section-heading shop-heading">
          <div>
            <p className="eyebrow">Corgi favorites</p>
            <h2>Happy Corgis start here</h2>
          </div>
          <div className="filter-tabs" aria-label="Filter products">
            {filters.map(([id, label]) => (
              <button
                className={activeFilter === id ? "active" : ""}
                type="button"
                onClick={() => setActiveFilter(id)}
                key={id}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard product={product} onAddToCart={onAddToCart} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
