import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        navbar
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-300"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2 sm:gap-4">
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold">
            Bastab Saikia
          </h1>

          <span className="hidden sm:inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-emerald-400 text-black text-xs sm:text-sm font-semibold">
            Portfolio
          </span>
        </div>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-black font-medium text-sm sm:text-base">
          <li>
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-emerald-400 transition-colors"
            >
              Work Samples
            </Link>
          </li>

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="hover:text-emerald-400 transition-colors"
            >
              Explore Resume
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Bastab10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              See Github <FaGithub />
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white text-xl sm:text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="flex flex-col p-4 sm:p-6 gap-4 sm:gap-5 text-white">
            <Link
              to="projects"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="text-base sm:text-lg py-2 hover:text-emerald-400 transition-colors"
            >
              Work Samples
            </Link>

            <a
              href="/resume.pdf"
              className="text-base sm:text-lg py-2 hover:text-emerald-400 transition-colors"
            >
              Explore Resume
            </a>

            <a
              href="https://github.com/Bastab10"
              className="flex items-center gap-2 text-base sm:text-lg py-2 hover:text-emerald-400 transition-colors"
            >
              See Github <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
