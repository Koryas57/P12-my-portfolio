import React, { useState, useEffect } from 'react';
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
import './Carousel3D.scss';

const images = [
  { id: 1, src: Image1, alt: 'Riding Cities', link: 'https://koryas57.github.io/P2-RidingCities/' },
  { id: 2, src: Image2, alt: 'Booki', link: 'https://koryas57.github.io/P3_Booki/' },
  { id: 3, src: Image3, alt: 'Ohmyfood', link: 'https://koryas57.github.io/P4_Ohmyfood/' },
  { id: 4, src: Image4, alt: 'Print-It', link: 'https://koryas57.github.io/P5_Print-it/' },
  { id: 5, src: Image5, alt: 'Sophie Bluel', link: 'https://p6-sophie-bluel-9clq3hygl-yass-projects-886bacad.vercel.app/' },
  { id: 6, src: Image6, alt: 'Kasa', link: 'https://koryas57.github.io/P7_Kasa/' },
  { id: 7, src: Image7, alt: 'Nina Carducci', link: 'https://nina-carducci-topaz.vercel.app/' },
  { id: 8, src: Image8, alt: '724 Events', link: 'https://p9-724events.vercel.app/' },
  { id: 9, src: Image9, alt: 'Argent Bank', link: '#' },
  { id: 10, src: Image10, alt: 'Qwenta Project', link: 'https://noiseless-year-64d.notion.site/63ce1afcaf56431aaf58e19d162263ae?v=e69df8cbb5fe4a07903b93af91596a26' },
];

export const Carousel3D: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const totalImages = images.length;
  const stepAngle = 360 / totalImages;

  // Configure l'URL pour le reflet dynamiquement
  useEffect(() => {
    const items = document.querySelectorAll('.carousel3d-item a');

    items.forEach((item) => {
      const anchor = item as HTMLAnchorElement; // Cast explicite
      const img = anchor.querySelector('img') as HTMLImageElement;
      if (img) {
        const url = img.src; // Récupère l'URL de l'image
        anchor.style.setProperty('--image-url', `url(${url})`);
      }
    });
  }, []);

  // Gestion de la rotation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + stepAngle); // Rotation automatique
    }, 3500);

    return () => clearInterval(interval);
  }, [stepAngle]);

  return (
    <div className="carousel3d-container">
      <div className="carousel3d" style={{ transform: `rotateY(${-angle}deg)` }}>
        {images.map((image, index) => {
          const theta = stepAngle * index;
          const isActive = index === Math.round(angle / stepAngle) % totalImages;

          return (
            <div
              key={image.id}
              className={`carousel3d-item ${isActive ? 'active' : ''}`}
              style={{
                transform: `rotateY(${theta}deg) translateZ(30rem)`,
              }}
            >
              <div className="card-content">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img src={image.src} alt={image.alt} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
