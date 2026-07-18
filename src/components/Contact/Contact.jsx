import "./Contact.css";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-title">(LET'S CONNECT)</p>

          <h2 className="contact-heading">
            Ready to <br />
            <span>Work Together?</span>
          </h2>

          <p className="contact-subtitle">
            I'm currently available for freelance projects,
            internships and full-time opportunities.
            Let's turn your ideas into reality.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>bastabs398@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p>+91 98765 *****</p>
              </div>
            </div>

            <div className="contact-item">
              <FaGithub />
              <div>
                <h3>GitHub</h3>
                <p>github.com/Bastab10</p>
              </div>
            </div>

            <div className="contact-item">
              <FaLinkedin />
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/bastab-saikia</p>
              </div>
            </div>

          </div>

          <div className="contact-form">

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;