import React from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { Carousel3D } from "../components/Carousel/Carousel3D";
import { ContactCard } from "../components/Contact/ContactCard";
import { AboutCard } from "../components/About/AboutCard";
import "../assets/style/main.scss";

export const Home: React.FC = () => {
  return (
    <>
      <main className="main-layout">
        <Navigation />
        <Carousel3D />
        <div className="home-container">
          <ContactCard />
          <AboutCard />
        </div>
        <Footer />
      </main>
    </>
  );
};
