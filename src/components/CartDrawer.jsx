import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

function CartDrawer({ cartItems, isOpen, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <button
        className={`cart-scrim${isOpen ? " open" : ""}`}
        type="button"
        aria-label="Close cart"
        onClick={onClose}
      ></button>
      <aside className={`cart-drawer${isOpen ? " open" : ""}`} aria-label="Shopping cart">
        <div className="cart-drawer-header">
          <div>
            <p className="eyebrow">Your basket</p>
            <h2>Corgi cart</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close cart" onClick={onClose}>
            <X />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag />
            <h3>Your cart is waiting.</h3>
            <p>Add food, toys, or care kits from the shop page.</p>
            <a className="button primary" href="#shop" onClick={onClose}>
              Shop Corgi Picks
            </a>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.alt} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>${item.price} each</p>
                    <div className="quantity-row">
                      <button type="button" aria-label={`Remove one ${item.title}`} onClick={() => onDecrease(item.id)}>
                        <Minus />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" aria-label={`Add one ${item.title}`} onClick={() => onIncrease(item.id)}>
                        <Plus />
                      </button>
                    </div>
                  </div>
                  <button className="remove-button" type="button" aria-label={`Remove ${item.title}`} onClick={() => onRemove(item.id)}>
                    <Trash2 />
                  </button>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>${subtotal}</strong>
              </div>
              <p>Free local pickup today. Delivery estimate appears after checkout.</p>
              <button className="button primary" type="button">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
