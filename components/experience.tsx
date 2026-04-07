'use client';

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  logo?: string
  description: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Feb 2026 — Present",
    title: "Assoc. Full Stack Developer",
    company: "Proxima AI",
    logo: "/proxima.jpeg",
    description:
      "Architected and developed a comprehensive mobile application from scratch, enabling seamless employee attendance tracking. Designed and implemented robust RESTful APIs utilizing Node.js and Express.js, while using a MySQL database for the secure storage and management of all employee records and attendance data. Demonstrated full-stack capability by also developing the CMI web application, where I overhauled the UI/UX and built a fully functional administrative dashboard. Integrated Chart.js to incorporate dynamic, interactive data visualizations for advanced analytics.",
    technologies: ["React Native", "Node.js", "Express.js", "MySQL", "Chart.js"],
  },
  {
    period: "Jul 2025 — Nov 2025",
    title: "Front-End Developer (Intern)",
    company: "Fortify",
    logo: "/fortify.jpeg",
    description:
      "Developed and optimized mobile application UI screens, ensuring a seamless and user-friendly experience. Identified and resolved application errors and bugs, improving overall stability and performance. Integrated Google Ads API via OAuth2.0 for automated ad account access, campaign management, and token lifecycle handling. Implemented secure access token exchange, webhook subscriptions, and token storage logic for seamless ad performance data retrieval.",
    technologies: ["React Native", "Google Ads API", "OAuth2.0", "Webhooks"],
  },
  {
    period: "Jun 2024 — Dec 2024",
    title: "React Native Developer (Intern)",
    company: "360XpertSolutions",
    logo: "/360xpert.jpeg",
    description:
      "Reviewed and debugged the complete codebase for Deen App (1M+ users), resolving critical bugs to enhance performance and stability. Designed and developed an intuitive UI for E-Invoice, ensuring a seamless user experience aligned with modern design standards. Optimized app functionality and ensured cross-platform compatibility for mobile applications on iOS and Android.",
    technologies: ["React Native", "Firebase", "Redux", "React Navigation"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.h2
        className="text-sm uppercase tracking-widest text-primary mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-8 h-px bg-primary" />
        Experience
      </motion.h2>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            variants={itemVariants}
          >
            <div className="text-sm text-muted-foreground">{exp.period}</div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-foreground font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-base sm:text-lg">{exp.title}</span>
                  <span className="text-muted-foreground mx-1 hidden sm:inline">•</span>
                  <span className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 text-base sm:text-lg font-semibold"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ) : (
                      <span className="text-primary text-base sm:text-lg font-semibold">{exp.company}</span>
                    )}
                    {exp.logo && (
                      <span
                        className={`relative rounded-xl overflow-hidden shrink-0 block ${
                          exp.company.includes('Proxima')
                            ? 'w-24 h-24 sm:w-28 sm:h-28'
                            : 'w-24 h-16 sm:w-28 sm:h-16'
                        }`}
                      >
                        <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain" />
                      </span>
                    )}
                  </span>
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-0 hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
