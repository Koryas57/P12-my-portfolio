import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import { Carousel } from '../components/Carousel/Carousel';
import { About } from '../components/About/About';
import '../assets/style/main.scss'

export const Home: React.FC = () => {



    return (
        <>
        <main className='main-layout'>
            <Navigation />
            <Carousel />
            <About />
            <Footer />
        </main>
        </>
    );
};

