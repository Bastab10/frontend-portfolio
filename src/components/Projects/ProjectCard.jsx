
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCard({ project }) {
  const imageTop = project.id % 2 === 1;

  const Image = (
    <div className="mt-5 h-[220px] w-full overflow-hidden rounded-xl bg-neutral-100">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        onError={(e) => {
          console.error("Project image failed to load:", project.image);
          e.currentTarget.style.visibility = "hidden";
        }}
        className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
      />
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[540px] w-full shrink-0 flex-col border-l border-neutral-200 px-4 py-6 md:px-6 lg:w-[420px]"
    >
      {imageTop && Image}

      <div className="mt-3">
        <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
          {project.title}
        </h2>

        <p className="mt-1 text-sm text-neutral-600">
          {project.category}
        </p>

        <h3 className="mt-3 text-base font-medium">
          Tools &amp; Features
        </h3>

        <p className="mt-1 text-sm leading-5 text-neutral-700">
          {project.tech.join(" • ")}
        </p>

        <p className="mt-2 text-sm leading-5 text-neutral-600">
          {project.description}
        </p>
      </div>

      {!imageTop && Image}

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base transition hover:text-violet-600"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
        >
          Live Demo
          <HiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
