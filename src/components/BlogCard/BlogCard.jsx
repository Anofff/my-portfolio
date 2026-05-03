import styles from './BlogCard.module.css'

function topicClass(topic) {
  return topic.toLowerCase()
}

export default function BlogCard({ post }) {
  const topic = topicClass(post.topic)
  return (
    <a href={post.url} className={styles.row}>
      <div className={styles.date}>
        <span>{post.dateShort.day}</span>
        <span>{post.dateShort.year}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={`${styles.topic} ${styles[topic] ?? ''}`}>
            {post.topic}
          </span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
        <span className={styles.title}>{post.title}</span>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  )
}
