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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        navbar
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-black">
            Bastab Saikia
          </h1>

          <span className="hidden md:inline-flex rounded-full bg-black px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
            Portfolio
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-neutral-700">
          <li>
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer transition hover:text-black"
            >
              Work Samples
            </Link>
          </li>

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              Explore Resume
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Bastab10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-black"
            >
              See GitHub <FaGithub />
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden rounded-full p-2 text-2xl text-black transition hover:bg-neutral-100"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed left-0 top-16 w-full border-t border-neutral-200 bg-white shadow-xl lg:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-lg font-medium text-neutral-800 transition hover:text-black"
            >
              Work Samples
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-neutral-800 transition hover:text-black"
            >
              Explore Resume
            </a>

            <a
              href="https://github.com/Bastab10"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-medium text-neutral-800 transition hover:text-black"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
