import React from 'react';
import styles from './DecotarionLine.module.scss';

const DecotarionLine = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.line} />
      {children}
    </div>
  );
};

export default DecotarionLine;
