// ShowroomPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Showroom } from '../components/Showroom/Showroom';

export const ShowroomPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Retourne à la page précédente
  };

  return (
    <>
      <Showroom isOpen={true} onClose={handleClose} /> {/* Modale interactive */}
    </>
  );
};
