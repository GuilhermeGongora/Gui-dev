import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";

import { motion } from "framer-motion";

// Lista de habilidades com ícones e nomes
const skills = [
  {
    id: "react",
    icon: <FaReact size={70} className="text-blue-400" />,
    description: "React",
  },
  {
    id: "javascript",
    icon: <FaJs size={70} className="text-yellow-400" />,
    description: "JavaScript",
  },
  {
    id: "typescript",
    icon: <SiTypescript size={70} className="text-blue-500" />,
    description: "TypeScript",
  },
  {
    id: "docker",
    icon: <FaDocker size={70} className="text-blue-500" />,
    description: "Docker",
  },
  {
    id: "python",
    icon: <SiPython size={70} className="text-yellow-300" />,
    description: "Python",
  },
  {
    id: "jest",
    icon: <SiJest size={70} className="text-red-500" />,
    description: "Jest",
  },
  {
    id: "nodejs",
    icon: <FaNodeJs size={70} className="text-green-500" />,
    description: "Node.js",
  },
  {
    id: "nextjs",
    icon: <SiNextdotjs size={70} className="text-white" />,
    description: "Next.js",
  },
  {
    id: "html5",
    icon: <FaHtml5 size={70} className="text-orange-500" />,
    description: "HTML5",
  },
  {
    id: "css3",
    icon: <FaCss3Alt size={70} className="text-blue-400" />,
    description: "CSS3",
  },
  {
    id: "postgresql",
    icon: <SiPostgresql size={70} className="text-blue-500" />,
    description: "PostgreSQL",
  },
  {
    id: "tailwind",
    icon: <SiTailwindcss size={70} className="text-cyan-400" />,
    description: "Tailwind CSS",
  },
  {
    id: "git",
    icon: <FaGitAlt size={70} className="text-orange-500" />,
    description: "Git",
  },
  {
    id: "github",
    icon: <FaGithub size={70} className="text-white" />,
    description: "GitHub",
  },
];

// Exibição dos cards
export default function Skills() {
  return (
    <section className="flex flex-col bg-black text-white px-4 py-10">
      <motion.h1
        className="text-center text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        print(Habilidades)
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-gray-800 w-24 h-28 rounded-xl shadow-xl border border-slate-600 flex flex-col items-center justify-center"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0px 15px 20px rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            {skill.icon}
            <p className="text-xs text-center text-light-secondary dark:text-dark-primary mt-2">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
