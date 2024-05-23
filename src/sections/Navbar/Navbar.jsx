import React, { useState, useEffect } from 'react';
import styles from './NavbarStyle.module.css';

const Navbar = () => {
    const [toggle, showMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            showMenu(false); 
        }
    };

    return (
        <header className={`${styles.header} ${scrolling ? styles.scrolling : ''}`}>
            <nav className={styles.nav}>
                <a className={styles.nav__logo} onClick={() => scrollToSection('hero')}>Juanbenedhit</a>
                <div className={toggle ? `${styles.nav__menu} ${styles.show_menu}` : styles.nav__menu}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <a onClick={() => scrollToSection('hero')} className={`${styles.nav__link}`} active-link="true">
                                <i className="uil uil-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a onClick={() => scrollToSection('projects')} className={styles.nav__link}>
                                <i className="uil uil-briefcase nav__icon"></i> Project
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a onClick={() => scrollToSection('skills')} className={styles.nav__link}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a onClick={() => scrollToSection('contact')} className={styles.nav__link}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className={`uil uil-times ${styles.nav__close}`} onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className={styles.nav__toggle} onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
