
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <a
      href="https://kaushaljangir.github.io/EStore-fashion/"
      className="navbar__logo"
    >
      E<span>STORE</span>
    </a>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
        <Link to="/products/kids">Kids</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="navbar__actions">
        <Link 
          to="/cart" 
          className="navbar__cart" 
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <ShoppingCart />

          {cartCount > 0 && (
            <span className="navbar__cart-count">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </Link>

        <Link to="/login" className="navbar__login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
