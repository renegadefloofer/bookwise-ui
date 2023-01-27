import React from 'react';
import logo from '../../src/img/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles['header-items']}>
        <span>books</span>
      </nav>
      <img className={styles['header-items']} src={logo} alt="bookwise" />
      <nav className={styles['header-items']}>
        <span>login</span>
      </nav>
    </header>
  );
};

export default Header;
