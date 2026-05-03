import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'ML / Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'OpenCV', 'MLflow', 'Optuna'],
  },
  {
    label: 'Computer Vision',
    skills: ['U-Net', 'CNN', 'ResNet', 'Image Segmentation', 'Object Detection', 'Feature Extraction'],
  },
  {
    label: 'Data & Science',
    skills: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Plotly', 'Statistical Modelling'],
  },
  {
    label: 'Languages',
    skills: ['Python', 'C++', 'C', 'Bash'],
  },
  {
    label: 'Space & Optical',
    skills: ['Zemax OpticStudio', 'Radiometric Modelling', 'SNR/NETD Analysis', 'Thermal IR', 'FLIR Boson 640'],
  },
  {
    label: 'Infrastructure',
    skills: ['Git', 'GitHub', 'AWS', 'Google Cloud', 'CUDA', 'Anaconda', 'Streamlit'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <p className="section-label">03 / skills</p>
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
