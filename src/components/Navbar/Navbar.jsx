import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const navLinks = [
  { title: "Work Samples", to: "projects" },
  { title: "Explore Resume", to: "resume" },
  { title: "See Github", to: "github", icon: <FaGithub /> },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-container">

        <div className="logo-section">
          <div className="logo">
            Bastab Saikia
          </div>
          <button className="portfolio-btn">
            portfolio
          </button>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((item) => (
            <li key={item.to}>
              {item.to === "resume" ? (
                <a href="/resume.pdf" className="nav-link">
                  {item.title}
                </a>
              ) : item.to === "github" ? (
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link github-link">
                  {item.title} {item.icon}
                </a>
              ) : (
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;