'use client';

import { motion } from "framer-motion"
import {
  Smartphone,
  Users,
  Palette,
  GitBranch,
  Database,
  Code2,
  type LucideIcon,
} from "lucide-react"

// Import colorful brand icons
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiGit,
  SiGithub,
  SiMysql,
  SiMongodb,
} from "react-icons/si"
import {
  IoNavigate,
  IoNotifications,
  IoChatbubbles,
  IoShieldCheckmark,
  IoGitBranch,
  IoTime,
  IoBulb,
  IoFlag,
  IoChatbox,
  IoBug,
} from "react-icons/io5"
import {
  MdDevices,
  MdApi,
} from "react-icons/md"
import { BiCodeBlock } from "react-icons/bi"
import { VscCode } from "react-icons/vsc"
import type { IconType } from "react-icons"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "React Navigation", icon: IoNavigate, color: "#61DAFB" },
      { name: "Push Notifications", icon: IoNotifications, color: "#FF6B6B" },
      { name: "Firebase Chat", icon: IoChatbubbles, color: "#FFCA28" },
    ],
  },
  {
    title: "Languages & Frontend",
    icon: Code2,
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Google Authentication", icon: IoShieldCheckmark, color: "#4285F4" },
      { name: "REST API Integration", icon: MdApi, color: "#00D9FF" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "State Management",
    icon: Palette,
    skills: [
      { name: "React Hooks", icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "useState", icon: BiCodeBlock, color: "#61DAFB" },
      { name: "Context API", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Responsive Design", icon: MdDevices, color: "#00C853" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Time Management", icon: IoTime, color: "#FF6B6B" },
      { name: "Problem-Solving", icon: IoBulb, color: "#FFD93D" },
      { name: "Agile Workflow", icon: IoFlag, color: "#6BCF7F" },
      { name: "Communication", icon: IoChatbox, color: "#4ECDC4" },
      { name: "Testing & Debugging", icon: IoBug, color: "#FF6B6B" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.h2
        className="text-sm font-semibold uppercase tracking-widest text-primary mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="group p-5 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                {category.icon && <category.icon className="w-4 h-4" />}
              </div>
              <h3 className="font-medium text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1.5"
                >
                  <skill.icon className="w-3 h-3" style={{ color: skill.color }} />
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
