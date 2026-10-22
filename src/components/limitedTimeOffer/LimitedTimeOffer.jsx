
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./LimitedTimeOffer.css";

const INITIAL_SECONDS = 2 * 24 * 60 * 60;

const getTimeLeft = (seconds) => ({
  days: Math.floor(seconds / 86400),
  hours: Math.floor((seconds % 86400) / 3600),
  minutes: Math.floor((seconds % 3600) / 60),
  seconds: seconds % 60,
});

const LimitedTimeOffer = () => {
  const [remaining, setRemaining] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemaining((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const timeLeft = getTimeLeft(remaining);

  const timerUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="limited-offer">
      <div className="limited-offer__content">
        <div className="limited-offer__badge">
          <Sparkles size={15} />
          <span>Limited Time Offer</span>
          <span className="limited-offer__dot" />
        </div>

        <h2>
          Style Sale — <span>Up to 30% OFF</span>
        </h2>

        <p className="limited-offer__description">
          Refresh your wardrobe before the offer ends.
        </p>

        <div className="limited-offer__timer" aria-label="Time remaining">
          {timerUnits.map((unit) => (
            <div className="limited-offer__time-box" key={unit.label}>
              <strong>{String(unit.value).padStart(2, "0")}</strong>
              <span>{unit.label}</span>
            </div>
          ))}
        </div>

        <Link
          to="/products/men"
          className="limited-offer__button"
        >
          Shop the Sale <ArrowRight size={18} />
        </Link>
      </div>

      <div className="limited-offer__visual" aria-hidden="true">
        <div className="limited-offer__circle limited-offer__circle--one" />
        <div className="limited-offer__circle limited-offer__circle--two" />

        <div className="limited-offer__discount">
          <span>UP TO OFF</span>
          <strong>30%</strong>
          <span>OFF</span>
        </div>

        <div className="limited-offer__fashion">
          <span className="limited-offer__fashion-star">✦</span>
          <span className="limited-offer__fasion-text">
            <img 
                className="limited-offer__fashion-img"
                src="https://png.pngtree.com/png-clipart/20241117/original/pngtree-3d-trendy-distressed-denim-jacket-for-men-on-transparent-background-png-image_17161732.png"/>
          </span>
          <span className="limited-offer__fashion-star">✧</span>
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
