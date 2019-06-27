import React from 'react';
import styles from './Projects.module.scss';

// Atoms
import { DecotarionLine } from '../../components/Atoms';

// Molecules
import { ProjectCard } from '../../components/Molecules';

// images
import imgReaccter from '../../images/reactter.png';
import imgReactChat from '../../images/reactchat.png';
import imgArtistCode from '../../images/artistcode.png';

const Projects = () => {
  return (
    <div className={styles.root}>
      <DecotarionLine>
        <div className={styles.title}>Proyectos</div>
      </DecotarionLine>
      <div className={styles.infoContainer}>
        <div className={styles.cardContainer}>
          <ProjectCard
            title="ArtistCode"
            img={imgArtistCode}
            url="https://www.artistcode.net/"
          />
          <ProjectCard
            title="Reactter"
            img={imgReaccter}
            github="https://github.com/EmmanuelVillegas/reactter"
            url="https://emmanuelvillegas.github.io/reactter/"
          />
          <ProjectCard
            title="ReactChat"
            img={imgReactChat}
            github="https://github.com/EmmanuelVillegas/reactchat"
            url="https://stark-garden-47923.herokuapp.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
