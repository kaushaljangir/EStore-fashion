import HeroSlider from "../components/heroSlider/HeroSlider";
import CategorySection from "../components/categorySection/CategorySection";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
import LimitedTimeOffer from "../components/limitedTimeOffer/LimitedTimeOffer";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <CategorySection />
      <LimitedTimeOffer />
      <FeaturedProducts />
    </>
  );
};

export default Home;
