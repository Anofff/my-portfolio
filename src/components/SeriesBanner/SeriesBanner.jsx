import styles from './SeriesBanner.module.css'

export default function SeriesBanner({ series }) {
  const pct = Math.round((series.currentDay / series.totalDays) * 100)
  return (
    <div className={styles.banner}>
      <div className={styles.top}>
        <span className={styles.label}>● Active Series</span>
        <a
          href={series.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.ghLink}
        >
          GitHub →
        </a>
      </div>
      <p className={styles.name}>{series.name}</p>
      <div className={styles.progressRow}>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        <span className={styles.count}>
          Day {series.currentDay} / {series.totalDays}
        </span>
      </div>
    </div>
  )
}
