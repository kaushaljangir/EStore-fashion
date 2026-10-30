
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Minus, Plus } from "lucide-react";
import "./FeaturedProducts.css";
import product1 from "../../assets/featured-product-1.jpg";
import product2 from "../../assets/featured-product-2.jpg";
import product3 from "../../assets/featured-product-3.jpg";
import product4 from "../../assets/featured-product-4.jpg";

const products = [
  {
    id: 1,
    name: "Classic Everyday Shirt",
    category: "Men's Wear",
    price: 1299,
    originalPrice: 1799,
    discount: "28% OFF",
    image: product1,
    link: "/products/men",
  },
  {
    id: 2,
    name: "Elegant Casual Outfit",
    category: "Women's Wear",
    price: 1599,
    originalPrice: 2199,
    discount: "27% OFF",
    image: product2,
    link: "/products/women",
  },
  {
    id: 3,
    name: "Minimal Streetwear",
    category: "Men's Wear",
    price: 999,
    originalPrice: 1399,
    discount: "29% OFF",
    image: product3,
    link: "/products/men",
  },
  {
    id: 4,
    name: "Crafted for Your Grace",
    category: "Women's Wear",
    price: 1899,
    originalPrice: 2499,
    discount: "24% OFF",
    image: product4,
    link: "/products/women",
  },
];

const FeaturedProducts = () => {

  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id ?? product.name,
      name: product.name,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice,
      discountPercentage: Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) * 100
      ),
      category: product.category,
    });
  };

  return (
    <section className="featured-products">
      <div className="featured-products__header">
        <div>
          <span className="featured-products__eyebrow">
            OUR SELECTION
          </span>

          <h2>Featured Products</h2>

          <p>
            Everyday favourites, carefully selected for you.
          </p>
        </div>

        <Link
          to="/products/men"
          className="featured-products__view-all"
        >
          View All <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="featured-products__grid">
        {products.map((product) => {
          const cartItem = cartItems.find(
            (item) => String(item.id) === String(product.id ?? product.name)
          );

          const quantity = cartItem?.quantity ?? 0;

          return(
            <article
              className="featured-products__card"
              key={product.id}
            >
              <Link
                to=''
                className="featured-products__image"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="featured-products__badge">
                  {product.discount}
                </span>
              </Link>

              <div className="featured-products__details">
                <span className="featured-products__category">
                  {product.category}
                </span>

                <Link
                  to={product.link}
                  className="featured-products__name"
                >
                  {product.name}
                </Link>

                <div className="featured-products__price">
                  <span>
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <del>
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </del>
                </div>

                {quantity === 0 ? (
                  <button
                    type="button"
                    className="featured-products__cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart <span aria-hidden="true">+</span>
                  </button>
                ) : (
                  <div className="featured-products__quantity">
                    <button
                      type="button"
                      onClick={() =>
                        quantity === 1
                          ? removeFromCart(product.id ?? product.name)
                          : updateQuantity(product.id ?? product.name, quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>

                    <span aria-live="polite">{quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(product.id ?? product.name, quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                )} 
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
