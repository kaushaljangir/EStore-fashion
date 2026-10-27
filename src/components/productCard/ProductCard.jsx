
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({
  id,
  name,
  image,
  price,
  discountPercentage = 0,
  rating,
  category,
}) => {
  const { addToCart } = useCart();

  const discount = Math.min(
    100,
    Math.max(0, Number(discountPercentage) || 0)
  );

  const originalPrice = Number(price) || 0;

  const discountedPrice = Math.round(
    originalPrice * (1 - discount / 100)
  );

  const handleAddToCart = () => {
    addToCart({
      id: id ?? name,
      name,
      image,
      price: discountedPrice,
      originalPrice,
      discountPercentage: discount,
      rating,
      category,
    });
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />

        {discount > 0 && (
          <span className="product-card__discount">
            {Math.round(discount)}% OFF
          </span>
        )}
      </div>

      <div className="product-card__content">
        {category && (
          <p className="product-card__category">{category}</p>
        )}

        <h3 className="product-card__name">{name}</h3>

        {Number.isFinite(Number(rating)) && rating != null && (
          <div
            className="product-card__rating"
            aria-label={`Rating ${Number(rating).toFixed(1)} out of 5`}
          >
            <Star
              size={15}
              className="product-card__star"
              fill="currentColor"
              aria-hidden="true"
            />
            <span>{Number(rating).toFixed(1)}</span>
            <span className="product-card__rating-total">/ 5</span>
          </div>
        )}

        <div className="product-card__pricing">
          <span className="product-card__price">
            ₹{discountedPrice.toLocaleString("en-IN")}
          </span>

          {discount > 0 && (
            <span className="product-card__original-price">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button
          type="button"
          className="product-card__add-button"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} aria-hidden="true" />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
