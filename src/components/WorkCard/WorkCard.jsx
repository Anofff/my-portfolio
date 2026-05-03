import styles from './WorkCard.module.css'

export default function WorkCard({ job }) {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <span className={styles.company}>{job.company}</span>
        <span className={styles.role}>{job.role}</span>
        {job.badge && (
          <span className={`${styles.badge} ${styles[job.badge]}`}>{job.badge}</span>
        )}
      </div>
      <div className={styles.right}>
        <span className={styles.period}>{job.period}</span>
        <span className={styles.location}>{job.location}</span>
      </div>
    </div>
  )
}
