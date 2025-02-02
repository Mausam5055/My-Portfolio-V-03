import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Terminal, Figma, Github as Git, Globe, Server, Layout, Cpu, Cloud, Settings, Smartphone, Shield, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Skill } from '../types';

const skills: Skill[] = [
  {
    name: "React",
    icon: "Code2",
    category: "frontend",
    level: "expert",
    description: "Building modern web applications with React and its ecosystem"
  },
  {
    name: "UI/UX Design",
    icon: "Palette",
    category: "design",
    level: "advanced",
    description: "Creating intuitive and beautiful user interfaces"
  },
  {
    name: "Node.js",
    icon: "Server",
    category: "backend",
    level: "expert",
    description: "Server-side development with Node.js"
  },
  {
    name: "TypeScript",
    icon: "Code2",
    category: "frontend",
    level: "expert",
    description: "Type-safe JavaScript development"
  },
  {
    name: "Cloud Services",
    icon: "Cloud",
    category: "backend",
    level: "advanced",
    description: "AWS, Google Cloud, and Azure services"
  },
  {
    name: "DevOps",
    icon: "Settings",
    category: "tools",
    level: "intermediate",
    description: "CI/CD, Docker, and Kubernetes"
  },
  {
    name: "Mobile Development",
    icon: "Smartphone",
    category: "frontend",
    level: "advanced",
    description: "React Native and mobile-first design"
  },
  {
    name: "Database Design",
    icon: "Database",
    category: "backend",
    level: "expert",
    description: "SQL and NoSQL database architecture"
  },
  {
    name: "Security",
    icon: "Shield",
    category: "tools",
    level: "intermediate",
    description: "Web security and best practices"
  },
  {
    name: "Performance",
    icon: "Zap",
    category: "frontend",
    level: "advanced",
    description: "Web performance optimization"
  }
];

const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    Code2, Palette, Database, Terminal, Figma, Git,
    Globe, Server, Layout, Cpu, Cloud, Settings,
    Smartphone, Shield, Zap
  };
  return icons[iconName] || Code2;
};

const levelColors = {
  beginner: "from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 text-green-700 dark:text-green-300",
  intermediate: "from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-300",
  advanced: "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 text-purple-700 dark:text-purple-300",
  expert: "from-pink-100 to-pink-200 dark:from-pink-900/50 dark:to-pink-800/50 text-pink-700 dark:text-pink-300"
};

export const Skills: React.FC = () => {
  return (
    <section 
    id="about" 
    className="py-20 relative overflow-hidden bg-[#fffbe6] dark:bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#1e293b_100%)]"
  >
      <div className="container mx-auto px-4">
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center space-y-4"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-black dark:text-white" // Set to black in light mode and white in dark mode
              >
                Technical Expertise
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "180px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"
              />
            </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className={cn(
                  "group relative bg-white dark:bg-gray-900",
                  "rounded-2xl p-6",
                  "shadow-xl hover:shadow-2xl",
                  "transform transition-all duration-300",
                  "border-2 border-transparent hover:border-green-500/20 dark:hover:border-green-400/30",
                  "before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/10 before:to-pink-500/10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                )}
              >
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={cn(
                        "w-16 h-16 rounded-2xl",
                        "bg-gradient-to-br from-green-100 to-pink-100 dark:from-gray-800 dark:to-gray-700",
                        "flex items-center justify-center",
                        "shadow-lg border-2 border-white/10",
                        "transition-transform duration-200"
                      )}
                    >
                      <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {skill.name}
                    </h3>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium",
                        "bg-gradient-to-r", levelColors[skill.level],
                        "shadow-inner"
                      )}
                    >
                      {skill.level}
                    </motion.span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className={cn(
                      "absolute inset-0 rounded-2xl p-6",
                      "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm",
                      "flex items-center justify-center text-center",
                      "transition-all duration-300"
                    )}
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -inset-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="animate-shine w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(15deg); }
          100% { transform: translateX(100%) rotate(15deg); }
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}</style>
    </section>
  );
};