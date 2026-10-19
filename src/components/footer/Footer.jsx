
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Section */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            E<span>STORE</span>
          </Link>

          <p className="footer__description">
            Discover timeless styles and everyday essentials.
            Bringing fashion, comfort, and quality together
            for every occasion.
          </p>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer__column">
          <h3>
            <FontAwesomeIcon icon={faChevronRight} />
            Explore
          </h3>

          <Link to="/products/men">Men's Collection</Link>
          <Link to="/products/women">Women's Collection</Link>
          <Link to="/products/kids">Kids' Collection</Link>
          <Link to="/products/men">New Arrivals</Link>
          <Link to="/products/women">Best Sellers</Link>
        </div>

        {/* Customer Care Section */}
        <div className="footer__column">
          <h3>
            <FontAwesomeIcon icon={faChevronRight} />
            Customer Care
          </h3>

          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Shipping & Returns</Link>
          <Link to="/contact">FAQs</Link>
          <Link to="/contact">Help & Support</Link>
        </div>

        {/* Contact Section */}
        <div className="footer__column footer__contact">
          <h3>
            <FontAwesomeIcon icon={faChevronRight} />
            Get in Touch
          </h3>

          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <p>Jaipur, Rajasthan, India</p>
          </div>

          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <a href="tel:+911234567890">
                +91 12345 67890
            </a>
          </div>

          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href="mailto:contact@estore.com">
                contact@estore.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__bottom">
        <p>© 2026 E STORE. All rights reserved.</p>
        <p> Made with <span className="heart">❤️</span> by Kaushal</p>
      </div>

      {/* Back to Top Button */}
      <button
        type="button"
        className="footer__back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
