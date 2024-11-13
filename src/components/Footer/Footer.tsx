// Footer.tsx
import React from 'react';
import { JaguarModel } from '../../threejs/scenes/JaguarModel';

import './Footer.scss';

type Technology = {
  name: string;
  url: string;
};

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
  { name: 'Lighthouse', url: 'https://raw.githubusercontent.com/googlechrome/lighthouse/master/assets/lighthouse-logo.svg' },
  { name: 'Photoshop', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
  { name: 'Canva', url: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
  { name: 'DaVinci Resolve', url: 'https://img.icons8.com/color/452/davinci-resolve.png' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="logoContainer">
        {technologies.map((tech) => (
          <img
            key={tech.name}
            src={tech.url}
            alt={tech.name}
            title={tech.name}
            className="logo"
          />
        ))}
        <JaguarModel />
      </div>
      <div className="socialLinks">
        <a href="https://github.com/Koryas57" target="_blank" rel="noopener noreferrer" className="link">
          🔗 GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="link">
          💼 LinkedIn
        </a>
      </div>
    </footer>
  );
};
