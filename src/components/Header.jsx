import { ShoppingBag } from "lucide-react";

const links = [
  ["home", "Home"],
  ["shop", "Shop"],
  ["profile", "Profile"],
  ["about", "About"],
  ["contact", "Contact"],
];

function Header({ activePage, cartCount, onOpenCart }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Leo Corgi House home">
        <span className="brand-mark">L</span>
        <span>Leo Corgi House</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(([id, label]) => (
          <a className={activePage === id ? "active" : ""} href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <button className="icon-button cart-button" type="button" aria-label="Open cart" onClick={onOpenCart}>
        <ShoppingBag />
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}

export default Header;
