import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Slideshow.css';

import mix07 from '../assets/Home/MIX-07.png';
import mix08 from '../assets/Home/MIX-08 Updated.png';
import mix09 from '../assets/Home/MIX-09 (2).png';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: {
        path: mix07,
        fallback: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80',
      },
      alt: 'Outdoor Marketing Strategy',
      showText: false, // Changed to false - no text/button on slide 1
    },
    {
      id: 2,
      image: {
        path: mix08,
        fallback: 'https://images.unsplash.com/photo-1565373679100-7ad5c16b0f12?auto=format&fit=crop&w=1920&q=80',
      },
      alt: 'Brand Visibility Solutions',
      showText: false,
    },
    {
      id: 3,
      image: {
        path: mix09,
        fallback: 'https://images.unsplash.com/photo-1622773539907-83a59a6b79f0?auto=format&fit=crop&w=1920&q=80',
      },
      alt: 'High Quality Market Experiences',
      showText: true, // Only slide 3 shows text and button
      subtitle: "Transforming Outdoor Spaces into Brand Experiences",
      title: "PREMIUM OUTDOOR ADVERTISING SOLUTIONS",
      buttonText: "About us",
      buttonLink: "/about"
    },
  ];

  const handleImageLoad = (id) => setImageLoaded((prev) => ({ ...prev, [id]: true }));
  const handleImageError = (id) => setImageErrors((prev) => ({ ...prev, [id]: true }));

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={imageErrors[slide.id] ? slide.image.fallback : slide.image.path}
              alt={slide.alt}
              onLoad={() => handleImageLoad(slide.id)}
              onError={() => handleImageError(slide.id)}
              className="slide-image"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />

            {/* Text content only for slide 3 when it's active */}
            {index === currentSlide && slide.showText && (
              <div className="custom-slide-content">
                <p className="custom-subtitle">
                  {slide.subtitle}
                </p>
                <h1 className="custom-title">
                  {slide.title}
                </h1>
                <button className="custom-button" onClick={() => navigate(slide.buttonLink)}>{slide.buttonText}</button>
              </div>
            )}

            {!imageLoaded[slide.id] && !imageErrors[slide.id] && (
              <div className="image-loading">
                <div className="loading-spinner"></div>
                <p>Loading image...</p>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="slide-nav prev" onClick={goToPrev} aria-label="Previous slide">
          ‹
        </button>
        <button className="slide-nav next" onClick={goToNext} aria-label="Next slide">
          ›
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;