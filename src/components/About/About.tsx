import React from 'react';
import './About.scss';
import ProfilePic from '../../assets/images/YassShanghai.webp'

export const About: React.FC = () => {
  return (
    <section className="about-container">
      <h1 className="about-title">À propos</h1>
      <img src={ProfilePic} alt="Photo de Yacine Nezreg" />

      <p className="about-paragraph">
        Passionné depuis toujours par les technologies et l'informatique. Très jeune, je me suis intéressé au fonctionnement des systèmes d'exploitations et explorais les bases de la programmation en C et C++ grâce aux cours sur le Site du Zero. Mon parcours m’a amené à travailler dans divers secteurs, notamment celui de la restauration, où j’ai découvert l'importance de la diversité culturelle et de la créativité. Aujourd'hui, je m’investis pleinement dans le développement web, motivé par la création d'expériences numériques interactives et captivantes.
      </p>

      <p className="about-paragraph">
        Cette année, j'ai poursuivi une formation de développeur web chez OpenClassrooms, acquérant une solide maîtrise des technologies front-end, de l’intégration de maquettes aux animations avancées. Les projets que je présente témoignent de mon engagement envers l'innovation et la qualité.
      </p>

      <p className="about-paragraph highlight">
        Merci de parcourir mon portfolio. C'est un plaisir de partager mon parcours avec vous, et j’espère que nos chemins se croiseront pour collaborer sur des projets ambitieux avec des personnes passionnées et visionnaires.
      </p>
    </section>
  );
};
