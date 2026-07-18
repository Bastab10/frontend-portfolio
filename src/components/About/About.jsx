import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg">
        <div className="about-blur about-blur1"></div>
        <div className="about-blur about-blur2"></div>
        <div className="about-grid"></div>
      </div>

      <div className="about-container">
        {/* Left Side */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-title">ABOUT ME</p>

          <h2 className="about-heading">
            Building <br />
            <span>Digital Experiences</span>
          </h2>

          <p className="about-text">
            I'm <strong>Bastab Saikia</strong>, a passionate Full Stack
            Developer who enjoys building modern, responsive, and scalable web
            applications with clean code and intuitive user experiences.
          </p>

          <p className="about-text">
            I love turning ideas into real-world products using the MERN Stack
            while continuously learning and improving my skills.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-card">
            <span>01</span>
            <h3>Years Learning</h3>
            <p>Continuously improving my development skills.</p>
          </div>

          <div className="about-card">
            <span>15+</span>
            <h3>Projects</h3>
            <p>Built responsive and scalable web applications.</p>
          </div>

          <div className="about-card">
            <span>MERN</span>
            <h3>Stack</h3>
            <p>MongoDB, Express, React & Node.js.</p>
          </div>

          <div className="about-card">
            <span>100%</span>
            <h3>Open to Work</h3>
            <p>Available for internships and full-time opportunities.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;