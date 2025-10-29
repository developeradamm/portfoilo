"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2 } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function Navbar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(15, 23, 42, 0.8)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  )

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">Portfolio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-6"
          >
            <a href="/#home" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Home
            </a>
            <a href="/#about" className="text-sm font-medium hover:text-teal-500 transition-colors">
              About
            </a>
            <a href="/#services" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Services
            </a>
            <a href="/#projects" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Projects
            </a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Testimonials
            </a>
            <a href="/#experience" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Experience
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
            <Button
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
