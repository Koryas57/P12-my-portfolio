import React from "react";
import "./ContactCard.scss";
import { FiMail, FiPhone } from "react-icons/fi";

export const ContactCard: React.FC = () => (
  <div className="contact-card">
    <h2>Contact</h2>
    <p className="tagline">
      Transformons ensemble votre vision en expériences digitales innovantes 🚀
    </p>

    <ul>
      <li>
        <FiMail />
        <a href="mailto:ynezreg@gmail.com">ynezreg@gmail.com</a>
      </li>
      <li>
        <FiPhone />
        <a href="tel:+33651141577">+33 6 51 14 15 77</a>
      </li>
    </ul>

    <a
      href="mailto:ynezreg@gmail.com?subject=Prêt%20pour%20un%20projet%20commun%20?"
      className="btn-contact"
    >
      Envoyer un message
    </a>
  </div>
);
