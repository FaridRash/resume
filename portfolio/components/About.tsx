import Image from 'next/image'
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

            {/* ── PHOTO ── */}
            <div className={styles.photoWrapper}>
              <Image
                src="/profile.jpg"
                alt="Ali Rashidi"
                width={260}
                height={320}
                className={styles.photo}
                priority
              />
            </div>

            <p>
              I&apos;m a Computer Vision and Deep Learning Engineer with hands-on experience
              designing, training, and deploying end-to-end CV pipelines across{' '}
              <strong>medical imaging</strong>, <strong>Earth Observation</strong>, and{' '}
              <strong>astronomical data</strong>.
            </p>
            <p>
              Currently serving as <strong>Payload Supervisor</strong> on the{' '}
              <strong>IGNIS CubeSat mission</strong> at the University of Naples Federico II —
              leading thermal-infrared imaging performance and Signal-to-Noise Ratio (SNR)
              modelling for an Earth observation payload using the FLIR Boson+ 640 and RHP
              CameraLink module.
            </p>
            <p>
              Skilled in CNNs, Transformers, YOLO, and U-Net architectures for object detection,
              semantic segmentation, image classification, and anomaly detection, with proven
              experience packaging deep learning models as Dockerized REST inference services on GCP.
            </p>

            <div className={styles.stats}>
              {[
                { value: '7+',  label: 'Years Engineering' },
                { value: '3',   label: 'Active Projects'   },
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
                  'Earth Observation (CubeSat)',
                  'Thermal IR Sensor Modelling',
                  'Radio Astronomy (CNN)',
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
                Languages
              </h3>
              <ul className={styles.infoList}>
                {[
                  'English — C1',
                  'Italian  — A2',
                  'German  — A1',
                  'Persian  — Native',
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
