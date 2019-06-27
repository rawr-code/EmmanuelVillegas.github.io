import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ img = '', title = 'Title', url, github }) => {
  return (
    <div className={styles.root}>
      <img src={img} alt="img" className={styles.img} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.optionsContainer}>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}>
              {github ? 'Demo' : 'Web'}
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}>
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
