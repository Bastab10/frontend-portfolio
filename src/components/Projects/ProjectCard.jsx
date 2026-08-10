import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCard({ project }) {
  const imageTop = project.id % 2 === 1;

  const Image = (
    <div className="mt-5 overflow-hidden rounded-xl">
      <img
        src={project.image}
        alt={project.title}
        className="h-[240px] md:h-[250px] lg:h-[240px] w-full rounded-xl object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex h-[500px] w-full shrink-0 lg:w-[420px] flex-col border-l border-neutral-200 px-4 md:px-6 py-5 md:py-6"
    >
      {imageTop && Image}

      <div className="mt-3">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
          {project.title}
        </h2>

        <p className="mt-0.5 text-sm text-neutral-600">
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

      <div className="mt-auto flex items-center justify-between pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-base hover:text-violet-600"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
        >
          Live Demo
          <HiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;