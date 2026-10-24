
import { useEffect, useState } from "react";
import "./Kids.css";
import ProductGrid from "../components/productGrid/ProductGrid";
import kidsData from "../data/kidsProducts.json";

const Kids = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      setError("");

      setProducts(kidsData.products);
    } catch {
      setError("Products could not be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="kids__message">Loading products...</p>;
  }

  if (error) {
    return <p className="kids__message">{error}</p>;
  }

  return (
    <div className="kids">
      <ProductGrid
        title="Kids' Clothing"
        description="Explore comfortable and stylish clothing for little ones."
        products={products}
        className="kids"
      />
    </div>
  );
};

export default Kids;
