import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Phyton" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Teamwork" />
        <SkillList src={checkMarkIcon} skill="Problem Solving" />
        <SkillList src={checkMarkIcon} skill="Critical Thinking" />

      </div>
    </section>
  );
}

export default Skills;
