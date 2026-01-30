import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags?: string[];
}

export default function ProjectCard({ title, description, url, tags }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </a>
  );
}
