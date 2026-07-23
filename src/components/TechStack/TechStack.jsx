import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

import skills from "../../data/skills";

const sections = [
  {
    title: "Frontend Development",
    icon: FaCode,
    items: skills.frontend,
  },
  {
    title: "Backend Development",
    icon: FaServer,
    items: skills.backend,
  },
  {
    title: "Database",
    icon: FaDatabase,
    items: skills.database,
  },
  {
    title: "Deployment",
    icon: FaCloud,
    items: skills.deployment || [],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    items: skills.tools,
  },
];

export default function TechStack() {
  const [open, setOpen] = useState(0);

  return (
    <section id="techstack" aria-labelledby="techstack-heading" className="relative w-full bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_45%)] px-4 sm:px-6 md:px-8 lg:px-16 pt-12 md:pt-16 pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="h-px w-10 bg-neutral-900"></div>

            <p className="text-base md:text-lg font-medium tracking-tight text-neutral-600">
              What I Am Good At
            </p>
          </div>

          <h2 id="techstack-heading" className="mt-5 max-w-4xl text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.92] tracking-[-0.05em] text-black">
            Skills & Interests.
          </h2>
        </div>

        {/* Accordion */}

        <div className="w-full">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div key={section.title} className="border-b border-neutral-200">
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex h-[72px] md:h-[80px] w-full items-center justify-between px-0"
                  aria-expanded={open === index}
                  aria-controls={`section-${index}`}
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-lg bg-black text-white">
                      <Icon className="text-base" aria-hidden="true" />
                    </div>

                    <h3 className="text-xl md:text-[22px] lg:text-[24px] font-semibold tracking-[-0.02em] text-black">
                      {section.title}
                    </h3>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-3 text-sm md:text-[15px] text-neutral-900 font-extralight">
                    <span className="hidden sm:inline">Expand</span>
                    {open === index ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
                  </div>
                </button>{" "}
                {open === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-8 md:pb-10"
                    id={`section-${index}`}
                  >
                    <div className="pl-14 md:pl-16 lg:pl-[64px]">
                      <ul className="space-y-4 md:space-y-5">
                        {section.items.map((skill) => (
                          <li
                            key={skill.name}
                            className="flex items-center justify-between max-w-full sm:max-w-md text-lg text-neutral-700"
                          >
                            <span>{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
