import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-white text-black flex items-center justify-center py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl text-center"
      >
        {/* Small Title */}
        <p className="text-[10px] sm:text-[11px] md:text-[13px] font-extrabold uppercase tracking-[0.4em] sm:tracking-[0.55em] text-black mb-3">
          ABOUT
        </p>

        {/* Heading */}
        <h2 className="leading-none tracking-[-0.05em] sm:tracking-[-0.07em]">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[110px] font-extralight">
            Building
          </span>

          <span className="mt-1 sm:mt-2 block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[90px] font-extralight">
            Digital Experiences
          </span>
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 h-px w-16 sm:w-20 bg-black/20"></div>

        {/* Main Description */}
        <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-8 md:leading-10 font-light text-neutral-600">
          I build modern web applications that are fast, scalable, and
          user-focused. My goal is to create digital experiences that are
          simple, intuitive, and meaningful while continuously improving my
          skills as a developer
        </p>

        {/* Bottom Accent */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-10 sm:w-12 bg-black"></div>

          <span className="text-[10px] sm:text-[11px] md:text-[13px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-black">
            FULL STACK DEVELOPER
          </span>

          <div className="h-px w-10 sm:w-12 bg-black"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
