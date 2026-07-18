import "./Projects.css";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.p
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          MY WORK
        </motion.p>

        <motion.h2
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span>Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo && project.demo !== "#" ? (project.demo.startsWith('http') ? project.demo : `https://${project.demo}`) : "#"}
                  target={project.demo && project.demo !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="live-demo-btn"
                  style={project.demo === "#" || !project.demo ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                >
                  <HiOutlineExternalLink />
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;