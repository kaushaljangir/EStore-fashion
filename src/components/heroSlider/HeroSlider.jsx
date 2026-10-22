
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import freshVideo from "../../assets/fresh-arrivals.mp4";
import winterSale from "../../assets/winter-sale.jpg";
import trendingItems from "../../assets/trending-items.avif";

import "./HeroSlider.css";

const slides = [
  {
    eyebrow: "JUST ARRIVED",
    title: "Meet Your",
    accent: "Next Favourite.",
    description:
      "Discover the latest arrivals, thoughtfully selected for your next everyday look.",
    video: freshVideo,
    type: "video",
    link: "/products/men",
    button: "Shop New Arrivals",
  },
  {
    eyebrow: "WINTER SALE",
    title: "Winter Sales",
    accent: "Up to 60% off",
    description:
      "Valid on selected items.\nNot combinable with other offers.",
    image: winterSale,
    type: "offer",
    link: "/products/men",
    button: "Shop now",
    badge: "SPECIAL OFFERS",
  },
  {
    eyebrow: "TRENDING NOW",
    title: "Discover What's",
    accent: "In Style.",
    description:
      "Explore trending fashion pieces that bring a fresh touch to your everyday wardrobe.",
    image: trendingItems,
    type: "image",
    link: "/products/women",
    button: "Explore Trends",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const distanceX = touchStartX.current - endX;
    const distanceY = touchStartY.current - endY;

    if (
      Math.abs(distanceX) < 50 ||
      Math.abs(distanceX) < Math.abs(distanceY)
    ) {
      return;
    }

    if (distanceX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const slide = slides[currentSlide];

  return (
    <section
      className={`home-hero ${
        slide.type === "video" ? "home-hero--video" : ""
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slide.type === "offer" ? (
        <div className="home-hero__offer">
          <div className="home-hero__offer-content">
            <span className="home-hero__eyebrow">
              {slide.eyebrow}
            </span>

            <h1>
              {slide.title}
              <br />
              <span>{slide.accent}</span>
            </h1>

            <p>{slide.description}</p>

            <Link
              to={slide.link}
              className="home-hero__offer-link"
            >
              {slide.button}
            </Link>
          </div>

          <div
            className="home-hero__offer-image"
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        </div>
      ) : (
        <>
          {slide.type === "video" ? (
            <video
              key={slide.video}
              className="home-hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <div
              key={slide.image}
              className="home-hero__background"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            />
          )}

          <div className="home-hero__overlay" />

          <div
            className="home-hero__content"
            key={`content-${currentSlide}`}
          >
            <span className="home-hero__eyebrow">
              {slide.eyebrow}
            </span>

            <h1>
              {slide.title}
              <br />
              <span>{slide.accent}</span>
            </h1>

            <p>{slide.description}</p>

            <Link to={slide.link} className="home-hero__button">
              {slide.button} <span aria-hidden="true">→</span>
            </Link>

            <div className="home-hero__note">
              {slide.badge || "STYLE THAT SPEAKS FOR YOU"}
            </div>
          </div>
        </>
      )}

      <button
        type="button"
        className="home-hero__arrow home-hero__arrow--left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#8592;
      </button>

      <button
        type="button"
        className="home-hero__arrow home-hero__arrow--right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#8594;
      </button>

      <div className="home-hero__dots">
        {slides.map((item, index) => (
          <button
            key={item.eyebrow}
            type="button"
            className={`home-hero__dot ${
              currentSlide === index
                ? "home-hero__dot--active"
                : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to ${item.eyebrow}`}
            aria-current={
              currentSlide === index ? "true" : undefined
            }
          />
        ))}
      </div>

      <div className="home-hero__counter">
        {currentSlide + 1} <span>/ {slides.length}</span>
      </div>
    </section>
  );
};

export default HeroSlider;
