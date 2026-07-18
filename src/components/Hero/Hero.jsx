import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaCode,
  FaArrowRight,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg">
        <div className="noise"></div>
        <div className="overlay"></div>
      </div>

      <div className="hero-container">
        {/* Top Title */}
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="title-line"></div>
          <span>FULL STACK</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="hero-heading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="developer-text">Developer</h1>

          <h3 className="signature">Bastab Saikia</h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I BUILD <span>SCALABLE</span>
          {" • "}
          <span>MODERN</span>
          {" • "}
          <span>USER FRIENDLY</span> WEB APPLICATIONS
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="btn primary-btn">
            View My Work
            <FaArrowRight />
          </a>

          <a href="/resume.pdf" download className="btn secondary-btn">
            Download Resume
            <FaDownload />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>

          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>

          <a href="#projects">
            <FaCode />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
