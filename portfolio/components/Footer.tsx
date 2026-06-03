import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <span className={styles.bracket}>[</span>FAR<span className={styles.bracket}>]</span>
        </span>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Ali Rashidi
        </p>
        <p className={styles.built}>
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
