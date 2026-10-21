
import ProductCard from "../productCard/ProductCard";

const ProductGrid = ({
  title,
  description,
  products,
  className = "",
}) => {
  return (
    <section className={`${className}__section`}>
      <h2 className={`${className}__title`}>{title}</h2>

      <p className={`${className}__subtitle`}>
        {description}
      </p>

      <div className={`${className}__grid`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            image={product.thumbnail}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
