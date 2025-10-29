export interface Project {
  id: string
  title: string
  category: string
  description: string
  shortDescription: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  fullDescription: string
  techStack: string[]
  challenges: string[]
  outcomes: string[]
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    shortDescription: "A modern, scalable e-commerce platform with real-time inventory management",
    description: "Full-featured e-commerce solution built with Next.js and Stripe integration",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    fullDescription: "A comprehensive e-commerce platform designed for modern retail businesses. The platform features a robust admin dashboard, real-time inventory tracking, secure payment processing via Stripe, and an optimized shopping experience for customers. Built with scalability in mind, it handles thousands of products and concurrent users seamlessly.",
    techStack: ["Next.js 13", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL", "Prisma ORM", "React Query", "Zustand"],
    challenges: [
      "Implementing real-time inventory synchronization across multiple warehouses",
      "Optimizing database queries for large product catalogs (10,000+ items)",
      "Building a secure checkout flow with multiple payment methods",
      "Creating an intuitive admin dashboard for non-technical users"
    ],
    outcomes: [
      "40% increase in conversion rate compared to previous platform",
      "Sub-second page load times with Next.js SSR and caching",
      "Successfully processed over $500K in transactions in first quarter",
      "99.9% uptime with automated monitoring and error tracking"
    ],
    screenshots: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    category: "Mobile Development",
    shortDescription: "Cross-platform mobile app for tracking workouts and nutrition with AI insights",
    description: "React Native app with workout tracking, nutrition logging, and personalized recommendations",
    image: "https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React Native", "TypeScript", "Firebase", "AI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    fullDescription: "A comprehensive fitness and nutrition tracking application that helps users achieve their health goals. The app features workout logging, nutrition tracking, progress visualization, and AI-powered recommendations. With offline-first architecture, users can track their activities anywhere, anytime.",
    techStack: ["React Native", "TypeScript", "Expo", "Firebase", "React Query", "Zustand", "Victory Charts", "Reanimated"],
    challenges: [
      "Implementing offline-first architecture with data synchronization",
      "Creating smooth animations for workout transitions and charts",
      "Integrating with Apple Health and Google Fit APIs",
      "Building an accurate calorie and macro calculator"
    ],
    outcomes: [
      "10,000+ downloads in first month across iOS and Android",
      "4.8-star rating on both App Store and Google Play",
      "Average user retention rate of 65% after 30 days",
      "Featured on App Store in 'Health & Fitness' category"
    ],
    screenshots: [
      "https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Web Development",
    shortDescription: "Real-time analytics dashboard for SaaS businesses with custom reporting",
    description: "Comprehensive dashboard with data visualization, custom reports, and team collaboration",
    image: "https://images.pexels.com/photos/7681670/pexels-photo-7681670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "TypeScript", "D3.js", "WebSocket"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    fullDescription: "An enterprise-grade analytics dashboard built for SaaS companies to monitor key metrics, generate custom reports, and collaborate with team members. Features real-time data updates via WebSockets, interactive charts, and role-based access control.",
    techStack: ["React", "TypeScript", "Vite", "TanStack Query", "D3.js", "Recharts", "WebSocket", "Express.js", "MongoDB"],
    challenges: [
      "Handling real-time data updates for 50+ concurrent metrics",
      "Creating performant, interactive charts with large datasets",
      "Implementing complex role-based permissions system",
      "Building flexible report builder with drag-and-drop interface"
    ],
    outcomes: [
      "Reduced report generation time from hours to minutes",
      "98% customer satisfaction score from user surveys",
      "Increased data-driven decisions by 45% for client teams",
      "Successfully scaled to handle 1M+ data points per dashboard"
    ],
    screenshots: [
      "https://images.pexels.com/photos/7681670/pexels-photo-7681670.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    category: "Mobile Development",
    shortDescription: "Next-generation social networking app with real-time messaging and stories",
    description: "Feature-rich social media platform with posts, stories, messaging, and live streaming",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React Native", "Node.js", "Socket.io", "AWS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    fullDescription: "A modern social media application with all the features users expect: posts, stories, real-time messaging, video calls, and live streaming. Built with a microservices architecture to ensure scalability and reliability.",
    techStack: ["React Native", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Redis", "AWS S3", "WebRTC"],
    challenges: [
      "Implementing real-time messaging with typing indicators and read receipts",
      "Building scalable media upload and streaming infrastructure",
      "Optimizing feed algorithm for personalized content",
      "Creating smooth, performant animations for stories and transitions"
    ],
    outcomes: [
      "50,000+ active users within 3 months of launch",
      "Average session time of 28 minutes per user",
      "Successfully handles 10,000+ concurrent WebSocket connections",
      "Sub-200ms message delivery in real-time chat"
    ],
    screenshots: [
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder Platform",
    category: "Web Development",
    shortDescription: "Drag-and-drop portfolio builder for designers and developers",
    description: "No-code platform for creating stunning portfolio websites with custom domains",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    fullDescription: "An intuitive platform that allows creatives to build beautiful portfolio websites without writing code. Features a drag-and-drop editor, customizable templates, custom domain support, and one-click deployment.",
    techStack: ["Next.js 13", "React", "TypeScript", "Tailwind CSS", "DND Kit", "Vercel", "Supabase", "Stripe"],
    challenges: [
      "Building a flexible, performant drag-and-drop editor",
      "Generating optimized static sites from user designs",
      "Implementing real-time preview with multiple device views",
      "Creating a monetization strategy with tiered pricing"
    ],
    outcomes: [
      "1,000+ portfolios created in beta phase",
      "Average site creation time of 15 minutes",
      "30% conversion rate from free to paid plans",
      "95% of users reported satisfaction with ease of use"
    ],
    screenshots: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    id: "task-management",
    title: "Task Management System",
    category: "Web Development",
    shortDescription: "Collaborative task management tool with Kanban boards and time tracking",
    description: "All-in-one project management solution for teams with boards, timelines, and reports",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "TypeScript", "GraphQL", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    fullDescription: "A comprehensive task management system designed for agile teams. Features include Kanban boards, Gantt charts, time tracking, team collaboration, file attachments, and detailed analytics. Perfect for teams of any size.",
    techStack: ["React", "TypeScript", "GraphQL", "Apollo Client", "Node.js", "MongoDB", "Redis", "AWS"],
    challenges: [
      "Implementing real-time collaboration with conflict resolution",
      "Building performant drag-and-drop for large boards (1000+ tasks)",
      "Creating flexible permissions system for organizations",
      "Optimizing GraphQL queries to reduce over-fetching"
    ],
    outcomes: [
      "Used by 200+ companies for team project management",
      "Average team productivity increase of 35%",
      "99.95% uptime over 12 months",
      "Processing 50,000+ task updates per day"
    ],
    screenshots: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5053850/pexels-photo-5053850.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  }
]
