import React from 'react';
import { Collapse } from '../../components/Collapse/Collapse';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';

export const ProjectsList: React.FC = () => {

  const projects = [
    {
      projectName: 'Riding Cities',
      summary: 'Participation à la conception d’une interface utilisateur en collaboration avec une équipe de designers via Figma. J’ai travaillé à la fois sur la compréhension et l\'application de la maquette, garantissant que chaque élément de l’interface respecte l’esthétique et la logique souhaitées par l’équipe de design. Cet exercice m’a permis de développer ma capacité à interpréter des directives de design précises et à travailler de manière fluide avec les designers pour un résultat optimal.',
      skills: 'Maîtrise de la collaboration interdisciplinaire, Excellente compréhension de la mise en œuvre de maquettes, Précision avec Figma',
      imageSrc: 'src/assets/images/RidingCities.png',
      link: 'https://riding-cities.com'
    },
    {
      projectName: 'Booki',
      summary: 'Réalisation d’un site web responsive en utilisant une approche mobile-first et Flexbox. Ce projet m’a appris à structurer un site pour qu\'il s’adapte de manière fluide à tous les appareils et résolutions, en gardant une lisibilité et une ergonomie constantes. L’accent mis sur la maquette a renforcé ma précision et mon souci du détail, éléments essentiels pour une expérience utilisateur de qualité.',
      skills: 'Responsive design, Expertise en Flexbox, Approche mobile-first pour expérience utilisateur optimisée',
      imageSrc: '/images/booki.png',
      link: 'https://booki.com'
    },
    {
      projectName: 'Ohmyfood',
      summary: 'Création d’une interface utilisateur mobile-first avec SASS, avec une gestion minutieuse des animations pour améliorer l\'expérience utilisateur. La mise en place d\'un code source organisé et documenté sous Git m\'a permis de développer une bonne compréhension de la gestion de version en équipe. Ce projet a affiné mes compétences dans les styles avancés et la conception dynamique d\'interfaces.',
      skills: 'SASS avancé, Animations dynamiques, Gestion professionnelle de version avec Git',
      imageSrc: '/images/ohmyfood.png',
      link: 'https://ohmyfood.com'
    },
    {
      projectName: 'Print it',
      summary: 'Première immersion dans la programmation JavaScript, où j’ai appris à structurer du code de manière logique et modulaire. J\'ai appliqué des concepts fondamentaux pour gérer des interactions simples et rendre l\'interface plus interactive. Ce projet a posé les bases de ma compréhension en JavaScript, me permettant de renforcer mes compétences en développement.',
      skills: 'Bases solides en JavaScript, Structuration de code modulaire, Premières interactions utilisateur dynamiques',
      imageSrc: '/images/print-it.png',
      link: 'https://print-it.com'
    },
    {
      projectName: 'Sophie Bluel Architecte d’intérieur',
      summary: 'Développement d’une interface interactive en manipulant le DOM et en intégrant des écouteurs d\'événements pour des réponses dynamiques aux actions des utilisateurs. J\'ai également intégré des appels API pour la récupération de données en temps réel, documentés via Swagger. Ce projet m’a permis de développer une expertise dans la manipulation directe du DOM et la gestion des flux de données.',
      skills: 'Maîtrise du DOM, Implémentation d\'événements dynamiques, Intégration d\'API REST avec Swagger',
      imageSrc: '/images/sophie-bluel.png',
      link: 'https://sophie-bluel.com'
    },
    {
      projectName: 'Kasa',
      summary: 'Création d’une application web de location immobilière utilisant Vite, React et TypeScript. Ce projet m\'a permis d\'acquérir une solide expérience en développement front-end moderne, incluant la gestion de routes avec React Router et l’utilisation de TypeScript pour renforcer la fiabilité du code. J’ai également intégré une approche modulaire pour une maintenance et une évolutivité optimales.',
      skills: 'Vite et React pour performance accrue, Fiabilité et sécurité avec TypeScript, Gestion des routes avec React Router',
      imageSrc: '/images/kasa.png',
      link: 'https://kasa.com'
    },
    {
      projectName: 'Nina Carducci Photographe',
      summary: 'Optimisation de la performance, de l\'accessibilité et du SEO pour un site de photographe, atteignant le score parfait dans Lighthouse (100/100/100). J\'ai mis en place des pratiques modernes d\'optimisation pour réduire les temps de chargement et maximiser l’expérience utilisateur, tout en assurant une accessibilité complète. Ce projet m’a permis de renforcer mes compétences en matière de performance et d\'accessibilité, essentielles pour des sites orientés utilisateur.',
      skills: 'Optimisation avancée SEO et performance, Amélioration de l\'accessibilité (a11y), Standards élevés avec Lighthouse',
      imageSrc: '/images/nina-carducci.png',
      link: 'https://nina-carducci.com'
    },
    {
      projectName: '724 Events',
      summary: 'Développement et test d\'un système complexe incluant des tests unitaires et fonctionnels pour garantir la fiabilité du code. J\'ai travaillé avec des outils de debugging avancés et documenté les procédures dans un cahier de recettes. L’utilisation de React Dev Tools m’a permis de maintenir une application performante et réactive, en répondant aux exigences strictes de qualité et de maintenance en production.',
      skills: 'Tests unitaires et fonctionnels, Expertise en debugging avancé, Contrôle qualité avec React Dev Tools',
      imageSrc: '/images/724-events.png',
      link: 'https://724-events.com'
    },
    {
      projectName: 'Argent Bank',
      summary: 'Application avancée avec Redux pour la gestion de l’état et intégration d’API REST via Axios en TypeScript. J\'ai structuré l’architecture de l\'application en fonction des meilleures pratiques de Redux, permettant une gestion efficace des données. Ce projet m’a formé à la manipulation de données en temps réel et m’a permis de renforcer mes compétences en TypeScript et en intégration d’API.',
      skills: 'Maîtrise avancée de Redux, Intégration d\'API REST sécurisée, Programmation TypeScript',
      imageSrc: '/images/argent-bank.png',
      link: 'https://argent-bank.com'
    },
    {
      projectName: 'Qwenta Project',
      summary: 'Responsable de la rédaction des spécifications techniques d’un projet web, j\'ai dû décomposer les besoins fonctionnels du client en tâches concrètes pour le développement. Après avoir analysé les besoins clients puis proposé des solutions techinques, j\’ai également assuré la veille technologique ainsi que la mise en place d\'outils de gestion de projet, tels qu\'un Kanban via Notion, des topics Feedly, dans le but de partager des analyses et documents avec l’équipe pour garantir l\'alignement du projet. Ce projet m\'a permis de développer des compétences en gestion de projet et en communication technique, essentielles dans un environnement collaboratif.',
      skills: 'Spécifications techniques détaillées, Méthodologie Kanban et Notion et Agile, Communication technique et veille stratégique',
      imageSrc: '/images/qwenta-project.png',
      link: 'https://qwenta-project.com'
    }
];



  return (
    
    <>
      <Navigation />
      <div className="projects-list">
      {projects.map((project, index) => (
        <Collapse
          key={index}
          projectName={project.projectName}
          summary={project.summary}
          skills={project.skills}
          imageSrc={project.imageSrc}
          link={project.link} />
      ))}
      </div>
      <Footer />
    </>
  );
};

