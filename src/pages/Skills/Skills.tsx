import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';
import '../../assets/style/main.scss'
import './Skills.scss';


interface Technology {
    name: string;
    url: string;
  }
  
  const technologies: Technology[] = [
    { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'SASS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
    { name: 'Three.js', url: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg' },
    { name: 'Notion', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' },
    { name: 'Jest', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'Lighthouse', url: 'https://raw.githubusercontent.com/googlechrome/lighthouse/master/assets/lighthouse-logo.svg' },
    { name: 'Photoshop', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Canva', url: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
    { name: 'DaVinci Resolve', url: 'https://img.icons8.com/color/452/davinci-resolve.png' },
    { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },

];
  
  // Fonction utilitaire pour obtenir l'URL de l'icône
  const getIconUrl = (name: string) => {
    const tech = technologies.find((tech) => tech.name === name);
    return tech ? tech.url : '';
  };

export const Skills: React.FC = () => {


  return (
    <main className='main-layout'>
        <Navigation />
        <section className="skills-container">
        <h1 className="skills-title"> Compétences Techniques </h1>
        
        <div className="skills-grid">
            {/* HTML & CSS */}
            <div className="skill-item">
                <img src={getIconUrl('HTML5')} alt="HTML5" className="skill-icon" />
                <div className="skill-content">
                    <h2>HTML & CSS avec Sass et Convention BEM</h2>
                    <p>Maîtrise avancée de HTML5 et CSS3, renforcée par Sass pour des styles modulaires, réutilisables et bien structurés. Utilisation de la convention BEM pour maintenir un code CSS clair et facile à déboguer, facilitant la collaboration en équipe. Dans le projet *Ohmyfood*, j'ai appliqué Sass avec un design mobile-first et structuré en BEM pour une maintenance et une évolutivité idéales.</p>
                </div>
            </div>

            {/* Sass */}
            <div className="skill-item">
                <img src={getIconUrl('SASS')} alt="SASS" className="skill-icon" />
                <div className="skill-content">
                    <h2>Sass (Syntactically Awesome Style Sheets)</h2>
                    <p>Sass est un préprocesseur CSS que j’utilise pour structurer des styles propres, modulaires et maintenables. Grâce à des fonctionnalités avancées comme les variables, les mixins, et le nesting, je suis capable de créer des feuilles de style complexes tout en gardant un code lisible et optimisé. Par exemple, dans *Ohmyfood*, j’ai organisé le CSS en composants Sass séparés pour chaque partie de l’application, ce qui a permis une meilleure gestion des styles, une maintenance simplifiée et une évolutivité assurée pour des projets de grande envergure.</p>
                </div>
            </div>


            {/* JavaScript (ES6+) */}
            <div className="skill-item">
                <img src={getIconUrl('JavaScript')} alt="JavaScript" className="skill-icon" />    
                <div className="skill-content">
                    <h2>JavaScript (ES6+)</h2>
                    <p>Expérience en JavaScript moderne (ES6+), incluant la manipulation du DOM, async/await, et l'intégration d'API REST. Par exemple, dans *Sophie Bluel*, j'ai mis en place des appels d'API REST pour une récupération de données dynamique, utilisant `fetch` pour rendre l'application réactive et fluide. Je maîtrise également `map`, `filter`, et `reduce` pour des manipulations efficaces de données.</p>
                </div>
            </div>

            {/* React */}
            <div className="skill-item skill-item-multi">
                <img src={getIconUrl('React')} alt="React" className="skill-icon" />    
                <img src={getIconUrl('Redux')} alt="Redux" className="skill-icon" />    
                <div className="skill-content">
                    <h2>React & Redux</h2>
                    <p>Expérience avancée en React, avec une gestion d'état efficace via Redux. Dans *Kasa*, j'ai créé des composants modulaires, réutilisables et maintenables, et utilisé Redux pour centraliser les données. J’ai également utilisé React Router pour des routes dynamiques et optimisé les performances via les hooks `useEffect` et `useMemo`.</p>
                </div>
            </div>

            {/* TypeScript */}
            <div className="skill-item">
                <img src={getIconUrl('TypeScript')} alt="TypeScript" className="skill-icon" />    
                <div className="skill-content">
                    <h2>TypeScript</h2>
                    <p>TypeScript pour assurer une haute fiabilité du code et minimiser les erreurs. Dans *Argent Bank*, TypeScript a renforcé l'intégrité des données lors des appels API et de la gestion d'état avec Redux. Je suis à l’aise avec les types et interfaces, garantissant des applications robustes et évolutives.</p>
                </div>
            </div>

            {/* Project Management & Agile */}
            <div className="skill-item">
                <img src={getIconUrl('Notion')} alt="Notion" className="skill-icon" />    
                <div className="skill-content">
                    <h2>Gestion de Projet & Méthodologie Agile</h2>
                    <p>Expérience en gestion de projet et en méthodologie Agile acquise dans le projet *Qwenta*, avec l’utilisation de Kanban et Notion pour structurer le travail et faciliter la communication en équipe. J’ai assuré une veille technologique constante et appliqué les principes Agile pour garantir un suivi des tâches et une adaptation rapide aux exigences du projet.</p>
                </div>
            </div>

            {/* Three.js & 3D Graphics */}
            <div className="skill-item skill-item-multi">
                <img src={getIconUrl('Three.js')} alt="Three.js" className="skill-icon" />    
                <img src={getIconUrl('Unreal Engine')} alt="Unreal Engine" className="skill-icon" />    
                <div className="skill-content">
                    <h2>Three.js & Graphismes 3D</h2>
                    <p>Maîtrise de Three.js pour la création de scènes interactives en 3D, avec un contrôle total des lumières, caméras, et de la gestion des objets. Dans mon portfolio, j'ai intégré des modèles GLTF, contrôlé l'animation, et créé un rendu optimisé, en ajoutant des éléments modélisés avec Unreal Engine pour un rendu unique.</p>
                </div>
            </div>

            {/* Debugging & Testing */}
            <div className="skill-item">
                <img src={getIconUrl('Jest')} alt="Jest" className="skill-icon" />    
                <div className="skill-content">
                    <h2>Debugging & Tests Unitaires/Fonctionnels</h2>
                    <p>Solide expérience en debugging et en tests unitaires/fonctionnels pour garantir la fiabilité du code. J’ai utilisé React Testing Library et Jest dans des projets, ainsi que des outils de debugging avancés, pour diagnostiquer et résoudre efficacement des bugs critiques.</p>
                </div>
            </div>

            {/* SEO & Performance */}
            <div className="skill-item">
                <img src={getIconUrl('Lighthouse')} alt="Lighthouse" className="skill-icon" />    
                <div className="skill-content">
                    <h2>SEO & Performance Web</h2>
                    <p>Connaissance approfondie des pratiques SEO et de l'optimisation des performances. Dans *Nina Carducci*, j'ai amélioré les scores Lighthouse pour SEO, accessibilité, et rapidité, avec un rendu d’images WebP et une optimisation du chargement pour des performances maximales.</p>
                </div>
            </div>

            {/* Design et Production Visuelle */}
            <div className="skill-item skill-item-multi">
                <img src={getIconUrl('Canva')} alt="Canva" className="skill-icon" />    
                <img src={getIconUrl('Photoshop')} alt="Photoshop" className="skill-icon" />    
                <div className="skill-content">
                    <h2>Design & Création de Contenu</h2>
                    <p>Maîtrise de Canva et Photoshop pour la création de visuels modernes et professionnels, ainsi que de contenu optimisé pour les réseaux sociaux. Capacité à créer des montages visuels impactants, en adéquation avec les stratégies de marketing digital.</p>
                </div>
            </div>

            {/* Montage Vidéo (DaVinci Resolve) */}
            <div className="skill-item">
                <img src={getIconUrl('DaVinci Resolve')} alt="DaVinci Resolve" className="skill-icon" />    
                <div className="skill-content">
                    <h2>Montage Vidéo (DaVinci Resolve)</h2>
                    <p>Maîtrise de DaVinci Resolve pour le montage professionnel, avec utilisation avancée des nodes et de l'étalonnage couleur. Capacité à exporter en formats 4K et H.265 pour une qualité optimale, utile pour tout projet vidéo exigeant.</p>
                </div>
            </div>

            {/* C / C++ */}
            <div className="skill-item">
                <img src={getIconUrl('C++')} alt="C++" className="skill-icon" />    
                <div className="skill-content">
                    <h2>Programmation en C/C++</h2>
                    <p>Connaissance des bases de C/C++ acquises avec Code::Blocks et le Site du Zéro, incluant les fonctions, boucles, et conditions. Expérience initiale en programmation de bas niveau qui m’aide à appréhender la logique de code avec une rigueur structurelle.</p>
                </div>
            </div>
        </div>
        </section>
        <Footer />
    </main>
    
  );
};