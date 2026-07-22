import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;

const totalScroll = Math.max(
  slider.scrollWidth - window.innerWidth,
  0
);
   const animation = gsap.to(slider, {
  x: -totalScroll,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => "+=" + totalScroll,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});

ScrollTrigger.refresh();

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F7F7F5] py-20 md:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_45%)]" />

      {/* Mobile/Tablet: Vertical Layout */}
      <div className="lg:hidden relative px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-xs mb-3">
            MY WORK
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[0.9] text-black">
            Featured Projects
          </h2>

          <p className="mt-4 text-neutral-500 leading-7 text-sm sm:text-base">
            A curated collection of full-stack applications focused on clean
            architecture, modern UI, performance and real-world problem solving.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal Scroll */}
      <div
        ref={sliderRef}
        className="hidden lg:flex h-full items-center gap-8 xl:gap-12 px-8 md:px-16 lg:px-20 w-max"
      >
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-[400px] xl:w-[520px] shrink-0"
        >
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-xs mb-3">
            MY WORK
          </p>

          <h2 className="text-6xl xl:text-8xl font-light leading-[0.9] text-black">
            Featured Projects
          </h2>

          <p className="mt-4 text-neutral-500 leading-7 text-base xl:text-lg">
            A curated collection of full-stack applications focused on clean
            architecture, modern UI, performance and real-world problem solving.
          </p>
        </motion.div>

        {/* Project Cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
