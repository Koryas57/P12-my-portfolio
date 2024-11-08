import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import { JaguarModel } from '../threejs/scenes/JaguarModel';

export const Home: React.FC = () => {



    return (
        <>
        <Navigation />
            <JaguarModel/>
        <Footer />
        </>
    );
};

