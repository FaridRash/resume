import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    title: 'IGNIS CubeSat — Payload Design',
    role: 'Payload Supervisor',
    status: 'Active',
    description:
      'Designing the electro-optical payload for a volcano-monitoring CubeSat using a FLIR Boson 640 microbolometric camera. Work spans thermal IR radiometric modelling (SNR, NETD), optical system simulation in Zemax OpticStudio, and satellite payload hazard analysis.',
    tags: ['Zemax', 'Thermal IR', 'FLIR Boson 640', 'SNR/NETD', 'CubeSat', 'Radiometry'],
    domain: 'Space Systems',
  },
  {
    id: '02',
    title: 'Brain CT Hemorrhage Segmentation',
    role: 'ML Engineer',
    status: 'Active',
    description:
      'U-Net segmentation pipeline for intracranial hemorrhage detection in CT scans. Core challenge is extreme class imbalance — addressed with custom loss functions (focal + Dice), targeted data augmentation, and windowing techniques optimized for CT HU ranges.',
    tags: ['U-Net', 'PyTorch', 'Medical Imaging', 'Segmentation', 'CT', 'Class Imbalance'],
    domain: 'Medical AI',
  },
  {
    id: '03',
    title: 'Radio Galaxy Morphological Classification',
    role: 'CV Engineer',
    status: 'Active',
    description:
      'CNN classifier distinguishing FR0, FRI, and FRII radio galaxy morphologies from 50×50 greyscale images (~18,000 samples). Best model: plain CNN at train 87% / test 83%, outperforming ResNet and Optuna-tuned variants. Symmetry feature integration ongoing.',
    tags: ['CNN', 'PyTorch', 'Radio Astronomy', 'Image Classification', 'Optuna', 'ResNet'],
    domain: 'Astronomy',
  },
  {
    id: '04',
    title: 'Forex RL Trading Agent',
    role: 'RL Engineer',
    status: 'Experimental',
    description:
      'DQN-based reinforcement learning agent for EUR/USD trading using OHLC data. Custom state representation, epsilon-greedy strategy with separate action/SL/target selection, stop-loss logic where target = 2× SL, and maximum holding period constraint.',
    tags: ['DQN', 'PyTorch', 'Reinforcement Learning', 'Forex', 'EURUSD', 'Finance'],
    domain: 'Quant / RL',
  },
]

const domainColors: Record<string, string> = {
  'Space Systems': '#00d4ff',
  'Medical AI':    '#00e5b0',
  'Astronomy':     '#a78bfa',
  'Quant / RL':    '#f59e0b',
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className="section-label">02 / projects</p>
        <h2 className="section-title">What I&apos;m Building</h2>
        <div className="divider" />

        <div className={styles.grid}>
          {projects.map(p => (
            <article key={p.id} className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.id}>{p.id}</span>
                <span
                  className={styles.domain}
                  style={{ color: domainColors[p.domain] }}
                >
                  {p.domain}
                </span>
                <span className={`${styles.status} ${p.status === 'Active' ? styles.active : styles.experimental}`}>
                  {p.status}
                </span>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.role}>
                <span className={styles.roleLabel}>Role:</span> {p.role}
              </p>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
