import React from "react";
import "./AboutCard.scss";
import ProfilePic from "../../assets/images/YassShanghai.webp";

import { GiPagoda } from "react-icons/gi";

import { FaPlane, FaGamepad, FaMobileAlt } from "react-icons/fa";

export const AboutCard: React.FC = () => (
  <div className="about-card">
    <img src={ProfilePic} alt="Yacine Nezreg" />

    <div className="content">
      <h2>À propos</h2>

      <p className="intro">
        Développeur Front-End & créateur d’apps et jeux vidéo.
        <br />
        Passionné par la culture chinoise 🏯 et le vol FPV 🚁,
        <br />
        j’allie curiosité, motivation et rigueur pour réaliser des expériences
        digitales uniques.
      </p>

      <div className="tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>UI/UX</span>
        <span>Apps</span>
        <span>Jeux Vidéo</span>
        <span>Culture Chinoise</span>
        <span>FPV Drone</span>
      </div>

      <a href="/cv.pdf" className="btn" target="_blank" rel="noopener">
        Télécharger CV
      </a>

      <div className="hobbies">
        <GiPagoda title="Culture chinoise" />
        <FaPlane title="FPV Drone" />
        <FaMobileAlt title="Applications" />
        <FaGamepad title="Jeux vidéo" />
      </div>
    </div>
  </div>
);
