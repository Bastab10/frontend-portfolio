import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef(null);

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

  // Measure the navbar's real rendered height and expose it as a CSS
  // variable so any section (e.g. Hero) can pad itself correctly and
  // never overlap, regardless of breakpoint or future height changes.
  useEffect(() => {
    const setNavHeightVar = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    setNavHeightVar();

    const resizeObserver = new ResizeObserver(setNavHeightVar);
    if (navRef.current) resizeObserver.observe(navRef.current);

    window.addEventListener("resize", setNavHeightVar);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setNavHeightVar);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        navbar
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-black">
            Bastab Saikia
          </h1>

          <span className="hidden sm:inline-flex rounded-full bg-black px-3 sm:px-4 py-1 text-xs font-medium uppercase tracking-widest text-white">
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
              className="cursor-pointer transition hover:text-black focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg px-2 py-1"
            >
              Work Samples
            </Link>
          </li>

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg px-2 py-1"
            >
              Explore Resume
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Bastab10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-black focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg px-2 py-1"
            >
              See GitHub <FaGithub aria-hidden="true" />
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden rounded-full p-2.5 text-2xl text-black transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/20"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 w-full border-t border-neutral-200 bg-white shadow-xl lg:hidden z-[9998]"
          style={{ top: "var(--navbar-height, 4rem)" }}
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-lg font-medium text-neutral-800 transition hover:text-black py-2 focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg px-2"
            >
              Work Samples
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-neutral-800 transition hover:text-black py-2 focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg px-2"
            >
              Explore Resume
            </a>

            <a
              href="https://github.com/Bastab10"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-medium text-neutral-800 transition hover:text-black py-2 focus:outline-none focus:ring-2 focus:ring-black/20 rounded-lg px-2"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
