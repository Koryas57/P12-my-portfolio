import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './Showroom.scss';

interface ModelViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Showroom: React.FC<ModelViewerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Sélectionne l'élément `.modal-content` pour le rendu
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;

    // Création du conteneur pour le rendu Three.js dans la modale
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    modalContent.appendChild(container);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // Ajout du sol pour la scène
    const floorGeometry = new THREE.PlaneGeometry(200, 200);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Lumières pour éclairer la scène
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Chargement du modèle 3D de la Jaguar
    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/Jaguar/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(10, 10, 10);
        model.rotation.y = Math.PI / 2;

        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        scene.add(model);
      },
      undefined,
      (error) => console.error('Erreur lors du chargement du modèle :', error)
    );

    // Contrôles pour la caméra
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.minDistance = 2;
    controls.maxDistance = 10;

    // Fonction d'animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Gestion de la fermeture de la modale
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Nettoyage lors de la fermeture de la modale
    return () => {
      renderer.dispose();
      controls.dispose();
      window.removeEventListener('keydown', handleKeyDown);
      container.remove();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-content-banner'>
          <h1>Showroom Jaguar</h1>
          <button onClick={onClose}>Quitter le Showroom</button>
        </div>
      </div>
    </div>
  );
};
