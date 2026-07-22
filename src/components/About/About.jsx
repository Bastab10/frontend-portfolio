import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-24 text-black sm:px-8 lg:px-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-[140px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.45em] text-black sm:text-xs">
          ABOUT
        </p>

        <h2 className="leading-none tracking-[-0.06em]">
          <span className="block text-[2.7rem] font-extralight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">
            Building
          </span>

          <span className="mt-2 block text-[2.3rem] font-extralight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
            Digital Experiences
          </span>
        </h2>

        <div className="mx-auto my-8 h-px w-20 bg-black/20"></div>

        <p className="mx-auto max-w-3xl text-base font-light leading-8 text-neutral-600 sm:text-lg md:text-xl md:leading-9 lg:text-2xl lg:leading-10">
          I build modern web applications that are fast, scalable, and
          user-focused. My goal is to create digital experiences that are
          simple, intuitive, and meaningful while continuously improving my
          skills as a developer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="h-px w-10 bg-black"></div>

          <span className="text-[10px] uppercase tracking-[0.4em] text-black sm:text-xs">
            FULL STACK DEVELOPER
          </span>

          <div className="h-px w-10 bg-black"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
