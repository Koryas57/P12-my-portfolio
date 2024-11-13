import React, { useState, useRef, useEffect } from 'react';
import Image1 from '../../assets/images/image1.webp';
import Image2 from '../../assets/images/image2.webp';
import Image3 from '../../assets/images/image3.webp';
import Image4 from '../../assets/images/image4.webp';
import Image5 from '../../assets/images/image5.webp';
import Image6 from '../../assets/images/image6.webp';
import Image7 from '../../assets/images/image7.webp';
import Image8 from '../../assets/images/image8.webp';
import Image9 from '../../assets/images/image9.webp';
import Image10 from '../../assets/images/image10.webp';
import './Carousel.scss';

// Tableau d'images en utilisant les imports
const images = [
  { id: 1, src: Image1, alt: 'Riding Cities', link: 'https://koryas57.github.io/P2-RidingCities/' },
  { id: 2, src: Image2, alt: 'Booki', link: 'https://koryas57.github.io/P3_Booki/' },
  { id: 3, src: Image3, alt: 'Ohmyfood', link: 'https://koryas57.github.io/P4_Ohmyfood/' },
  { id: 4, src: Image4, alt: 'Print-It', link: 'https://koryas57.github.io/P5_Print-it/' },
  { id: 5, src: Image5, alt: 'Sophie Bluel Architecte d\'interieur', link: 'https://p6-sophie-bluel-9clq3hygl-yass-projects-886bacad.vercel.app/' },
  { id: 6, src: Image6, alt: 'Kasa', link: 'https://koryas57.github.io/P7_Kasa/' },
  { id: 7, src: Image7, alt: 'Nina Carducci Photographe', link: 'https://nina-carducci-topaz.vercel.app/' },
  { id: 8, src: Image8, alt: '724 Events', link: 'https://p9-724events.vercel.app/' },
  { id: 9, src: Image9, alt: 'Argent Bank' },
  { id: 10, src: Image10, alt: 'Qwenta Project', link: 'https://noiseless-year-64d.notion.site/63ce1afcaf56431aaf58e19d162263ae?v=e69df8cbb5fe4a07903b93af91596a26' },
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
            {image.link ? (
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} />
              </a>
            ) : (
              <img src={image.src} alt={image.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
