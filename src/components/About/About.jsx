import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_85%)] px-4 pt-40 pb-16 sm:min-h-screen sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-16 text-black"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-[120px] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.45em] text-black">
          ABOUT
        </p>

        <h2 id="about-heading" className="leading-none tracking-[-0.06em]">
          <span className="block text-[2.5rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-[90px] 2xl:text-[110px] font-extralight">
            Building
          </span>

          <span className="mt-2 block text-[2.2rem] sm:text-3.5xl md:text-5xl lg:text-6xl xl:text-[75px] 2xl:text-[90px] font-extralight">
            Digital Experiences
          </span>
        </h2>

        <div className="mx-auto my-8 h-px w-20 bg-black/20"></div>

        <p className="mx-auto max-w-3xl text-base md:text-lg lg:text-xl font-light leading-8 md:leading-9 lg:leading-10 text-neutral-600">
          I build modern web applications that are fast, scalable, and
          user-focused. My goal is to create digital experiences that are
          simple, intuitive, and meaningful while continuously improving my
          skills as a developer.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="h-px w-10 bg-black"></div>

          <span className="text-xs uppercase tracking-[0.4em] text-black">
            FULL STACK DEVELOPER
          </span>

          <div className="h-px w-10 bg-black"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
