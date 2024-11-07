// components/Logo.tsx
import React from 'react';
import './Logo.scss'

export const Logo: React.FC = () => {
  return (
    <svg width="500px" height="100px" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby="logoTitle">
      <title id="logoTitle">Logo DEV With Yass</title>
      
      {/* Lettres individuelles avec la classe d'animation */}
      <text x="10" y="50" className="letter">D</text>
      <text x="40" y="50" className="letter">E</text>
      <text x="70" y="50" className="letter">V</text>
      <text x="110" y="50" className="letter">W</text>
      <text x="140" y="50" className="letter">i</text>
      <text x="160" y="50" className="letter">t</text>
      <text x="180" y="50" className="letter">h</text>
      <text x="220" y="50" className="letter">Y</text>
      <text x="250" y="50" className="letter">a</text>
      <text x="280" y="50" className="letter">s</text>
      <text x="310" y="50" className="letter">s</text>
    </svg>
  );
};