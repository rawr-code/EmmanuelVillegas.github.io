import React from 'react';
import styles from './Layout.module.scss';

import NavBar from './NavBar';
import Footer from './Footer';

// Atoms
import { MainContainer } from '../Atoms';

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <NavBar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </div>
  );
};

export default Layout;
