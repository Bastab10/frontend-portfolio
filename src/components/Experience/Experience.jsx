import "./Experience.css";
import experience from "../../data/experience";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        <p className="section-title">EXPERIENCE</p>

        <h2>
          My <span>Journey</span>
        </h2>

        <div className="timeline">

          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="year">{exp.period}</span>

                <h3>{exp.title}</h3>

                <h4>{exp.company} | {exp.location}</h4>

                <ul>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;