import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCard({ project }) {
  const imageTop = project.id % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative w-full lg:w-[420px] h-auto lg:h-[620px] px-4 sm:px-6 py-4 sm:py-6 border-l border-neutral-200/50 flex flex-col bg-transparent"
    >
      {/* IMAGE TOP */}
      {imageTop && (
        <div className="mt-4 sm:mt-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-[200px] sm:h-[230px]
            object-cover
            rounded-lg
            transition
            duration-500
            hover:scale-105
            "
          />
        </div>
      )}

      {/* Content */}
      <div className={`${imageTop ? "mt-4 sm:mt-6" : "mt-4 sm:mt-6"}`}>
        <div className="flex justify-between items-start">
          <div>
           <h2 className="text-3xl font-semibold text-black leading-tight">
  {project.title}
</h2>

           <p className="text-sm text-neutral-600 mt-1">
  {project.category}
</p>
          </div>
        </div>

       <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold font-extralight">
  Tools & Features
</h3>

       <p className="mt-3 text-neutral-700 text-sm leading-7">
  {project.tech.join(" • ")}
</p>
      <p className="mt-5 text-neutral-600 leading-7">
  {project.description}
</p>
      </div>

      {/* IMAGE BOTTOM */}
      {!imageTop && (
        <div className="mt-4 sm:mt-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-[200px] sm:h-[230px]
            object-cover
            rounded-lg
            transition
            duration-500
            hover:scale-105
            "
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 sm:mt-6">
       <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 text-black hover:text-violet-600 transition"
>
  <FaGithub />
  GitHub
</a>
<a
  href={project.demo}
  target="_blank"
  rel="noreferrer"
  className="
    group
    inline-flex
    items-center
    gap-2
    rounded-full
   
    px-6
    py-3
    text-sm
    font-medium
    tracking-wide
    text-white
    transition-all
    duration-300
    
  "
>
  <span>Live Demo</span>

  <span
    className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-white/10
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:bg-white/20
    "
  >
    <HiArrowUpRight className="text-lg" />
  </span>
</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;