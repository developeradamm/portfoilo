"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Button } from "./ui/button"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Web Development", "Mobile Development"]
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter)

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
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A selection of my recent work across web and mobile platforms
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`
                ${filter === category
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                  : "border-teal-500/20 hover:border-teal-500/40 hover:bg-teal-500/5"
                }
                transition-all duration-300
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-teal-500/40 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-teal-500/10 to-cyan-500/10">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-lg">
                            <ExternalLink className="h-5 w-5 text-white" />
                          </div>
                        )}
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-lg">
                          <ArrowUpRight className="h-5 w-5 text-foreground" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold group-hover:text-teal-500 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-500 border border-teal-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-sm font-medium text-teal-500">
                      View Details
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
