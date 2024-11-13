import React from 'react';
import './ContactForm.scss';
import mailIcon from '../../assets/images/mail.png'

export const ContactForm: React.FC = () => {
  return (
    <form className="contact-form">
      <div className='contact-header'>
        <img src={mailIcon} alt="Icone d'enveloppe" />
        <h2 className="contact-title">Contactez-moi</h2>
      </div>

      <label htmlFor="name">Nom</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={11} required></textarea>
      
      <button type="submit">Envoyer</button>
    </form>
  );
};
