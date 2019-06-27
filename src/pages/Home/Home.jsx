import React from 'react';
import styles from './Home.module.scss';

// Atoms
import { DecotarionLine } from '../../components/Atoms';

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Emmanuel Villegas</div>
      <div className={styles.tag}>> Desarrollador</div>
      <DecotarionLine>
        <p className={styles.info}>
          Amante de la <b className={styles.infoBold}>Tecnología</b>
        </p>
      </DecotarionLine>
    </div>
  );
};

export default Home;
