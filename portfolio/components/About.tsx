import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <p className="section-label">01 / about</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="divider" />

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              I&apos;m an engineer working at the intersection of <strong>deep learning</strong>,{' '}
              <strong>computer vision</strong>, and <strong>space systems</strong>. My work spans
              medical imaging, radio astronomy, and satellite payload design — I build end-to-end
              pipelines from raw sensor data to trained models and deployed systems.
            </p>
            <p>
              Currently serving as <strong>Payload Supervisor</strong> on the{' '}
              <strong>IGNIS CubeSat project</strong>, developing thermal infrared imaging systems
              for volcano monitoring from orbit. Alongside that, I work on deep learning models
              for brain CT hemorrhage segmentation and morphological classification of radio galaxies.
            </p>
            <p>
              My background includes 7 years as a Data Recovery Engineer — which trained me to work
              methodically under uncertainty, analyze system-level failures, and care deeply about
              data integrity. I bring that discipline to every ML pipeline I build.
            </p>

            <div className={styles.stats}>
              {[
                { value: '7+', label: 'Years Engineering' },
                { value: '3',  label: 'Active Projects'   },
                { value: '18K', label: 'Galaxy Images Classified' },
              ].map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <span className={styles.dot} />
                Focus Areas
              </h3>
              <ul className={styles.infoList}>
                {[
                  'Medical Image Segmentation',
                  'Satellite Payload Engineering',
                  'Radio Astronomy (CNN)',
                  'Thermal IR Sensor Modelling',
                  'Optical System Design (Zemax)',
                  'Reinforcement Learning',
                ].map(item => (
                  <li key={item}>
                    <span className={styles.arrow}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <span className={styles.dot} />
                Currently Learning
              </h3>
              <ul className={styles.infoList}>
                {[
                  'Advanced CNN architectures',
                  'Zemax optical workflows',
                  'Statistical IR remote sensing',
                  'End-to-end payload modelling',
                ].map(item => (
                  <li key={item}>
                    <span className={styles.arrow}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
