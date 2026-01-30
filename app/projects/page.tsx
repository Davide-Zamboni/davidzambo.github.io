import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects | Davide Zamboni',
  description: 'Explore projects by Davide Zamboni - from mood-tracking apps to Wi-Fi research tools.',
};

const projects = [
  {
    title: 'JanusLeaf',
    description: 'A mood-tracking journal app with AI-powered sentiment analysis. Write about your day, and AI gives you a score from 1-10 reflecting how positive your day was. Built with Spring Boot, Kotlin, PostgreSQL, and Android.',
    url: 'https://github.com/Davide-Zamboni/JanusLeaf',
    tags: ['Kotlin', 'Spring Boot', 'Android', 'Swift', 'AI', 'PostgreSQL'],
  },
  {
    title: 'CSI Complete Guide',
    description: 'A complete guide for using RT-AC86U routers to generate and collect Channel State Information (CSI) Wi-Fi data in real-time. Includes setup instructions for both transmitter and receiver, along with Docker configuration.',
    url: 'https://github.com/Davide-Zamboni/CSI_Complete_Guide',
    tags: ['C++', 'Shell', 'Wi-Fi', 'Research', 'Docker'],
  },
  {
    title: 'Reverse Polish Notation Calculator',
    description: 'An Assembly language implementation of a Reverse Polish Notation (RPN) calculator. Handles multi-digit integers with signs and all basic arithmetic operations. Bachelor\'s degree project.',
    url: 'https://github.com/Davide-Zamboni/ReversePolishNotationCalculator',
    tags: ['Assembly', 'C', 'Algorithms'],
  },
  {
    title: 'Seasonal Workers',
    description: 'A full-stack Java application with MVC architecture for registering seasonal workers. Developed as part of the Software Engineering exam.',
    url: 'https://github.com/Davide-Zamboni/Seasonal-Workers',
    tags: ['Java', 'MVC', 'Full Stack'],
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <p className={styles.subtitle}>
        A selection of projects I&apos;ve worked on, from mobile apps to research tools.
      </p>
      
      <div className={`${styles.grid} stagger`}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </div>
      
      <div className={styles.more}>
        <p>
          Explore more of my work on{' '}
          <a href="https://github.com/Davide-Zamboni" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
