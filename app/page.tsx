import SocialLinks from '@/components/SocialLinks';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={`${styles.hero} stagger`}>
      <h1 className={styles.greeting}>Hi!</h1>
      
      <p>
        I&apos;m <strong>Davide</strong>, an Italian Software Engineer currently working at <span style={{whiteSpace: 'nowrap'}}><a href="https://www.klarna.com" target="_blank" rel="noopener noreferrer">Klarna</a>.</span>
      </p>
      
      <p>
        I&apos;ve been lucky enough to work for some of the most innovative fintech companies in Europe, like <a href="https://www.satispay.com" target="_blank" rel="noopener noreferrer">Satispay</a> and <a href="https://www.klarna.com" target="_blank" rel="noopener noreferrer">Klarna</a>. I love building backend systems, designing APIs, and figuring out how to make things scale.
      </p>
      
      <p>
        Feel free to read <a href="/about/">about me</a> or check out my <a href="/projects/">projects</a>.
      </p>
      
      <SocialLinks />
    </section>
  );
}
