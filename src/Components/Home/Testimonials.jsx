import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Styles/testimonials.css";
import { testimonialsData } from '../../Contents/TestimonialsDetails';

const Testimonials = () => {
  const [isPulsingPrev, setPulsingPrev] = useState(false);
  const [isPulsingNext, setPulsingNext] = useState(false);

  const handlePulsePrev = (onClickHandler) => {
    setPulsingPrev(true);
    onClickHandler();
    setTimeout(() => setPulsingPrev(false), 500); // duration of the animation
  };

  const handlePulseNext = (onClickHandler) => {
    setPulsingNext(true);
    onClickHandler();
    setTimeout(() => setPulsingNext(false), 500); // duration of the animation
  };

  return (
      <div className="testmonials">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div className={`buttons-2-container ${isPulsingPrev ? 'pulsing' : ''}`}>
                <div className="button-2" onClick={() => handlePulsePrev(onClickHandler)} title={label} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="27.5" stroke="white" />
                  </svg>
                  <svg className="huge-icon-2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M10.4244 8.85254L6.27625 13.0007M6.27625 13.0007L10.4244 17.1488M6.27625 13.0007L18.7207 13.0007" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div className={`buttons-3-container ${isPulsingNext ? 'pulsing' : ''}`}>
                <div className="button-3" onClick={() => handlePulseNext(onClickHandler)} title={label}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="27.5" stroke="white" />
                  </svg>
                  <svg className="huge-icon-3" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M10.4244 8.85254L6.27625 13.0007M6.27625 13.0007L10.4244 17.1488M6.27625 13.0007L18.7207 13.0007" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            )
          }
        >
          {testimonialsData.map((testimonial, index) => (
            <div className="frame-19" key={index}>
              <div className="unsplash-ivm-wrapper z-4">
                <img className="unsplash-ivm z-4" alt={`Unsplash ${testimonial.name}`} src={testimonial.image} />
              </div>
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-20">{testimonial.name}</div>
                    <div className="text-wrapper-21">{testimonial.title}</div>
                  </div>
                  <p className="text-wrapper-22">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
  );
};

export default Testimonials;
