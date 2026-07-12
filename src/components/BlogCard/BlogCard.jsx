import TopicPill from '../TopicPill/TopicPill'
import styles from './BlogCard.module.css'

export default function BlogCard({ post }) {
  return (
    <a href={`/blogs/${post.slug}`} className={styles.row}>
      <div className={styles.date}>
        <span>{post.dateShort.day}</span>
        <span>{post.dateShort.year}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.meta}>
          <TopicPill topic={post.topic} />
          {post.series?.day && (
            <span className={styles.dayTag}>Day {post.series.day}</span>
          )}
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
        <span className={styles.title}>{post.title}</span>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  )
}
