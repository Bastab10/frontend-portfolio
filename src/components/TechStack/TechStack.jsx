import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiGithub,
  SiPostman,
 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import skills from "../../data/skills";

const iconMap = {
  React: FaReact,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  TailwindCSS: SiTailwindcss,
  Redux: FaReact,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  "REST APIs": FaNodeJs,
  Authentication: FaNodeJs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Git: FaGitAlt,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
 
};

function SkillCard({ skill, Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group flex h-16 sm:h-20 w-16 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white shadow-md transition-all duration-300 hover:bg-black"
    >
      <div className="flex flex-col items-center">
        <Icon className="text-[20px] sm:text-[24px] text-black group-hover:text-white transition-colors" />
        <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-neutral-700 group-hover:text-white">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools,
  ];

  const rows = [
    allSkills.slice(0, 6),
    allSkills.slice(6, 10),
    allSkills.slice(10, 14),
    allSkills.slice(14),
  ];

  return (
    <section
      id="techstack"
      className="relative min-h-screen bg-white overflow-hidden flex justify-center items-start py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] leading-none tracking-tight">
            <span className="font-extralight text-black">TECH STACK</span>
          </h2>
        </motion.div>

        <div className="w-full flex flex-col items-center gap-6 sm:gap-7">
          {/* Row 1 - 6 items */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-7">
            {rows[0].map((skill, i) => {
              const Icon = iconMap[skill.name] || FaReact;
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  Icon={Icon}
                  index={i}
                />
              );
            })}
          </div>
          
          {/* Row 2 - 4 items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
            {rows[1].map((skill, i) => {
              const Icon = iconMap[skill.name] || FaReact;
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  Icon={Icon}
                  index={i + 6}
                />
              );
            })}
          </div>
          
          {/* Row 3 - 4 items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
            {rows[2].map((skill, i) => {
              const Icon = iconMap[skill.name] || FaReact;
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  Icon={Icon}
                  index={i + 10}
                />
              );
            })}
          </div>
          
          {/* Row 4 - 2 items */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-7">
            {rows[3].map((skill, i) => {
              const Icon = iconMap[skill.name] || FaReact;
              return (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  Icon={Icon}
                  index={i + 12}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
