import React from 'react';
import './About.scss';
import '../../assets/images/YassShanghai.webp'

export const About: React.FC = () => {
  return (
    <section className="about-container">
      <h1 className="about-title">À propos</h1>
      <img src='src/assets/images/YassShanghai.webp' alt='Photo de Yacine Nezreg'/>
      
      <p className="about-paragraph">
        Depuis mon plus jeune âge, l’informatique et les nouvelles technologies ont toujours été au cœur de mes intérêts. Dès mes premières années au collège, je me suis lancé dans l'exploration des systèmes d'exploitation, en expérimentant dans le BIOS de Windows, le terminal CMD, et divers logiciels de l’époque. Cette curiosité autodidacte m’a rapidement conduit aux bases du développement en C et C++, un défi à la hauteur de ma soif de connaissances, bien que limité par mon âge à l'époque. Mon rêve de rejoindre une entreprise innovante comme Square Enix pour contribuer au développement de jeux vidéo et à la création d’animations 3D n’a cessé de guider mes ambitions.
      </p>
      
      <p className="about-paragraph">
        Avec le temps, ma vie d’adulte m'a conduit à explorer d'autres horizons. J'ai travaillé pendant dix ans en restauration, ce qui m'a permis de voyager à travers le monde, de découvrir de nouvelles cultures et d'acquérir une grande ouverture d’esprit. Ces expériences m’ont inspiré à poursuivre ce qui me passionne vraiment : le développement web et la création d'expériences interactives. Aujourd'hui, ce ne sont plus seulement les jeux vidéo qui m’intéressent, mais aussi la conception de sites web, de logiciels, et de fonctionnalités captivantes pour les utilisateurs. Je suis fasciné par les possibilités infinies qu'offrent les technologies modernes pour enrichir les expériences en ligne, que ce soit par des animations élégantes, des interfaces intuitives, ou des designs immersifs.
      </p>
      
      <p className="about-paragraph">
        Cette année, j'ai franchi une nouvelle étape en intégrant la formation d'intégrateur web chez OpenClassrooms, où j’ai pu affiner mes compétences et aller bien au-delà des bases. La formation m'a permis de maîtriser le développement front-end, l’intégration de maquettes, les animations et bien d’autres compétences indispensables pour devenir un développeur web complet. Les projets que je présente ici reflètent ce parcours et démontrent mon engagement à réaliser des solutions web créatives et fonctionnelles.
      </p>
      
      <p className="about-paragraph highlight">
        Je vous remercie sincèrement de prendre le temps de parcourir mon portfolio. C’est un honneur de partager mon travail avec vous, et j'espère que nos chemins se croiseront pour collaborer sur des projets inspirants. Travailler avec des personnes passionnées et innovantes est un privilège, et je me réjouis de cette perspective.
      </p>
    </section>
  );
};
