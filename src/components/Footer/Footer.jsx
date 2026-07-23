import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function FooterBottom() {
  return (
    <footer className="border-t border-white/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-600 md:flex-row">
        
        {/* Left */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <FaLinkedin className="text-xs" />
            Linkedin
          </a>

          <a
            href="https://github.com/Bastab10"
            target="_blank"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <FaGithub className="text-xs" />
            GitHub
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <FaXTwitter className="text-xs" />
            Twitter
          </a>
        </div>

        {/* Right */}
        <p className="text-xs uppercase tracking-wide text-neutral-600">
          © {new Date().getFullYear()} BASTAB — PORTFOLIO
        </p>
      </div>
    </footer>
  );
}
