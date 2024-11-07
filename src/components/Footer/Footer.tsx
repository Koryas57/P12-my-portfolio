// Footer.tsx
import React from 'react';
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
      </div>
      <p className="text">Technologies maîtrisées</p>
      <div className="socialLinks">
        <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
