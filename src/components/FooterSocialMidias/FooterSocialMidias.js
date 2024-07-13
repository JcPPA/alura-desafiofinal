import React from 'react';
import styles from './FooterSocialMidias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterSocialMidias = () => {
  return (
    <div className={styles.socialMidias}>
      <a href="https://facebook.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
      </a>
      <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </a>
      <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>
      <a href="https://linkedin.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
    </div>
  );
};

export default FooterSocialMidias;
