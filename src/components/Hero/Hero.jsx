import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_45%)] text-black sm:min-h-screen sm:min-h-[100svh]"
    >
      {/* Ambient glow blobs - hidden on small screens to avoid overflow/perf issues */}
      <div className="absolute -left-40 top-20 hidden h-[32rem] w-[32rem] rounded-full bg-neutral-200 blur-[180px] opacity-70 sm:block" />
      <div className="absolute -right-40 bottom-0 hidden h-[32rem] w-[32rem] rounded-full bg-neutral-300 blur-[180px] opacity-50 sm:block" />

      <div
        className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-col gap-10 px-5 pb-10 sm:min-h-screen sm:min-h-[100svh] sm:justify-between sm:gap-0 sm:px-8 sm:pb-8 lg:px-14"
        style={{ paddingTop: "calc(var(--navbar-height, 4rem) + 1rem)" }}
      >

        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[10px] sm:tracking-[0.4em]">
              Available For Work
            </p>
            <p className="mt-1.5 text-xs text-neutral-700 sm:mt-2 sm:text-sm">
              Full Stack Developer
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[10px] sm:tracking-[0.4em]">
              Assam, India
            </p>
            <p className="mt-1.5 text-xs text-neutral-700 sm:mt-2 sm:text-sm">
              Open To Opportunities
            </p>
          </div>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col py-2 sm:flex-1 sm:justify-center sm:py-8"
        >
          <h1 className="font-extralight tracking-[-0.06em] sm:tracking-[-0.09em] leading-[0.85] sm:leading-[0.78] text-[16vw] sm:text-[16vw] lg:text-[11rem] xl:text-[13rem] 2xl:text-[16rem] whitespace-nowrap">
            FullStack
          </h1>

          <div className="mt-1 flex flex-col items-start sm:mt-0 sm:flex-row sm:items-end">
            <span className="mb-1 font-serif text-3xl italic text-neutral-500 sm:mb-0 sm:mr-6 sm:text-5xl lg:mr-8 lg:text-6xl">
              "Web"
            </span>

            <h1 className="font-extralight tracking-[-0.06em] sm:tracking-[-0.09em] leading-[0.85] sm:leading-[0.78] text-[16vw] sm:text-[16vw] lg:text-[11rem] xl:text-[13rem] 2xl:text-[16rem] whitespace-nowrap">
              Developer
            </h1>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="h-px w-10 bg-black sm:w-16" />
            <span className="text-[10px] uppercase tracking-[0.35em] sm:text-[11px] sm:tracking-[0.45em]">
              BASTAB SAIKIA
            </span>
          </div>

          <p className="max-w-md text-[10px] uppercase leading-6 tracking-[0.15em] text-neutral-600 sm:text-[11px] sm:leading-7 sm:tracking-[0.2em]">
            Building scalable, efficient and user-focused web applications
            from idea to deployment with clean architecture and meaningful
            user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
