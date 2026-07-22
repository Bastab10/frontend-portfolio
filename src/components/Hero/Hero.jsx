import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-16 md:pt-20 text-black"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/hero-image.png"
          alt="Hero"
          className="
            w-[220px]
            sm:w-[300px]
            md:w-[420px]
            lg:w-[520px]
            xl:w-[600px]
            object-contain
            grayscale
            opacity-60
          "
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 sm:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-extralight tracking-[-0.07em] leading-none text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]">
            Full Stack
          </h1>

          <h1 className="-mt-2 sm:-mt-4 md:-mt-6 font-extralight uppercase tracking-[-0.07em] leading-none text-[2.8rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
            Developer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute bottom-8 left-6 right-6 lg:left-16 lg:right-16"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">

            <div className="h-px w-16 bg-black"></div>

            <span className="text-[11px] uppercase tracking-[0.4em] text-neutral-800">
              BASTAB SAIKIA
            </span>

            <p className="max-w-md text-[11px] leading-6 uppercase tracking-[0.18em] text-neutral-600">
              Building scalable, efficient and user-focused web
              applications from idea to deployment. Passionate
              about clean code and meaningful design.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
