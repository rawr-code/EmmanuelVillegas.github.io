import React from 'react';
import styles from './Footer.module.scss';

// Icons
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter
} from 'react-icons/ti';

import { GoMarkGithub } from 'react-icons/go';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <ul className={styles.ul}>
        <li className={styles.icon}>
          <a
            href="https://www.linkedin.com/in/emmanuel-villegas/"
            target="_blank"
            rel="noopener noreferrer">
            <TiSocialLinkedin />
          </a>
        </li>
        <li className={styles.icon}>
          <a
            href="https://www.facebook.com/emmanuel.villegas.75"
            target="_blank"
            rel="noopener noreferrer">
            <TiSocialFacebook />
          </a>
        </li>
        <li className={styles.icon}>
          <a
            href="https://twitter.com/emmanue79240667"
            target="_blank"
            rel="noopener noreferrer">
            <TiSocialTwitter />
          </a>
        </li>
        <li className={styles.icon}>
          <a
            href="https://github.com/EmmanuelVillegas"
            target="_blank"
            rel="noopener noreferrer">
            <GoMarkGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
