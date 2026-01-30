import SocialLinks from '@/components/SocialLinks';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Davide Zamboni',
  description: 'Learn more about Davide Zamboni - Senior Software Engineer at Klarna, based in Milan, Italy.',
};

export default function About() {
  return (
    <section className={styles.about}>
      <h1>About</h1>
      
      <div className={styles.content}>
        <h2>Background</h2>
        <p>
          I&apos;m a Senior Software Engineer at{' '}
          <a href="https://www.klarna.com" target="_blank" rel="noopener noreferrer">
            Klarna
          </a>
          , one of the world&apos;s leading fintech companies. I work on building scalable 
          and reliable systems that power financial services for millions of users.
        </p>
        
        <p>
          I hold a degree in Computer Science from the University of Verona, where I was 
          part of the{' '}
          <a href="https://cisd.di.univr.it/" target="_blank" rel="noopener noreferrer">
            Cyber-Physical & IoT System Design (CISD)
          </a>
          {' '}research group. I developed a strong foundation in algorithms, data structures, 
          and software engineering principles.
        </p>
        
        <h2>Skills & Interests</h2>
        <p>
          Throughout my career, I have developed expertise in:
        </p>
        <ul className={styles.list}>
          <li>Backend development and distributed systems</li>
          <li>Software architecture and system design</li>
          <li>Machine learning and data analysis</li>
          <li>Mobile application development</li>
          <li>DevOps and cloud infrastructure</li>
        </ul>
        
        <p>
          I&apos;m continuously learning and exploring new technologies. I believe in writing 
          clean, maintainable code and building systems that are both performant and reliable.
        </p>
        
        <h2>Research & Publications</h2>
        <p>
          I have contributed to academic research during my time at the university. 
          You can find my publications on{' '}
          <a href="https://scholar.google.com/citations?hl=en&user=0obyHNoAAAAJ" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>
          .
        </p>
        
        <h2>Beyond Code</h2>
        <p>
          When I&apos;m not coding, I enjoy exploring personal finance, working on self-development, 
          and playing videogames.
        </p>
        
        <h2>Get in Touch</h2>
        <p>
          I&apos;m always happy to connect with fellow developers, researchers, or anyone 
          interested in technology. Feel free to reach out!
        </p>
      </div>
      
      <SocialLinks />
    </section>
  );
}
