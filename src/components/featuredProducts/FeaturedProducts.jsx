
import { Link } from "react-router-dom";
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
        {products.map((product) => (
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

              <button
                type="button"
                className="featured-products__cart"
                onClick={() =>
                  alert(`${product.name} — cart functionality coming soon!`)
                }
              >
                Add to Cart <span aria-hidden="true">+</span>
              </button> 
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
