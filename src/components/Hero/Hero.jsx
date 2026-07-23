import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_45%)] pt-20 text-black"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/hero-image.png"
          alt=""
          className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[480px] xl:w-[560px] 2xl:w-[640px] object-contain grayscale opacity-60"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-extralight tracking-[-0.07em] leading-none text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]">
            Full Stack
          </h1>

          <h1 className="-mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 xl:-mt-6 font-extralight uppercase tracking-[-0.07em] leading-none text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[9rem]">
            Developer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute bottom-8 sm:bottom-10 left-4 right-4 sm:left-8 sm:right-8 lg:left-16 lg:right-16"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">

            <div className="h-px w-12 sm:w-16 bg-black"></div>

            <span className="text-[11px] uppercase tracking-[0.4em] text-neutral-800">
              BASTAB SAIKIA
            </span>

            <p className="max-w-full sm:max-w-md text-[11px] leading-6 uppercase tracking-[0.18em] text-neutral-600">
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
