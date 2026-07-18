import "./Education.css";
import education from "../../data/education";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-bg">
        <div className="blur blur-left"></div>
        <div className="blur blur-right"></div>
      </div>

      <div className="education-container">

        <motion.p
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EDUCATION
        </motion.p>

        <motion.h2
          className="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Journey</span>
        </motion.h2>

        <div className="timeline">

          {education.map((item, index) => (

            <motion.div
              className="timeline-item"
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
            >

              <div className="timeline-left">

                <div className="timeline-dot"></div>

                {index !== education.length - 1 && (
                  <div className="timeline-line"></div>
                )}

              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  {item.period}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <h4>
                  {item.institution}
                </h4>

                <p className="location">
                  {item.location}
                </p>

                <p className="description">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;