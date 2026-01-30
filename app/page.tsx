import SocialLinks from '@/components/SocialLinks';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.greeting}>Hi!</h1>
      
      <div className={styles.intro}>
        <p>
          I&apos;m <strong>Davide</strong>, a Senior Software Engineer at{' '}
          <a href="https://www.klarna.com" target="_blank" rel="noopener noreferrer">
            Klarna
          </a>
          .
        </p>
        
        <p>
          I specialize in backend development, building scalable microservices and 
          cloud infrastructure. I&apos;m passionate about writing clean code and 
          delivering value-driven solutions.
        </p>
        
        <p>
          Previously, I studied at the University of Verona, where I was part of the{' '}
          <a href="https://cisd.di.univr.it/" target="_blank" rel="noopener noreferrer">
            Cyber-Physical & IoT System Design (CISD)
          </a>
          {' '}research group.
        </p>
        
        <p>
          Feel free to explore my{' '}
          <a href="/projects/">projects</a>
          {' '}or learn more{' '}
          <a href="/about/">about me</a>.
        </p>
      </div>
      
      <SocialLinks />
    </section>
  );
}
