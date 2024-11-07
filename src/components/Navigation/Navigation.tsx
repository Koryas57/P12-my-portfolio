import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'
import { Logo } from './Logo/Logo';

export const Navigation: React.FC = () => {





    return (
        <nav className='navigation'>
            <Link className='navigation-logo' to='/'>
            <div style={{ display: 'flex', background: 'black', alignItems: 'flex-start', padding: '10px' }}>
      <Logo />
      {/* Autres composants de l'application */}
    </div>
            </Link>
            <div className='navigation-links'>
                <Link className='projects-list_link' to={'/ProjectsList'}>
                    Voir la liste des projets
                </Link>
                <Link className='skills-list_link' to={'/Skills'}>
                    Voir la liste des compétences
                </Link>
            </div>
        </nav>
    );
};
