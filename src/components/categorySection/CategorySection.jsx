
import { Link } from "react-router-dom";
import menCategory from "../../assets/men-category.jpg"
import womenCategory from "../../assets/women-category.webp"
import kidsCategory from "../../assets/kids-category.avif"
import "./CategorySection.css";

const categories = [
  {
    name: "Men",
    description: "Everyday essentials & modern fits",
    image: menCategory,
    link: "/products/men",
  },
  {
    name: "Women",
    description: "Discover your personal style",
    image: womenCategory,
    link: "/products/women",
  },
  {
    name: "Kids",
    description: "Comfort meets playful style",
    image: kidsCategory,
    link: "/products/kids",
  },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="category-section__header">
        <span className="category-section__eyebrow">
          FIND YOUR STYLE
        </span>

        <h2>Shop by Category</h2>

        <p>
          Explore collections made for every style and every occasion.
        </p>
      </div>

      <div className="category-section__grid">
        {categories.map((category) => (
          <Link
            to={category.link}
            className="category-section__card"
            key={category.name}
          >
            <img
              src={category.image}
              alt={`${category.name} fashion collection`}
              loading="lazy"
            />

            <div className="category-section__overlay">
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>

              <span className="category-section__arrow">
                &#8599;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
