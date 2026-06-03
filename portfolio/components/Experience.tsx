import styles from './Experience.module.css'

const experience = [
  {
    role: 'Computer Vision Engineer – Thermal Imaging Payload (IGNIS CubeSat)',
    org: 'University of Naples "Federico II" – IGNIS CubeSat Mission',
    location: 'Naples, Italy',
    period: '03/2025 – Present',
    bullets: [
      'Developed physics-aware imaging performance and SNR models for a thermal-infrared Earth Observation CubeSat payload, supporting feasibility of satellite-derived imagery.',
      'Built Python-based simulation pipelines (NumPy, SciPy, Matplotlib) to evaluate FoV, spatial resolution, ground footprint, and radiometric signal under realistic orbital conditions.',
      'Applied time-series anomaly detection and trend analysis to mission simulation outputs, identifying non-optimal launch timing and recommending a ~5-month postponement to improve early-mission imaging quality.',
      'Supported payload design trade-offs and engineering decision-making with multidisciplinary spacecraft teams; produced technical reports and stakeholder presentations.',
    ],
  },
  {
    role: 'Data Analyst',
    org: 'EZ-Tech',
    location: '',
    period: '01/2020 – 12/2023',
    bullets: [
      'Built and maintained Power BI dashboards tracking key business KPIs, reducing manual reporting effort by ~40%.',
      'Wrote complex SQL queries to extract, clean, and analyze large datasets, supporting data-driven decisions across sales and operations.',
      'Performed exploratory data analysis and statistical testing (A/B tests, regression, cohort analysis) using Python (Pandas, NumPy) and Excel.',
      'Collaborated with cross-functional teams to automate recurring reports, improving data accuracy and shortening reporting cycle time by ~30%.',
    ],
  },
  {
    role: 'Data Analytics Intern',
    org: 'Faraz Omran Tadbir',
    location: '',
    period: '03/2019 – 09/2019',
    bullets: [
      'Supported data analysis by writing SQL queries and building Excel / Power BI reports, helping the team track KPIs and identify trends across business operations.',
    ],
  },
]

const education = [
  {
    degree: 'M.Sc. in Data Science',
    institution: 'University of Naples Federico II',
    location: 'Naples, Italy',
    period: '09/2023 – Present',
    thesis: 'Signal-to-Noise Ratio characterization for thermal-infrared microbolometric imaging in CubeSat missions.',
    coursework: 'Machine Learning, Computer Vision, Statistical Learning, Data Mining, Big Data, Advanced Statistical Modeling.',
  },
  {
    degree: 'B.Sc. in Computer Software Engineering',
    institution: 'Islamic Azad University',
    location: '',
    period: '',
    thesis: '',
    coursework: '',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <p className="section-label">02 / experience</p>
        <h2 className="section-title">Where I&apos;ve Worked</h2>
        <div className="divider" />

        <div className={styles.list}>
          {experience.map(e => (
            <div key={e.role} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.period}>{e.period}</span>
                <span className={styles.org}>
                  {e.org}{e.location ? ` — ${e.location}` : ''}
                </span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.role}>{e.role}</h3>
                <ul className={styles.bullets}>
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.eduBlock}>
          <p className={styles.eduHeading}>Education</p>
          <div className={styles.eduGrid}>
            {education.map(e => (
              <div key={e.degree} className={`card ${styles.eduCard}`}>
                <h3 className={styles.eduDegree}>{e.degree}</h3>
                <p className={styles.eduInst}>{e.institution}</p>
                {e.period && (
                  <p className={styles.eduPeriod}>
                    {e.period}{e.location ? ` · ${e.location}` : ''}
                  </p>
                )}
                {e.thesis && (
                  <p className={styles.eduDetail}>
                    <span className={styles.detailLabel}>Thesis: </span>{e.thesis}
                  </p>
                )}
                {e.coursework && (
                  <p className={styles.eduDetail}>
                    <span className={styles.detailLabel}>Coursework: </span>{e.coursework}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
