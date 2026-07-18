import "./TechStack.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import skills from "../../data/skills";
import { motion } from "framer-motion";

const iconMap = {
  // Frontend
  React: FaReact,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  TailwindCSS: SiTailwindcss,
  Redux: FaReact,

  // Backend
  "Node.js": FaNodeJs,
  Express: SiExpress,
  "REST APIs": FaNodeJs,
  Authentication: FaNodeJs,

  // Database
  MongoDB: SiMongodb,
  MySQL: SiMysql,

  // Tools
  Git: FaGitAlt,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
  Figma: SiFigma,
  Vite: SiVite,
};

function TechStack() {
  const renderSkillCard = (skill, index) => {
    const Icon = iconMap[skill.name] || FaReact;

    return (
      <motion.div
        key={index}
        className="tech-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: "easeOut"
        }}
        whileHover={{ 
          y: -10,
          scale: 1.08,
          rotate: 5
        }}
      >
        <Icon className="tech-icon" />
        <span className="tech-name">{skill.name}</span>
      </motion.div>
    );
  };

  return (
    <section className="techstack" id="techstack">
      <div className="techstack-background">
        <div className="glow-orb"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="techstack-container">
        <div className="techstack-header">
          <p className="section-title">TECH STACK</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="techstack-content">
          <div className="techstack-row frontend-row">
            {skills.frontend.map((skill, index) => renderSkillCard(skill, index))}
          </div>
          
          <div className="techstack-row backend-row">
            {skills.backend.map((skill, index) => renderSkillCard(skill, index + skills.frontend.length))}
          </div>
          
          <div className="techstack-row database-row">
            {skills.database.map((skill, index) => renderSkillCard(skill, index + skills.frontend.length + skills.backend.length))}
          </div>
          
          <div className="techstack-row tools-row">
            {skills.tools.map((skill, index) => renderSkillCard(skill, index + skills.frontend.length + skills.backend.length + skills.database.length))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
