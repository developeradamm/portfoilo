"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Smartphone, Globe } from "lucide-react"
import Image from "next/image"

const techStack = [
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: "▲", color: "from-slate-700 to-slate-900" },
  { name: "React Native", icon: "📱", color: "from-blue-400 to-cyan-500" },
  { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-blue-600" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
  { name: "GraphQL", icon: "◆", color: "from-pink-500 to-purple-600" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-700" },
]

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant web applications with modern frameworks",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating native-like mobile experiences with React Native for iOS and Android",
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "End-to-end application development with seamless API integration",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting scalable database solutions with optimal query performance",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-teal-500/5 to-background -z-10"></div>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Building Digital{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience creating elegant solutions
            to complex problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20">
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a frontend and mobile developer who loves turning ideas into reality
                through clean, efficient code. My journey in tech started with a curiosity
                about how things work, and it has evolved into a passion for creating
                seamless user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React ecosystem technologies and have a strong focus on
                performance optimization, accessibility, and modern design principles.
                Whether it's a responsive web app or a native mobile experience, I bring
                the same dedication to quality and attention to detail.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">5+ years</span> of professional experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">50+ projects</span> delivered successfully
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                <span className="text-muted-foreground">
                  Based in <span className="font-semibold text-foreground">Your Location</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="h-6 w-6 text-teal-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative px-6 py-3 rounded-xl bg-card border border-teal-500/20 hover:border-teal-500/40 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-semibold text-sm">{tech.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
