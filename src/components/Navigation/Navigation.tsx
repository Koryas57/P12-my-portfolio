import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'

export const Navigation: React.FC = () => {





    return (
    <>
    <nav className='navigation'>
        <Link className='navigation-logo' to={'/'}>
                <h1>Yacine NEZREG</h1>
                <p className='navigation-logo-description'>Front End Developer</p>
        </Link>
        <div className='navigation-links'>
            <Link className='projects-list_link' to={'/projects'}>
                Projects
            </Link>
            <Link className='skills-list_link' to={'/Skills'}>
                Skills 
            </Link>
        </div>
    </nav>
    </>
    );
};
