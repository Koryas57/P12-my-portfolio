import React from 'react';
import './ContactForm.scss';
import mailIcon from '../../assets/images/mail.png';

export const ContactForm: React.FC = () => {
  return (
    <form action='https://formspree.io/f/xovqwyve' method='POST' className="contact-form">
      <div className='contact-header'>
        <img src={mailIcon} alt="Icone d'enveloppe" />
        <h2 className="contact-title">Contactez-moi</h2>
      </div>

      <label htmlFor="name">Nom</label>
      <input type="text" id="name" name="name" required autoComplete="name" placeholder="Entrez votre nom" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required autoComplete="email" placeholder="Entrez votre adresse email" />

      <label htmlFor="phone">Téléphone</label>
      <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="( Facultatif )" />

      <label htmlFor="subject">Sujet</label>
      <input type="text" id="subject" name="subject" autoComplete="subject" placeholder="Entrez l'objet de votre message" />

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={11} required autoComplete="off" placeholder="Votre message..."></textarea>

      <button type="submit">Envoyer</button>
    </form>
  );
};