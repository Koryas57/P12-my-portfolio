import React from 'react';
import { Collapse } from '../../components/Collapse/Collapse';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';

export const ProjectsList: React.FC = () => {

  const projects = [
    {
      projectName: 'Riding Cities',
      summary: 'Apprentissage de l’utilisation d’une maquette et collaboration avec l’équipe design via Figma.',
      skills: 'Maquette, Figma, Collaboration',
      imageSrc: 'src/assets/images/RidingCities.png',
      link: 'https://riding-cities.com'
    },
    {
      projectName: 'Booki',
      summary: 'Maquette + flexbox, responsivité et mobile first.',
      skills: 'Maquette, Flexbox, Responsivité, Mobile First',
      imageSrc: '/images/booki.png',
      link: 'https://booki.com'
    },
    {
      projectName: 'Ohmyfood',
      summary: 'Utilisation de SASS, approche mobile first, maquette, Git et GitHub.',
      skills: 'SASS, Mobile First, Maquette, Git, GitHub',
      imageSrc: '/images/ohmyfood.png',
      link: 'https://ohmyfood.com'
    },
    {
      projectName: 'Print it',
      summary: 'Premiers pas en JavaScript.',
      skills: 'JavaScript',
      imageSrc: '/images/print-it.png',
      link: 'https://print-it.com'
    },
    {
      projectName: 'Sophie Bluel Architecte d’intérieur',
      summary: 'Manipulation du DOM, event listeners, fetch API, Swagger.',
      skills: 'DOM, Event Listeners, Fetch API, Swagger',
      imageSrc: '/images/sophie-bluel.png',
      link: 'https://sophie-bluel.com'
    },
    {
      projectName: 'Kasa',
      summary: 'Web app de location immobilière avec Vite, React, React Router et TypeScript.',
      skills: 'Vite, React, React Router, TypeScript',
      imageSrc: '/images/kasa.png',
      link: 'https://kasa.com'
    },
    {
      projectName: 'Nina Carducci Photographe',
      summary: 'Performance, Lighthouse, accessibilité (a11y) et SEO.',
      skills: 'Performance, Lighthouse, Accessibilité (a11y), SEO',
      imageSrc: '/images/nina-carducci.png',
      link: 'https://nina-carducci.com'
    },
    {
      projectName: '724 Events',
      summary: 'Tests unitaires et fonctionnels, debugging, cahier de recettes, React dev tools.',
      skills: 'Yarn, Tests, Debugging, Recettes, React Dev Tools',
      imageSrc: '/images/724-events.png',
      link: 'https://724-events.com'
    },
    {
      projectName: 'Argent Bank',
      summary: 'Redux, appels API avec Axios en React, TypeScript, gestion de données avec Redux.',
      skills: 'Redux, Axios, TypeScript, Gestion des Données',
      imageSrc: '/images/argent-bank.png',
      link: 'https://argent-bank.com'
    },
    {
      projectName: 'Qwenta Project',
      summary: 'Rédaction des spécifications techniques, découpage des fonctionnalités, veille technologique et gestion de projet.',
      skills: 'Spécifications Techniques, Veille Technologique, Kanban, Notion, Gestion de Projet',
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

