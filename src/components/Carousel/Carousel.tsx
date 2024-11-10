import React, { useState, useRef, useEffect } from 'react';
import './carousel.scss';
import Image1 from '../../../public/assets/images/image1.png';
import Image2 from '../../../public/assets/images/image2.png';
import Image3 from '../../../public/assets/images/image3.png';
import Image4 from '../../../public/assets/images/image4.png';
import Image5 from '../../../public/assets/images/image5.png';
import Image6 from '../../../public/assets/images/image6.png';
// import Image7 from '../../../public/assets/images/image7.png';
// import Image8 from '../../../public/assets/images/image8.jpg';
// import Image9 from '../../../public/assets/images/image9.jpg';
// import Image10 from '../../../public/assets/images/image10.jpg';

// Tableau d'images en utilisant les imports
const images = [
  { id: 1, src: Image1, alt: 'Image 1' },
  { id: 2, src: Image2, alt: 'Image 2' },
  { id: 3, src: Image3, alt: 'Image 3' },
  { id: 4, src: Image4, alt: 'Image 4' },
  { id: 5, src: Image5, alt: 'Image 5' },
  { id: 6, src: Image6, alt: 'Image 6' },
  { id: 7, src: Image1, alt: 'Image 7' },
  { id: 8, src: Image2, alt: 'Image 8' },
  { id: 9, src: Image3, alt: 'Image 9' },
  { id: 10, src: Image4, alt: 'Image 10' },
];

export const Carousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Utilisation de useEffect pour contrôler l'animation du défilement
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = isPaused ? 'paused' : 'running';
    }
  }, [isPaused]);

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel" ref={carouselRef}>
        {/* Multiplication du tableau pour créer un effet de boucle infinie */}
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="carousel-item"
            onMouseEnter={(e) => e.currentTarget.classList.add('lighten')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('lighten')}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
