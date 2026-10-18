import { Link } from 'react-router-dom'
import styles from './SeriesBanner.module.css'

export default function SeriesBanner({ series, latest }) {
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
      {latest && (
        <Link to={`/blogs/${latest.slug}`} className={styles.latest}>
          <span className={styles.latestLabel}>
            Latest · Day {latest.series?.day}
          </span>
          <span className={styles.latestTitle}>{latest.title}</span>
        </Link>
      )}
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
