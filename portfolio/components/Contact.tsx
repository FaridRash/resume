import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <p className="section-label">04 / contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <div className="divider" />

        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.intro}>
              I&apos;m open to collaboration on computer vision, medical imaging,
              radio astronomy, satellite payload engineering, and deep learning research.
              If you&apos;re working on something interesting — reach out.
            </p>

            <div className={styles.links}>
              <a
                href="mailto:farid.rash@gmail.com"
                className={styles.link}
              >
                <span className={styles.linkIcon}>✉</span>
                <div>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkValue}>farid.rash@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/faridrash/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>in</span>
                <div>
                  <span className={styles.linkLabel}>LinkedIn</span>
                  <span className={styles.linkValue}>linkedin.com/in/faridrash</span>
                </div>
              </a>

              <a
                href="https://github.com/FaridRash"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>gh</span>
                <div>
                  <span className={styles.linkLabel}>GitHub</span>
                  <span className={styles.linkValue}>github.com/FaridRash</span>
                </div>
              </a>
            </div>

            <a href="/cv.pdf" download className={styles.cvBtn}>
              <span>↓</span> Download CV
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.terminalTitle}>contact.sh</span>
              </div>
              <div className={styles.terminalBody}>
                <p><span className={styles.prompt}>$</span> cat about.txt</p>
                <p className={styles.out}>Name: Seyed Ali Rashidi (Farid)</p>
                <p className={styles.out}>Location: Italy</p>
                <p className={styles.out}>Role: CV & ML Engineer</p>
                <p className={styles.out}>Status: <span className={styles.green}>Open to collaboration</span></p>
                <br />
                <p><span className={styles.prompt}>$</span> cat interests.txt</p>
                <p className={styles.out}>- Satellite payload engineering</p>
                <p className={styles.out}>- Medical image analysis</p>
                <p className={styles.out}>- Radio astronomy ML</p>
                <p className={styles.out}>- Optical system design</p>
                <br />
                <p>
                  <span className={styles.prompt}>$</span>
                  <span className={styles.cursor}>_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
