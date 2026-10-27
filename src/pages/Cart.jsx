
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <main className="cart-page">
      <div className="cart-container">
        <div className="cart-heading">
          <div>
            <h1>Shopping Cart</h1>
            <p className="cart-subtitle">
              Review your items before checkout.
            </p>
          </div>

          <span className="cart-item-count">
            {cartCount} {cartCount === 1 ? "item" : "items"}
          </span>
        </div>

        {cartItems.length === 0 ? (
          <section className="cart-empty">
            <div className="cart-empty__icon">
              <ShoppingBag size={36} strokeWidth={1.5} />
            </div>

            <h2>Your cart is empty</h2>
            <p>
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link to="/" className="cart-continue-button">
              <ShoppingCart size={18} />
              Continue Shopping
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              <div className="cart-items__header">
                <h2>Your Items</h2>
                <span>{cartCount} total</span>
              </div>

              {cartItems.map((item) => (
                <article
                  className="cart-item"
                  key={item.id}
                >
                  <div className="cart-item__image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item__image"
                    />
                  </div>

                  <div className="cart-item__details">
                    {item.category && (
                      <p className="cart-item__category">
                        {item.category}
                      </p>
                    )}

                    <h3>{item.name}</h3>

                    <p className="cart-item__price">
                      ₹{Number(item.price).toLocaleString("en-IN")}
                    </p>

                    <div className="cart-item__actions">
                      <div
                        className="cart-quantity"
                        aria-label={`Quantity for ${item.name}`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={15} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-item__remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={15} />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-item__subtotal">
                    ₹
                    {(
                      Number(item.price) * item.quantity
                    ).toLocaleString("en-IN")}
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="cart-summary__row">
                <span>Items ({cartCount})</span>
                <span>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="cart-summary__row">
                <span>Shipping</span>
                <span className="cart-free-shipping">FREE</span>
              </div>

              <div className="cart-summary__divider" />

              <div className="cart-summary__total">
                <span>Total</span>
                <span>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="cart-summary__note">
                Shipping and taxes are calculated at checkout.
              </p>

              <button
                type="button"
                className="cart-checkout-button"
                onClick={() =>
                toast.success("Checkout will be available soon!")
                }
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              <Link to="/" className="cart-continue-link">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
