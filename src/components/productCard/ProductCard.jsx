import { useCart } from "../../context/CartContext";
import { ShoppingCart, Star, Minus, Plus } from "lucide-react";
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
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const discount = Math.min(
    100,
    Math.max(0, Number(discountPercentage) || 0)
  );

  const originalPrice = Number(price) || 0;

  const discountedPrice = Math.round(
    originalPrice * (1 - discount / 100)
  );

  const productId = id ?? name;

  const cartItem = cartItems.find(
    (item) => String(item.id) === String(productId)
  );

  const quantity = cartItem?.quantity ?? 0;

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
 
        {quantity === 0 ? (
          <button
            type="button"
            className="product-card__add-button"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} aria-hidden="true" />
            <span>Add to Cart</span>
          </button>
        ) : (
          <div className="product-card__quantity">
            <button
              type="button"
              onClick={() =>
                quantity === 1
                  ? removeFromCart(productId)
                  : updateQuantity(productId, quantity - 1)
              }
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>

            <span aria-live="polite">{quantity}</span>

            <button
              type="button"
              onClick={() => updateQuantity(productId, quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        )}

      </div>
    </article>
  );
};

export default ProductCard;
