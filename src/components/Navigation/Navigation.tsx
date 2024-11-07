import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'

export const Navigation: React.FC = () => {





    return (
        <nav className='navigation'>
            <div className='navigation-links'>
                <Link className='projects-list_link' to={'/ProjectsList'}>
                    Projects
                </Link>
                <Link className='skills-list_link' to={'/Skills'}>
                    Skills details
                </Link>
            </div>
        </nav>
    );
};
