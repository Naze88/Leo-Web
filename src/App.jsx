import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import ChatBot from "./components/ChatBot.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { products } from "./data/products.js";

const pages = ["home", "shop", "profile", "about", "contact"];

function normalizePage(hash) {
  const page = hash.replace("#", "") || "home";
  return pages.includes(page) ? page : "home";
}

function App() {
  const [page, setPage] = useState(() => normalizePage(window.location.hash));
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("leoCartItems") || "[]"));
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const onHashChange = () => {
      setPage(normalizePage(window.location.hash));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("leoCartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const increaseItem = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  const decreaseItem = (productId) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  };

  const pageView = useMemo(() => {
    switch (page) {
      case "shop":
        return <Shop onAddToCart={addToCart} />;
      case "profile":
        return <Profile />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }, [page]);

  return (
    <>
      <Header activePage={page} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>{pageView}</main>
      <CartDrawer
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increaseItem}
        onDecrease={decreaseItem}
        onRemove={removeItem}
      />
      <ChatBot cartItems={cartItems} />
      <Footer />
    </>
  );
}

export default App;
