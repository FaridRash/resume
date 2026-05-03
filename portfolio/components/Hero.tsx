import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glow orb */}
      <div className={styles.orb} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={styles.greeting}>
          <span className={styles.bracket}>//</span> Hello, I&apos;m
        </p>

        <h1 className={styles.name}>
          Seyed Ali<br />
          <span className={styles.nameAccent}>Rashidi</span>
        </h1>

        <div className={styles.roleWrap}>
          <span className={styles.rolePrefix}>~$</span>
          <span className={styles.role}>
            CV &amp; ML Engineer
            <span className={styles.cursor} aria-hidden="true">_</span>
          </span>
        </div>

        <p className={styles.tagline}>
          Building ML systems for{' '}
          <span className={styles.highlight}>space</span>,{' '}
          <span className={styles.highlight}>medicine</span>, and{' '}
          <span className={styles.highlight}>astronomy</span>.
        </p>

        <div className={styles.pills}>
          {['CubeSat Payload', 'Medical Imaging', 'Radio Astronomy', 'Deep Learning', 'Optical Systems'].map(p => (
            <span key={p} className={styles.pill}>{p}</span>
          ))}
        </div>

        <div className={styles.ctas}>
          <a href="#projects" className={styles.ctaPrimary}>View Projects</a>
          <a href="#contact"  className={styles.ctaSecondary}>Get in Touch</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  )
}
