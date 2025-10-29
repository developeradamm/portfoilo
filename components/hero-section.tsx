"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border border-teal-500/20 rounded-full"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 left-10 w-24 h-24 border border-teal-500/20 rounded-lg rotate-45"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">
                Welcome to my portfolio
              </span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
              Frontend & Mobile Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting beautiful, performant, and user-centric digital experiences
              with modern technologies. Specialized in React, Next.js, and React Native.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/40"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-500/20 hover:border-teal-500/40 hover:bg-teal-500/5"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary hover:bg-teal-500/10 border border-teal-500/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary hover:bg-teal-500/10 border border-teal-500/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary hover:bg-teal-500/10 border border-teal-500/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative hidden lg:block"
        >
          <motion.div
            className="relative w-full aspect-square"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-teal-500/20"></div>
            <div className="absolute inset-8 rounded-full border-2 border-teal-500/30 border-dashed"></div>
            <div className="absolute inset-16 rounded-full border-2 border-teal-500/20"></div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-teal-500/40 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-teal-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
