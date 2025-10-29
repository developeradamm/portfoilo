"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    avatar: "👩‍💼",
    content: "Working with this developer was an absolute pleasure. They delivered our mobile app ahead of schedule and the quality exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager at InnovateCo",
    avatar: "👨‍💻",
    content: "Exceptional attention to detail and a deep understanding of modern web technologies. The project was completed flawlessly with great communication throughout.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    position: "Founder at DesignHub",
    avatar: "👩‍🎨",
    content: "Their ability to transform our design concepts into a beautiful, functional website was impressive. The performance optimizations made a huge difference.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "CTO at StartupVentures",
    avatar: "👨‍💼",
    content: "A true professional who brings creative solutions to complex problems. The React Native app they built has been incredibly stable and our users love it.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background -z-10"></div>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            What{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Feedback from amazing people I've had the pleasure to work with
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-card border border-teal-500/20 rounded-3xl p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center text-5xl border-2 border-teal-500/30">
                        {testimonials[currentIndex].avatar}
                      </div>
                    </motion.div>

                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-teal-500 text-teal-500" />
                        </motion.div>
                      ))}
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-1"
                    >
                      <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].position}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="rounded-full border-teal-500/30 hover:border-teal-500/50 hover:bg-teal-500/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-teal-500 to-cyan-500"
                        : "w-2 bg-teal-500/30 hover:bg-teal-500/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="rounded-full border-teal-500/30 hover:border-teal-500/50 hover:bg-teal-500/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
