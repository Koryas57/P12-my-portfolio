import React, { useState, useEffect, useRef } from "react";
import Image1 from "../../assets/images/image1.webp";
import Image2 from "../../assets/images/image2.webp";
import Image3 from "../../assets/images/image3.webp";
import Image4 from "../../assets/images/image4.webp";
import Image5 from "../../assets/images/image5.webp";
import Image6 from "../../assets/images/image6.webp";
import Image7 from "../../assets/images/image7.webp";
import Image8 from "../../assets/images/image8.webp";
import Image9 from "../../assets/images/image9.webp";
import Image10 from "../../assets/images/image10.webp";
import Image11 from "../../assets/images/image11.webp";
import "./Carousel3D.scss";

const images = [
  {
    id: 1,
    src: Image1,
    alt: "Riding Cities",
    link: "https://koryas57.github.io/P2-RidingCities/",
  },
  {
    id: 2,
    src: Image2,
    alt: "Booki",
    link: "https://koryas57.github.io/P3_Booki/",
  },
  {
    id: 3,
    src: Image3,
    alt: "Ohmyfood",
    link: "https://koryas57.github.io/P4_Ohmyfood/",
  },
  {
    id: 4,
    src: Image4,
    alt: "Print-It",
    link: "https://koryas57.github.io/P5_Print-it/",
  },
  {
    id: 5,
    src: Image5,
    alt: "Sophie Bluel",
    link: "https://p6-sophie-bluel-9clq3hygl-yass-projects-886bacad.vercel.app/",
  },
  {
    id: 6,
    src: Image6,
    alt: "Kasa",
    link: "https://koryas57.github.io/P7_Kasa/",
  },
  {
    id: 7,
    src: Image7,
    alt: "Nina Carducci",
    link: "https://nina-carducci-topaz.vercel.app/",
  },
  {
    id: 8,
    src: Image8,
    alt: "724 Events",
    link: "https://p9-724events.vercel.app/",
  },
  { id: 9, src: Image9, alt: "Argent Bank", link: "#" },
  {
    id: 10,
    src: Image10,
    alt: "Qwenta Project",
    link: "https://noiseless-year-64d.notion.site/63ce1afcaf56431aaf58e19d162263ae?v=e69df8cbb5fe4a07903b93af91596a26",
  },
  {
    id: 11,
    src: Image11,
    alt: "Yasmina Cobelli",
    link: "https://shiatsu-yasminacobelli.com",
  },
];

export const Carousel3D: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [translateZ, setTranslateZ] = useState("30rem"); // Gérer la responsivité
  const startX = useRef<number | null>(null); // Gestion du swipe
  const totalImages = images.length;
  const stepAngle = 360 / totalImages;

  // Configure l'URL pour le reflet dynamiquement
  useEffect(() => {
    const items = document.querySelectorAll(".carousel3d-item a");
    items.forEach((item) => {
      const anchor = item as HTMLAnchorElement;
      const img = anchor.querySelector("img") as HTMLImageElement;
      if (img) {
        const url = img.src;
        anchor.style.setProperty("--image-url", `url(${url})`);
      }
    });
  }, []);

  // Gestion dynamique de la distance Z
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 335) {
        setTranslateZ("8rem");
      } else if (screenWidth <= 390) {
        setTranslateZ("9rem");
      } else if (screenWidth <= 500) {
        setTranslateZ("10rem");
      } else if (screenWidth <= 525) {
        setTranslateZ("11rem");
      } else if (screenWidth <= 620) {
        setTranslateZ("13rem");
      } else if (screenWidth <= 690) {
        setTranslateZ("15rem");
      } else if (screenWidth <= 790) {
        setTranslateZ("16rem");
      } else if (screenWidth <= 830) {
        setTranslateZ("18rem");
      } else if (screenWidth <= 920) {
        setTranslateZ("20rem");
      } else if (screenWidth <= 970) {
        setTranslateZ("21rem");
      } else if (screenWidth <= 1080) {
        setTranslateZ("22rem");
      } else if (screenWidth <= 1180) {
        setTranslateZ("26rem");
      } else {
        setTranslateZ("28rem");
      }
    };

    handleResize(); // Initialisation
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gestion de la rotation automatique
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleRotation("right");
    }, 3900);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Gestion du swipe pour mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX.current;

    if (deltaX > 50) handleRotation("left");
    if (deltaX < -50) handleRotation("right");

    startX.current = null;
  };

  // Gestion des rotations
  const handleRotation = (direction: "left" | "right") => {
    setIsPaused(true);

    setAngle((prev) =>
      direction === "left" ? prev - stepAngle : prev + stepAngle
    );
    setCurrentIndex((prev) =>
      direction === "left"
        ? (prev - 1 + totalImages) % totalImages
        : (prev + 1) % totalImages
    );

    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <div
      className="carousel3d-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Flèches de navigation */}
      <button
        className="carousel-control left"
        onClick={() => handleRotation("left")}
      >
        ‹
      </button>
      <div
        className="carousel3d"
        style={{ transform: `rotateY(${-angle}deg)` }}
      >
        {images.map((image, index) => {
          const theta = stepAngle * index;
          const isActive = index === currentIndex;

          return (
            <div
              key={image.id}
              className={`carousel3d-item ${isActive ? "active" : ""}`}
              style={{
                transform: `rotateY(${theta}deg) translateZ(${translateZ})`,
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
      <button
        className="carousel-control right"
        onClick={() => handleRotation("right")}
      >
        ›
      </button>
      {/* Barre de pagination */}
      <div className="pagination-bar">
        {images.map((_, index) => (
          <div
            key={index}
            className={`pagination-segment ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => {
              setAngle(index * stepAngle);
              setCurrentIndex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
