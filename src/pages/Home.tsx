import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import { JaguarModel } from '../threejs/scenes/JaguarModel';
import { Carousel } from '../components/Carousel/Carousel';

export const Home: React.FC = () => {



    return (
        <>
        <Navigation />
        <JaguarModel/>
        <Carousel />
        <Footer />
        </>
    );
};

