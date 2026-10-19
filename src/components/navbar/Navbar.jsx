
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        E<span>STORE</span>
      </div>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
        <Link to="/products/kids">Kids</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="navbar__actions">
        <Link to="/cart" className="navbar__cart" aria-label="Shopping cart">
          <ShoppingCart />
        </Link>

        <Link to="/login" className="navbar__login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
