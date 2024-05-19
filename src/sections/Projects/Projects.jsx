import styles from './ProjectsStyles.module.css';
import flower from '../../assets/flower.png';
import Resto from '../../assets/resto.png';
import Bookself from '../../assets/Bookself.png';
import BurgerWorld from '../../assets/BurgerWorld.png';
import DApps from '../../assets/DApps.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={flower}
          link="https://juanbenedhit.github.io/valentine/"
          h3="Valentine’s Day"
          p="Valentine confess web"
        />
        <ProjectCard
          src={Resto}
          link="https://juanbenedhit.github.io/resto/"
          h3="Resto"
          p="Restaurant Home Page"
        />
        <ProjectCard
          src={Bookself}
          link="https://juanbenedhit.github.io/Bookself/"
          h3="Bookself"
          p="Bookself WebApp"
        />
        <ProjectCard
          src={BurgerWorld}
          link="https://juanbenedhit.github.io/burgerWorld/"
          h3="Burger World"
          p="Restaurant Landing Page"
        />
        <ProjectCard
          src={DApps}
          h3="Coming Soon"
          p="DApps"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;
