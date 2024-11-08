import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.scss';


const images = [
  // Les images seront insérées ici sous forme d'objets { id, src, alt }
  { id: 1, src: '', alt: 'Image 1' },
  { id: 2, src: '', alt: 'Image 2' },
  { id: 3, src: '', alt: 'Image 3' },
];



export const Carousel: React.FC = () => {

    
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="carousel-container" id="carousel-cont">
      <div className="carousel-slide">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
            aria-hidden={index !== currentIndex}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      
      {/* Boutons de navigation */}
      <button className="carousel-nav left" onClick={handlePrev} aria-label="Previous slide">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="carousel-nav right" onClick={handleNext} aria-label="Next slide">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Indicateurs de pagination */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </main>
  );
};
