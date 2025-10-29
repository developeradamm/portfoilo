"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Leading the development of modern web applications using React and Next.js. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 2,
    company: "Digital Solutions Co.",
    position: "Frontend Developer",
    location: "Austin, TX",
    duration: "2020 - 2022",
    description: "Developed responsive web applications and mobile apps using React Native. Collaborated with design teams to create intuitive user interfaces and seamless user experiences.",
    achievements: [
      "Built 15+ client projects",
      "Introduced TypeScript to the codebase",
      "Reduced bug reports by 30%",
    ],
  },
  {
    id: 3,
    company: "Creative Agency",
    position: "Junior Developer",
    location: "Remote",
    duration: "2019 - 2020",
    description: "Worked on various client projects, focusing on frontend development and learning modern web technologies. Contributed to open-source projects and participated in code reviews.",
    achievements: [
      "Completed 20+ projects successfully",
      "Gained expertise in React ecosystem",
      "Improved CSS and design skills",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut" as any,
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
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0 hidden md:block overflow-hidden">
            <motion.div
              variants={lineVariants}
              className="w-full bg-gradient-to-b from-teal-500 to-cyan-500"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="md:pl-20">
                  <motion.div
                    className="absolute left-5 top-6 w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 border-4 border-background hidden md:flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Briefcase className="w-3 h-3 text-white" />
                  </motion.div>

                  <motion.div
                    className="group relative"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                    <div className="relative bg-card border border-border hover:border-teal-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{experience.position}</h3>
                          <h4 className="text-xl text-teal-500 font-semibold mb-3">
                            {experience.company}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-teal-500" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-teal-500" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm text-teal-500">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/40"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/resume.pdf'
              link.download = 'resume.pdf'
              link.click()
            }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
