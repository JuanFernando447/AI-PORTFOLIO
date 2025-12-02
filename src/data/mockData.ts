import { Developer, Project, Skill, Service, Stats } from '../types/portfolio';
import juanferImage from '../assets/Juanfer.jpg';

export const developerData: Developer = {
  name: "Juan Pertuz",
  title: "Full-Stack AI Developer",
  description: "Passionate junior developer with a keen eye for detail and a love for creating seamless user experiences. Specialized in React, Node.js, and modern web technologies.",
  image: juanferImage,
  email: "juanfernandopertuz@gmail.com",
  location: "Barranquilla, Co",
  phone: "+57 315 0602677",
  social: {
    github: "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    twitter: "https://twitter.com/alexrivera"
  }
};

export const statsData: Stats = {
  projectsCompleted: 25,
  yearsExperience: 2,
  clientsSatisfied: 15,
  technologiesMastered: 12
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment integration.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/alexrivera/ecommerce-platform",
    category: "fullstack"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/alexrivera/task-manager",
    category: "frontend"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, charts, and customizable widgets.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/alexrivera/weather-dashboard",
    category: "frontend"
  },
  {
    id: "4",
    title: "Social Media API",
    description: "RESTful API for social media platform with user authentication, post management, and real-time messaging.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    githubUrl: "https://github.com/alexrivera/social-api",
    category: "backend"
  }
];

export const skillsData: Skill[] = [
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "TailwindCSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 78, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "Figma", level: 70, category: "design" }
];

export const servicesData: Service[] = [
  {
    id: "1",
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces using modern frameworks and best practices.",
    icon: "Code",
    features: [
      "React & Vue.js Development",
      "Responsive Web Design",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ]
  },
  {
    id: "2",
    title: "Backend Development",
    description: "Building robust server-side applications and APIs with secure authentication and data management.",
    icon: "Server",
    features: [
      "RESTful API Development",
      "Database Design & Management",
      "Authentication & Authorization",
      "Third-party Integrations"
    ]
  },
  {
    id: "3",
    title: "Full-Stack Solutions",
    description: "End-to-end web application development from concept to deployment with modern technologies.",
    icon: "Layers",
    features: [
      "Complete Web Applications",
      "Database Architecture",
      "Cloud Deployment",
      "Maintenance & Support"
    ]
  }
];