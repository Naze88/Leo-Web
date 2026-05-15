import { useState } from "react";
import { Plus } from "lucide-react";

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const addProduct = () => {
    onAddToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 260);
  };

  return (
    <article className="product-card" id={product.id}>
      <img src={product.image} alt={product.alt} />
      <div className="product-info">
        <span className="tag">{product.tag}</span>
        <span className="product-badge">{product.badge}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong>${product.price}</strong>
          <button
            className={`icon-button add-to-cart${added ? " added" : ""}`}
            type="button"
            aria-label={`Add ${product.title} to cart`}
            onClick={addProduct}
          >
            <Plus />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
