import { useState, useEffect, useCallback } from "react";
import "./Styles/hero.css";

const Hero = () => {
  const [customers, setCustomers] = useState(0);
  const [years, setYears] = useState(0);
  const [showK, setShowK] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const animateValue = useCallback((start, end, duration, setCount) => {
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const fraction = Math.min(elapsedTime / duration, 1);
      const newValue = Math.ceil(start + fraction * (end - start));
      
      setCount(newValue);

      if (fraction < 1) {
        requestAnimationFrame(animation);
      } else {
        if (end === 40000) {
          setFadeOut(true);
          setTimeout(() => {
            setShowK(true);
            setFadeOut(false);
            setFadeIn(true);
            setTimeout(() => {
              setShowLine(true);
            }, 500);
          }, 500);
        }
      }
    }

    requestAnimationFrame(animation);
  }, []);

  useEffect(() => {
    animateValue(0, 40000, 2000, setCustomers);
    animateValue(0, 15, 2000, setYears);
  }, [animateValue]);

  return (
    <>
      <div className="hero">
        <div className="overlap-group-2">
          <img className="frame-4" alt="Frame" src="com/img/frame-50.svg" />
          <div className="hero-content">
            <div className="frame-5">
              <div className="div-wrapper">
                <p className="text-wrapper-5">Delivering Top-Tier VoIP and Billing Support Services</p>
              </div>
              <div className="frame-6">
                <p className="text-wrapper-6">
                  Our expert team provides detailed provisioning processes and advanced troubleshooting to ensure
                  smooth SIP operations.
                </p>
                <div className="frame-7">
                  <div className="frame-8">
                    <div className={`text-wrapper-7 ${fadeOut ? 'fade-out' : ''} ${fadeIn ? 'fade-in' : ''}`}>
                      {showK ? "40K" : customers}
                    </div>
                    <div className="text-wrapper-7">{years}+</div>
                    <div className={`barLine ${showLine ? 'show' : ''}`}></div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-8">Our Customers</div>
                    <div className="text-wrapper-8">Years of Expertise</div>
                  </div>
                </div>
              </div>
              </div>
            <img className="mask-group" alt="Mask group" src="com/img/mask-group.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
