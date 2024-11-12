import React, { useState, useRef } from 'react';
import './Collapse.scss';
import arrow from '../../assets/images/arrow.gif';

interface CollapseProps {
  projectName: string;
  summary: string;
  skills: string;
  imageSrc: string;
  link: string;
}

export const Collapse: React.FC<CollapseProps> = ({ projectName, summary, skills, imageSrc, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={handleClick}>
        <h1>{projectName}</h1>
        <img src={arrow} className={`arrow ${isRotated ? 'rotate-up' : ''}`} alt="Flèche animée de jeu vidéo pointant vers le bas" />
      </div>
      <div
        className="collapse-content-wrapper"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="collapse-content" ref={contentRef}>
          <p>{summary}</p>
          <p>Compétences : {skills}</p>
          <div className="collapse-content-link">
            <img src={imageSrc} alt={`${projectName} landing page`} />
            <a href={link} target="_blank" rel="noopener noreferrer">Visiter le projet</a>
          </div>
        </div>
      </div>
    </div>
  );
};
