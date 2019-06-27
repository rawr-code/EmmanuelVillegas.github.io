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
            Soy <strong>Desarrollador Web Junior</strong>, en constante
            aprendizaje.
          </div>

          <div className={styles.info}>
            Me gusta crear aplicaciones y aun más cuando debo usar tecnologías
            como <strong>ReactJs</strong> y <strong>Sass</strong>.
          </div>

          <div className={styles.info}>
            Soy <b>Venezolano</b> de nacimiento, Técnico Superior en Informática
            y futuro Ingeniero.
          </div>

          <div className={styles.info}>
            Me apasiona el modelado 3D, <strong>el diseño de interfaces</strong>{' '}
            y la creación de vídeo juegos. Aunque de este ultimo conozco muy
            poco.
          </div>

          <div className={styles.info}>
            Y Cuento con <strong>conocimientos</strong> en las siguientes
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
