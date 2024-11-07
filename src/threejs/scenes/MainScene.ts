import React, { useEffect } from 'react';
import * as THREE from 'three';

export const MainScene: React.FC = () => {
  useEffect(() => {
    // Création dynamique du conteneur et ajout au DOM
    const container = document.createElement('div');
    const nav = document.querySelector('.navigation-logo');
    console.log("founded");
    container.style.width = '30vw';
    container.style.height = '10vh';
    nav?.appendChild(container);

    // Configuration du renderer avec le conteneur
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(150, 75);
    container.appendChild(renderer.domElement);

    // Création de la scène
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e1e1e); // Fond gris foncé

    // Configuration de la caméra
    const camera = new THREE.PerspectiveCamera(25, 500 / 300, 0.1, 1000);
    camera.position.z = 5;

    // Création d’un cube pour tester l'animation
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Boucle d'animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Nettoyage
    return () => {
      renderer.dispose();
      nav?.removeChild(container); // Assure que le conteneur est supprimé
    };
  }, []);

  // Pas de JSX ici pour éviter l'erreur
  return null;
};
