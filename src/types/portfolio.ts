export interface Developer {
  name: string;
  title: string;
  description: string;
  image: string;
  email: string;
  location: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'backend';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stats {
  projectsCompleted: number;
  yearsExperience: number;
  clientsSatisfied: number;
  technologiesMastered: number;
}