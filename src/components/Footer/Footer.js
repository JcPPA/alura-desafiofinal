import React from 'react';
import styles from './Footer.css';
import FooterSocialMidias from '../FooterSocialMidias/FooterSocialMidias';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 - StudyFlix. Todos os direitos reservados para JcPPA.</p>
        <ul className={styles.footerLinks}>
          <li><FooterSocialMidias /></li>
          <li><a href="/">Política de privacidade</a></li>
          <li><a href="/">Suporte</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
