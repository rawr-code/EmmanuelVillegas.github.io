import React from 'react';
import styles from './About.module.scss';

// Atoms
import { DecotarionLine } from '../../components/Atoms';

// images
import imgAbout from '../../images/about.jpg';

const About = () => {
  return (
    <div className={styles.root}>
      <DecotarionLine>
        <div className={styles.title}>Sobre mi</div>
      </DecotarionLine>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.info}>
            Hola, soy <strong>Emmanuel Villegas</strong>, amante de la
            tecnología y del arte de crear cosas.
          </div>

          <div className={styles.info}>
            Soy <strong>Desarrollador web junior</strong>, me gusta crear
            aplicaciones y más aun cuando debo usar tecnologías como{' '}
            <strong>ReactJs</strong> y <strong>Sass</strong>.
          </div>

          <div className={styles.info}>
            <b>Venezolano</b> de nacimiento, Técnico Superior en Informática y
            futuro Ingeniero.
          </div>

          <div className={styles.info}>
            Me apasiona el modelado 3D, <strong>el diseño de interfaces</strong>{' '}
            y la creación de video juegos. Aunque de este ultimo se muy poco.
          </div>

          <div className={styles.info}>
            Cuento con <strong>conocimientos</strong> en las siguientes
            tecnologías:
          </div>
          <div className={styles.info}>
            Html, Css, JavaScript, Sass, NodeJs, Webpack, ReactJs, Redux y
            Firebase.
          </div>
        </div>
        <img src={imgAbout} alt="img" className={styles.imgAbout} />
      </div>
    </div>
  );
};

export default About;
