
import { useEffect, useState } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import "./Women.css";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const categories = [
          "womens-dresses",
          "womens-bags",
          "womens-shoes",
        ];

        const responses = await Promise.all(
          categories.map((category) =>
            fetch(
              `https://dummyjson.com/products/category/${category}?limit=0`,
              { signal: controller.signal }
            )
          )
        );

        if (responses.some((response) => !response.ok)) {
          throw new Error("Failed to fetch products.");
        }

        const results = await Promise.all(
          responses.map((response) => response.json())
        );

        setProducts(results.flatMap((result) => result.products));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Products could not be loaded. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p className="women__message">Loading products...</p>;
  }

  if (error) {
    return <p className="women__message">{error}</p>;
  }

  const dresses = products.filter(
    (product) => product.category === "womens-dresses"
  );

  const bags = products.filter(
    (product) => product.category === "womens-bags"
  );

  const shoes = products.filter(
    (product) => product.category === "womens-shoes"
  );

  return (
    <div className="women">
      <ProductGrid
        title="Women's Dresses"
        description="Explore our collection of women's dresses."
        products={dresses}
        className="women"
      />

      <ProductGrid
        title="Women's Bags"
        description="Complete your look with our collection of women's bags."
        products={bags}
        className="women"
      />

      <ProductGrid
        title="Women's Shoes"
        description="Discover stylish shoes for every occasion."
        products={shoes}
        className="women"
      />
    </div>
  );
};

export default Women;
