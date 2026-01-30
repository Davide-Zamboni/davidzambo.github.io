'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          davide zamboni
        </Link>
        <div className={styles.links}>
          {navItems.map((item, index) => (
            <span key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${
                  pathname === item.href ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className={styles.separator}>·</span>
              )}
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
