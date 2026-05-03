import styles from './FeaturedPost.module.css'

function topicClass(topic) {
  return topic.toLowerCase()
}

export default function FeaturedPost({ post }) {
  const topic = topicClass(post.topic)
  return (
    <a href={post.url} className={styles.card}>
      <p className={styles.featuredLabel}>● Latest post</p>
      <div className={styles.meta}>
        <span className={`${styles.topic} ${styles[topic] ?? ''}`}>
          {post.topic}
        </span>
        <span className={styles.readTime}>{post.readTime} read</span>
      </div>
      <p className={styles.title}>{post.title}</p>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <p className={styles.date}>
        {post.date} · {post.readTime}
      </p>
    </a>
  )
}
