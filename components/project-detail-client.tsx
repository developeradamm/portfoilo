"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Project } from "@/lib/projects-data"
import { Button } from "./ui/button"
import { Navbar } from "./navbar"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-teal-500 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="space-y-6 mb-12">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-teal-500/10 text-teal-500 border border-teal-500/20">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {project.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-teal-500/20 hover:border-teal-500/40 hover:bg-teal-500/5"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
                <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
                  <div className="relative aspect-video bg-gradient-to-br from-teal-500/10 to-cyan-500/10">
                    <motion.img
                      key={currentImageIndex}
                      src={project.screenshots[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-teal-500 hover:border-teal-500 transition-all flex items-center justify-center group/btn"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6 group-hover/btn:text-white transition-colors" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-teal-500 hover:border-teal-500 transition-all flex items-center justify-center group/btn"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6 group-hover/btn:text-white transition-colors" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-teal-500 w-8"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 p-4 bg-secondary/50">
                    {project.screenshots.map((screenshot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-teal-500"
                            : "border-transparent hover:border-teal-500/50"
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6">Overview</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-6">Challenges</h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-teal-500/40 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {challenge}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-6">Outcomes</h2>
                  <div className="space-y-4">
                    {project.outcomes.map((outcome, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4 items-start"
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {outcome}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <div className="sticky top-24">
                  <section className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-teal-500/10 text-teal-500 border border-teal-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="p-6 rounded-2xl bg-card border border-border mt-6">
                    <h3 className="text-xl font-bold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
