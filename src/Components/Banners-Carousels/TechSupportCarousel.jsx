import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Styles/techCarousel.css';
import { slides } from '../../Contents/techCarouselDetails';

const TechSupportCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1);
  };

  const goToNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="our-services">
      <div className='controls'>
        <div className="custom-indicators">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              whileTap={{ scale: 1.5 }}
              initial={{ scale: 1 }}
              animate={currentSlide === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
            </motion.button>
          ))}
        </div>
        <div className='button1'>
          <div onClick={goToPrev} className="buttonNext">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="27.5" stroke="#282828" strokeWidth="1" />
            </svg>
            <svg className="huge-icon-2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M10.4244 8.85254L6.27625 13.0007M6.27625 13.0007L10.4244 17.1488M6.27625 13.0007L18.7207 13.0007" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div onClick={goToNext} className="buttonPrev">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="#282828">
              <circle cx="28" cy="28" r="27.5" stroke="#282828" />
            </svg>
            <svg className="huge-icon-2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M10.4244 8.85254L6.27625 13.0007M6.27625 13.0007L10.4244 17.1488M6.27625 13.0007L18.7207 13.0007" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <Carousel
        selectedItem={currentSlide}
        onChange={index => setCurrentSlide(index)}
        showArrows={false}
        emulateTouch={true}
        showStatus={false}
        showIndicators={false} // Turn off default indicators
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
      >
        {slides.map(slide => (
          <div key={slide.id} className="slide-container">
            <div className="frame-12">
              <div>{slide.frame13}</div>
              <div>{slide.content}</div>
              <div>{slide.details}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TechSupportCarousel;
