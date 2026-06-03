import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'Computer Vision & Deep Learning',
    skills: [
      'Image Classification', 'Object Detection (2D/3D)', 'Semantic Segmentation',
      'Instance Segmentation', 'Anomaly Detection', 'CNNs', 'Transformers', 'ViT',
      'YOLO', 'U-Net', 'Transfer Learning', 'Hyperparameter Tuning',
      'mAP / IoU / Dice',
    ],
  },
  {
    label: 'Programming & Frameworks',
    skills: [
      'Python', 'C++', 'PyTorch', 'TensorFlow / Keras', 'OpenCV',
      'NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'Matplotlib',
      'Pillow', 'Jupyter Notebook',
    ],
  },
  {
    label: 'MLOps & Deployment',
    skills: [
      'Docker', 'REST Inference APIs', 'Google Cloud Platform (GCP)',
      'Google Cloud Run', 'CI/CD', 'Git', 'Model Versioning',
      'Containerized Deployment',
    ],
  },
  {
    label: 'Imaging Systems & Remote Sensing',
    skills: [
      'Thermal-Infrared Imaging', 'Radiometric Modelling', 'SNR / FoV Analysis',
      'Microbolometric Sensors', 'Earth Observation', 'Satellite Imagery',
      'Change Detection', 'Hounsfield Units', 'Multi-Windowing',
      'Zemax OpticStudio',
    ],
  },
  {
    label: 'Data & Analysis',
    skills: [
      'SQL', 'Power BI', 'Statistical Modelling', 'A/B Testing',
      'Regression Analysis', 'Cohort Analysis', 'Excel',
    ],
  },
  {
    label: 'Software Engineering',
    skills: [
      'Git / Version Control', 'Linux (bash / csh)', 'Software Testing & Debugging',
      'Performance Troubleshooting', 'Code-Review Workflows', 'Arduino',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <p className="section-label">04 / skills</p>
        <h2 className="section-title">Tech Stack</h2>
        <div className="divider" />

        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.label} className={`card ${styles.card}`}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.pills}>
                {group.skills.map(s => (
                  <span key={s} className={styles.pill}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
