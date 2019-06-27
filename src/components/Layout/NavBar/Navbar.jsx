import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header className={styles.root}>
      <ul className={styles.ulRoot}>
        <li className={styles.link}>
          <NavLink exact to="/" className={styles.logo}>
            Emmanuel Villegas
          </NavLink>
        </li>
        <li className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.link}>
              <NavLink
                exact
                to="/about"
                className={styles.navLink}
                activeClassName={styles.navLinkActive}>
                SOBRE MI
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                exact
                to="/projects"
                className={styles.navLink}
                activeClassName={styles.navLinkActive}>
                PROYECTOS
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
