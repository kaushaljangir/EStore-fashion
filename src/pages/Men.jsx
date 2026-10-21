
import { useEffect, useState } from "react";
import "./Men.css";
import ProductGrid from "../components/productGrid/ProductGrid";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    
const fetchProducts = async () => {
  try {
    setLoading(true);
    setError("");

    const categories = ["mens-shirts", "mens-shoes"];

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

    const allProducts = results.flatMap(
      (result) => result.products
    );

    setProducts(allProducts);
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
    return <p className="men__message">Loading products...</p>;
  }

  if (error) {
    return <p className="men__message">{error}</p>;
  }

  const shirts = products.filter(
    (product) => product.category === "mens-shirts"
  );

  const shoes = products.filter(
    (product) => product.category === "mens-shoes"
  );

  return (
    <div className="men">
      <ProductGrid
      title="Men's Clothing"
      description="Explore our collection of men's shirts."
      products={shirts}
      className="men"
      />

      <ProductGrid
      title="Men's Shoes"
      description="Step up your style with our men's shoe collection."
      products={shoes}
      className="men"
      />
    </div>
);
};

export default Men;
