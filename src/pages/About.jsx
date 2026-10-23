import { ArrowRight } from "lucide-react";
import "./About.css";
import founderImg from "../assets/Founder-img.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="about-label">ABOUT E STORE</span>

          <h1>
            Fashion for your <span>everyday.</span>
          </h1>

          <p>
            A modern fashion destination built around personal style,
            easy product discovery and a simple shopping experience.
          </p>

          <a href="#about-company" className="about-hero__link">
            GET TO KNOW US
            <ArrowRight size={16} />
          </a>
        </div>

        <span className="about-hero__number">OUR STORY / 01</span>
      </section>

      {/* Who We Are */}
      <section className="about-company" id="about-company">
        <div className="about-company__heading">
          <span className="about-label">01 / WHO WE ARE</span>

          <h2>
            More than
            <br />
            just <span>fashion.</span>
          </h2>
        </div>

        <div className="about-company__content">
          <p>
            E STORE is a fashion e-commerce business idea created to
            bring clothing, footwear and accessories together in one
            convenient online destination.
          </p>

          <p>
            We are building E STORE for people who enjoy exploring new
            looks and expressing their personal style. Our goal is to
            make product discovery simple through a clean, organised
            and user-friendly shopping experience.
          </p>

          <p>
            From everyday clothing to footwear and accessories, the idea
            is to help customers explore different fashion categories
            without unnecessary complexity. We want browsing products
            to feel convenient, whether customers are using a desktop
            or a mobile device.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="about-difference">
        <div className="about-difference__inner">
          <span className="about-label">02 / WHY E STORE</span>

          <h2>
            A better way to
            <br />
            <span>explore fashion.</span>
          </h2>

          <p>
            We believe an online store should be more than a collection
            of products. It should help people find what they are looking
            for through clear design, easy navigation and a consistent
            shopping experience.
          </p>

          <p>
            E STORE focuses on bringing different fashion categories
            together in one place, making it easier to explore available
            styles and discover products. We also aim to create a smooth
            browsing experience with a design that works well across
            different screen sizes.
          </p>

          <p>
            As the business develops, our aim is to keep improving the
            shopping experience and introduce useful features based on
            customer needs.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="about-founder">
        <div className="about-founder__image">
          <img
            src={founderImg}
            alt="Founder of E STORE"
            loading="lazy"
          />
        </div>

        <div className="about-founder__content">
          <span className="about-label">03 / THE FOUNDER</span>

          <h2>
            Every great idea
            <br />
            starts <span>somewhere.</span>
          </h2>

          <p>
            E STORE begins with a vision to create a modern fashion
            destination where discovering products feels simple and
            enjoyable.
          </p>

          <p>
            The idea is to bring product discovery, thoughtful design
            and convenience together in one place. The founder aims to
            develop this idea step by step and build a shopping
            experience that can continue to grow over time.
          </p>

          <div className="about-founder__details">
            <span className="about-founder__line" />
            <div>
              <h3>Aarav Malhotra</h3>
              <p>Founder, E STORE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="about-commitment">
        <div className="about-commitment__inner">
          <span className="about-label">04 / OUR COMMITMENT</span>

          <h2>
            Good style.
            <br />
            <span>Simple shopping.</span>
          </h2>

          <p>
            Our goal is to make discovering fashion feel natural,
            convenient and enjoyable. We are working towards building
            an online destination where design and ease of use come
            together.
          </p>

          <Link to="/" className="about-home-link">
            BACK TO HOME
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
