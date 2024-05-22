import React, { useState } from 'react';
import styles from './NavbarStyle.module.css';

const Navbar = () => {
    const[Toggle, showMenu] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="" className={styles.nav__logo}>Juanbenedhit</a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">

              <li className="nav__item">
                <a href="#hero" className={styles.nav__link} active-link>
                  <i className="uil uil- nav__icon">Home</i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="uil uil- nav__icon">Project</i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil- nav__icon">Skills</i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil- nav__icon">Contact</i>
                </a>
              </li>
            </ul>

            <i class ="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
              <i class="ui uil-apps"></i>
            </div>

          </div>
      </nav>
    </header>
  );
}

export default Navbar;
