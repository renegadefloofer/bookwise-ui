import React from 'react';
import logo from '../../src/img/logo.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles['header-items']}>
        <Link className={styles['link']} to="/">
          Ask
        </Link>
        <Link className={styles['link']} to="/giverecommendations">
          Give
        </Link>
      </nav>
      <img className={styles['header-items']} src={logo} alt="bookwise" />
      <nav className={styles['header-items']}>
        <span>login</span>
      </nav>
    </header>
  );
};

export default Header;
