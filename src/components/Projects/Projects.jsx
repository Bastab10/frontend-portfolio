// Responsive Projects.jsx
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
    if (window.innerWidth < 1024) return;

    const section = sectionRef.current;
    const slider = sliderRef.current;

    let animation;
    let scrollTriggerInstance;

    const setup = () => {
      // Kill any previous instance before recalculating
      if (animation) animation.kill();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();

      const totalScroll = Math.max(slider.scrollWidth - window.innerWidth, 0);

      animation = gsap.to(slider, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + totalScroll,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTriggerInstance = animation.scrollTrigger;
      ScrollTrigger.refresh();
    };

    setup();

    // Images can finish loading after mount and change slider.scrollWidth,
    // so recalculate once everything (including images) has fully loaded.
    window.addEventListener("load", setup);

    // Recalculate on resize too, since card widths / gaps can shift.
    const handleResize = () => {
      if (window.innerWidth < 1024) return;
      setup();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", setup);
      window.removeEventListener("resize", handleResize);
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} aria-labelledby="projects-heading" className="relative min-h-screen overflow-hidden bg-[#F7F7F5] px-4 sm:px-6 md:px-8 lg:px-16 py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_45%)]" />

      <div className="relative lg:hidden max-w-4xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-10">
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-xs mb-3">MY WORK</p>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-light leading-tight">Featured Projects</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-500">
            A curated collection of full-stack applications focused on clean architecture, modern UI and performance.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>

      <div ref={sliderRef} className="hidden lg:flex w-max items-center gap-8 xl:gap-10 px-8 md:px-16 lg:px-20">
        <div className="w-[380px] xl:w-[450px] shrink-0">
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-xs mb-3">MY WORK</p>
          <h2 id="projects-heading-desktop" className="text-6xl xl:text-7xl font-light leading-[0.9]">Featured Projects</h2>
          <p className="mt-4 text-base xl:text-lg leading-7 text-neutral-500">
            A curated collection of full-stack applications focused on clean architecture, modern UI and performance.
          </p>
        </div>

        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}

export default Projects;
