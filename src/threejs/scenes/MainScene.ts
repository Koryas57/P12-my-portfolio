import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


export const MainScene: React.FC = () => {
  
  useEffect(() => {


    // --------------------[SCENE]-------------------- //

    const container = document.createElement('div');
    container.className = 'navigation-logo'
    const nav = document.querySelector('nav');
    nav?.appendChild(container);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(150, 75);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); 

    const camera = new THREE.PerspectiveCamera(45, 150 / 75, 0.1, 1000);
    camera.position.set(0, 0.5, 2); // Position plus proche et légèrement en hauteur


    // --------------------[LIGHTS]-------------------- //

    // Lumière directionnelle principale depuis le plafond
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8); // Intensité augmentée
    directionalLight.position.set(0, 5, 0);
    directionalLight.target.position.set(0, 0, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    // Lumière ambiante douce
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Ajout de lumières ponctuelles pour un éclairage uniforme
    const pointLight1 = new THREE.PointLight(0xffffff, 0.7);
    pointLight1.position.set(-2, 1, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.7);
    pointLight2.position.set(2, 1, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 0.5);
    pointLight3.position.set(0, 1, -2);
    scene.add(pointLight3);

    // Optionnel : Lumière hémisphérique pour un éclairage doux en haut et en bas
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
    hemiLight.position.set(0, 5, 0);
    scene.add(hemiLight);
    

    // --------------------[LOADER]-------------------- //
    
    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/Jaguar/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(10, 10, 10); // Ajuste l'échelle pour une meilleure visibilité
        
        // Orienter le modèle pour le mettre à plat, vers la droite de l'écran
        model.rotation.x = Math.PI // Pitch
        model.rotation.z = Math.PI // Roll
        model.rotation.y = Math.PI / 2 // Yaw
        
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material = new THREE.MeshPhysicalMaterial({
              color: (node.material as THREE.MeshStandardMaterial).color,
              roughness: 0.2,
              metalness: 0.8,
              clearcoat: 1.0,
              clearcoatRoughness: 0.1,
            });
          }
        });
        
        scene.add(model);
        
        // Animation (optionnel)
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('Erreur lors du chargement du modèle :', error);
      }
    );


    // --------------------[CONTROLS]-------------------- //

    // Configuration de l'OrbitControls pour une vue légèrement surélevée
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false; // Désactiver le déplacement horizontal/vertical
    controls.enableZoom = true; // Autoriser le zoom
    controls.minDistance = 0.8; // Distance minimum pour limiter le zoom
    controls.maxDistance = 3; // Distance maximum pour limiter le zoom

    // Limiter légèrement l'angle vertical de rotation pour un effet de garage
    controls.maxPolarAngle = Math.PI / 3; // Empêcher la vue trop en dessous
    controls.minPolarAngle = Math.PI / 3; // Limite en haut pour un léger mouvement
    controls.rotateSpeed = 0.075; // Diminuer la vitesse de rotation pour une manipulation plus lente


    controls.update();


    return () => {
      renderer.dispose();
      nav?.removeChild(container);
    };


  }, []);

  return null;
};
