import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Me.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useTypewriter } from 'react-simple-typewriter';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const[typeEffect] = useTypewriter(
    {
      words:['Web Developer','Front-End Dev','Blockchain Enthusiasm','Web 3 Enthusiasm'],
      loop:true,
      typeSpeed: 100,
      deleteSpeed: 40
    }
  )

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Alexander Juan"
        />
        <tilt>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        </tilt>
        
      </div>
      <div className={styles.info}>
        <h1>
          Alexander
          <br />
          Juan
        </h1>
        <h2>I'am
          <span>{typeEffect}</span>
        </h2>
        <span>
          <a href="https://www.instagram.com/juanbenedhit_/" target="_blank">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="https://github.com/juanbenedhit" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/juanbenedhit/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
           Highly Enthusiastic and Passionate about Web Development, Web 3.0, DApps, Blockchain, and Front-End.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
