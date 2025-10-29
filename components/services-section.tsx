"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Smartphone, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building scalable and performant web applications with React and Next.js",
    features: ["Server-Side Rendering", "Static Site Generation", "Progressive Web Apps", "Responsive Design"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Creating native-like mobile experiences with React Native for iOS and Android",
    features: ["Cross-Platform Apps", "Native Modules", "Push Notifications", "Offline Capability"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "UI Development & Design",
    description: "Crafting beautiful, intuitive user interfaces with modern design principles",
    features: ["Component Libraries", "Design Systems", "Animation & Motion", "Accessibility"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "API Integration & Performance",
    description: "Optimizing applications for speed and seamless third-party integrations",
    features: ["RESTful APIs", "GraphQL", "Performance Tuning", "Caching Strategies"],
    color: "from-indigo-500 to-teal-500",
  },
]

export function ServicesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Services &{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Delivering end-to-end development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border group-hover:border-transparent transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-teal-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
