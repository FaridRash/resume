'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',    label: 'About'    },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills'   },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoBracket}>[</span>
          FAR
          <span className={styles.logoBracket}>]</span>
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${styles.link} ${active === l.href ? styles.activeLink : ''}`}
                onClick={() => setActive(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/cv.pdf"
          download
          className={styles.cvBtn}
        >
          Download CV
        </a>
      </div>
    </nav>
  )
}
