import SocialLinks from '@/components/SocialLinks';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Davide Zamboni',
  description: 'Learn more about Davide Zamboni - Senior Software Engineer at Klarna, based in Milan, Italy.',
};

export default function About() {
  return (
    <section className={`${styles.about} stagger`}>
      <h1>About</h1>
      
      <div className={styles.content}>
        <h2>Background</h2>
        <p>
          I specialize in backend development, with extensive experience in fintech and startup&#8209;like environments.
        </p>
        
        <p>
          I hold a degree in Computer Science from the University of Verona, where I was part of the <a href="https://cisd.di.univr.it/profile/40/" target="_blank" rel="noopener noreferrer">Cyber&#8209;Physical &amp; IoT System Design (CISD)</a> research group, developing IoT systems using Wi&#8209;Fi signals for presence detection.
        </p>
        
        <h2>Skills</h2>
        <ul className={styles.list}>
          <li>Java, Spring Framework, PostgreSQL</li>
          <li>AWS (RDS, DynamoDB, S3, SQS, SNS, Lambda)</li>
          <li>RESTful and event-driven microservices</li>
          <li>CI/CD pipelines and Agile methodologies</li>
          <li>C++, Embedded Systems, IoT</li>
        </ul>
        
        <h2>Research</h2>
        <p>
          Co-authored <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=0obyHNoAAAAJ&citation_for_view=0obyHNoAAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener noreferrer">&quot;Non&#8209;Invasive Monitoring of Alzheimer&apos;s patients through WiFi Channel State Information&quot;</a> (IEEE IWASI 2023), achieving 98% precision in presence detection.
        </p>
        
        <h2>Beyond Code</h2>
        <p>
          When I&apos;m not coding, I enjoy exploring personal finance, working on self&#8209;development, and playing videogames.
        </p>
        
        <h2>Get in Touch</h2>
        <p>
          I&apos;m always happy to connect with fellow developers, researchers, or anyone interested in technology. Feel free to reach out!
        </p>
      </div>
      
      <SocialLinks />
    </section>
  );
}
