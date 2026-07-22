import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-white pt-20 text-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/hero-image.png"
          alt="Hero"
          className="
    w-[180px]
    sm:w-[340px]
    md:w-[420px]
    lg:w-[500px]
    xl:w-[560px]
    grayscale
    opacity-60
    object-contain
  "
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center leading-[0.82]"
        >
          <h1
            className="font-extralight tracking-[-0.08em] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]"
          >
            Full Stack
          </h1>

          <h1
            className="-mt-4 sm:-mt-6 font-extralight uppercase tracking-[-0.08em] text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem]"
          >
            DEVELOPER
          </h1>
        </motion.div>
        
        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 md:left-8 lg:left-16 right-4 sm:right-6 md:right-8 lg:right-16 z-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div className="h-px w-12 sm:w-16 bg-black"></div>

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] whitespace-nowrap font-extralight text-zinc-900">
              BASTAB SAIKIA
            </span>

            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] leading-5 max-w-[280px] sm:max-w-[400px] text-neutral-600">
              Building scalable, efficient, and user-focused
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              web applications from idea to deployment.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Passionate about clean code and great design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
