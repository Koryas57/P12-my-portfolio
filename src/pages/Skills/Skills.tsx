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
                            <p>Maîtrise avancée de <strong>HTML5</strong> et <strong>CSS3</strong>, renforcée par <strong>Sass</strong> pour des styles modulaires, réutilisables et bien structurés. Utilisation de la convention <strong>BEM</strong> pour maintenir un code CSS clair et facile à déboguer, facilitant la collaboration en équipe. Dans le projet Ohmyfood, j'ai appliqué <strong>Sass</strong> avec un design mobile-first et structuré en <strong>BEM</strong> pour une maintenance et une évolutivité idéales.</p>
                        </div>
                    </div>

                    {/* Sass */}
                    <div className="skill-item">
                        <img src={getIconUrl('SASS')} alt="SASS" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Sass (Syntactically Awesome Style Sheets)</h2>
                            <p><strong>Sass</strong> est un préprocesseur CSS que j’utilise pour structurer des styles propres, modulaires et maintenables. Grâce à des fonctionnalités avancées comme les <strong>variables</strong>, les <strong>mixins</strong>, et le <strong>nesting</strong>, je suis capable de créer des feuilles de style complexes tout en gardant un code lisible et optimisé. Par exemple, dans le projet Ohmyfood, j’ai organisé le CSS en composants <strong>Sass</strong> séparés pour chaque partie de l’application, ce qui a permis une meilleure gestion des styles, une maintenance simplifiée et une évolutivité assurée pour des projets de grande envergure.</p>
                        </div>
                    </div>

                    {/* JavaScript (ES6+) */}
                    <div className="skill-item">
                        <img src={getIconUrl('JavaScript')} alt="JavaScript" className="skill-icon" />
                        <div className="skill-content">
                            <h2>JavaScript (ES6+)</h2>
                            <p>Expérience en <strong>JavaScript</strong> moderne (<strong>ES6+</strong>), incluant la manipulation du <strong>DOM</strong>, <strong>async/await</strong>, et l'intégration d'<strong>API REST</strong>. Par exemple, dans le projet Sophie Bluel, j'ai mis en place des appels d'<strong>API REST</strong> pour une récupération de données dynamique, utilisant <code>fetch</code> pour rendre l'application réactive et fluide. Je possède également une expérience avec <code>map</code>, <code>filter</code>, et <code>reduce</code> pour des manipulations efficaces de données.</p>
                        </div>
                    </div>

                    {/* React */}
                    <div className="skill-item skill-item-multi">
                        <img src={getIconUrl('React')} alt="React" className="skill-icon" />
                        <img src={getIconUrl('Redux')} alt="Redux" className="skill-icon" />
                        <div className="skill-content">
                            <h2>React & Redux</h2>
                            <p>Expérience avancée en <strong>React</strong>, avec une gestion d'état efficace via <strong>Redux</strong> pour centraliser et organiser les données de manière optimale. Dans le projet Kasa, j'ai créé des composants modulaires, réutilisables et maintenables, en intégrant <strong>React Router</strong> pour des routes dynamiques. L'optimisation des performances a été assurée grâce aux hooks <code>useEffect</code> et <code>useMemo</code>, garantissant une expérience utilisateur fluide et réactive.</p>
                        </div>
                    </div>

                    {/* TypeScript */}
                    <div className="skill-item">
                        <img src={getIconUrl('TypeScript')} alt="TypeScript" className="skill-icon" />
                        <div className="skill-content">
                            <h2>TypeScript</h2>
                            <p><strong>TypeScript</strong> pour assurer une haute fiabilité du code et minimiser les erreurs. Dans Argent Bank, cela m'a aidé à renforcer l'intégrité des données lors des appels <strong>API</strong> et de la gestion d'état avec <strong>Redux</strong>. Je suis à l’aise avec les <strong>types</strong> et <strong>interfaces</strong>, garantissant des applications robustes et évolutives.</p>
                        </div>
                    </div>

                    {/* Project Management & Agile */}
                    <div className="skill-item">
                        <img src={getIconUrl('Notion')} alt="Notion" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Gestion de Projet & Méthodologie Agile</h2>
                            <p>Expérience en gestion de projet et en <strong>méthodologie Agile</strong> acquise dans le projet Qwenta, avec l’utilisation de <strong>Kanban</strong> et <strong>Notion</strong> pour structurer le travail et faciliter la communication en équipe. J’ai assuré une <strong>veille technologique</strong> constante et appliqué les principes <strong>Agile</strong> pour garantir un suivi des tâches et une adaptation rapide aux exigences du projet.</p>
                        </div>
                    </div>

                    {/* Three.js & 3D Graphics */}
                    <div className="skill-item skill-item-multi">
                        <img src={getIconUrl('Three.js')} alt="Three.js" className="skill-icon" />
                        <img src={getIconUrl('Unreal Engine')} alt="Unreal Engine" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Three.js & Graphismes 3D</h2>
                            <p>Bonne expérience de <strong>Three.js</strong> pour la création de scènes interactives en <strong>3D</strong>, avec un contrôle total des <strong>lumières</strong>, <strong>caméras</strong>, et de la gestion des objets. Dans mon portfolio, j'ai intégré des modèles <strong>GLTF</strong>, contrôlé l'animation, et créé un rendu optimisé, en ajoutant des éléments modélisés avec <strong>Unreal Engine</strong> pour un rendu unique.</p>
                        </div>
                    </div>

                    {/* Debugging & Testing */}
                    <div className="skill-item">
                        <img src={getIconUrl('Jest')} alt="Jest" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Debugging & Tests Unitaires/Fonctionnels</h2>
                            <p>Bonne expérience en <strong>debugging</strong> et en <strong>tests unitaires</strong> et <strong>fonctionnels</strong> pour assurer la fiabilité du code. Dans le projet 724 Events, j'ai utilisé des techniques avancées de diagnostic pour identifier et résoudre des bugs critiques, garantissant un code robuste et bien testé. J'ai pour objectif d'approfondir ces compétences en apprenant <strong>React Testing Library</strong> et <strong>Jest</strong> prochainement.</p>
                        </div>
                    </div>

                    {/* SEO & Performance */}
                    <div className="skill-item">
                        <img src={getIconUrl('Lighthouse')} alt="Lighthouse" className="skill-icon" />
                        <div className="skill-content">
                            <h2>SEO & Performance Web</h2>
                            <p>Connaissance approfondie des pratiques <strong>SEO</strong> et de l'optimisation des performances. Dans le projet <strong>Nina Carducci</strong>, j'ai amélioré les scores <strong>Lighthouse</strong> dans les catégories 'Performance, Accessibilité (A11y), SEO et Bonnes Pratiques', en optimisant le <strong>LCP</strong>, les <strong>balises meta</strong>, le rendu des images en <strong>WebP</strong>, et le chargement asynchrone pour des performances maximales. Soucieux de rendre le web plus accessible, je suis impatient d'approfondir mes compétences en <strong>accessibilité</strong> pour offrir des expériences encore plus inclusives.</p>
                        </div>
                    </div>

                    {/* Design et Production Visuelle */}
                    <div className="skill-item skill-item-multi">
                        <img src={getIconUrl('Canva')} alt="Canva" className="skill-icon" />
                        <img src={getIconUrl('Photoshop')} alt="Photoshop" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Design & Création de Contenu</h2>
                            <p>Maîtrise de <strong>Canva</strong> et <strong>Photoshop</strong> pour la création de visuels modernes et professionnels, ainsi que de contenu optimisé pour les réseaux sociaux. Capacité à créer des montages visuels impactants, en adéquation avec les stratégies de <strong>marketing digital</strong>.</p>
                        </div>
                    </div>

                    {/* Montage Vidéo (DaVinci Resolve) */}
                    <div className="skill-item">
                        <img src={getIconUrl('DaVinci Resolve')} alt="DaVinci Resolve" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Montage Vidéo (DaVinci Resolve)</h2>
                            <p>Maîtrise de <strong>DaVinci Resolve</strong> pour le montage professionnel, avec utilisation avancée des <strong>nodes</strong> et de l'<strong>étalonnage couleur</strong>. Capacité à exporter en formats <strong>4K</strong> et <strong>H.265</strong> pour une qualité optimale, utile pour tout projet vidéo exigeant.</p>
                        </div>
                    </div>

                    {/* C / C++ */}
                    <div className="skill-item">
                        <img src={getIconUrl('C++')} alt="C++" className="skill-icon" />
                        <div className="skill-content">
                            <h2>Programmation en C/C++</h2>
                            <p>Connaissance des bases de <strong>C/C++</strong> acquises avec <strong>Code::Blocks</strong> et le Site du Zéro, incluant les <strong>fonctions</strong>, <strong>boucles</strong>, et <strong>conditions</strong>. Expérience initiale en programmation de bas niveau qui m’aide à appréhender la logique de code avec une rigueur structurelle.</p>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </main>

    );
};