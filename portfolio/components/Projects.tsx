import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    title: 'AI-Assisted Intracranial Hemorrhage Segmentation from Brain CT',
    role: 'ML Engineer',
    status: 'Active',
    description:
      'Modular medical-AI pipeline orchestrating CV, ML, LLM, and RAG components for hemorrhage detection, segmentation, and clinical decision support from 3D CT scans. Implemented end-to-end preprocessing (Hounsfield Units, multi-windowing into 3-channel representations, brain extraction, 3D-to-2D slicing), U-Net with Dice + BCEWithLogitsLoss, balanced patch sampling (50% positive / 50% negative), and scan-level data-leakage prevention.',
    tags: ['U-Net', 'PyTorch', 'Medical Imaging', 'CT', 'LLM', 'RAG', 'Segmentation'],
    domain: 'Medical AI',
    period: '02/2026 – Present',
  },
  {
    id: '02',
    title: 'Brain Tumor Segmentation using YOLOv8 (Multimodal CT and MRI)',
    role: 'CV Engineer',
    status: 'Active',
    description:
      'YOLOv8-seg model trained with transfer learning on multimodal CT and MRI datasets in a GPU-accelerated environment, generating pixel-level tumor masks. Evaluated with box mAP, mask mAP, precision, recall, and loss curves; systematic hyperparameter tuning and augmentation strategies for cross-modality robustness.',
    tags: ['YOLOv8', 'PyTorch', 'Segmentation', 'CT', 'MRI', 'Transfer Learning'],
    domain: 'Medical AI',
    period: '02/2026 – Present',
  },
  {
    id: '03',
    title: 'Morphological Classification of Extragalactic Radio Sources using CNN',
    role: 'CV Engineer',
    status: 'Completed',
    description:
      'CNN classifier for radio galaxies (FR0, FRI, FRII) on ~18,000 grayscale astronomical images (50×50). Best result: plain CNN at 87.39% train / 82.77% test accuracy, outperforming ResNet and Optuna-tuned variants. Packaged as a Dockerized REST inference service and deployed on Google Cloud Run.',
    tags: ['CNN', 'TensorFlow', 'Radio Astronomy', 'Image Classification', 'Docker', 'GCP'],
    domain: 'Astronomy',
    period: '08/2024 – 11/2024',
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
    period: 'Ongoing',
  },
]

const domainColors: Record<string, string> = {
  'Medical AI':  '#00e5b0',
  'Astronomy':   '#a78bfa',
  'Quant / RL':  '#f59e0b',
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className="section-label">03 / projects</p>
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
                <span className={`${styles.status} ${
                  p.status === 'Active'       ? styles.active       :
                  p.status === 'Completed'    ? styles.active       :
                  styles.experimental
                }`}>
                  {p.status}
                </span>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.role}>
                <span className={styles.roleLabel}>Role:</span> {p.role}
                <span style={{ color: 'var(--text-dim)', marginLeft: '1rem', fontSize: '0.78rem' }}>
                  {p.period}
                </span>
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
