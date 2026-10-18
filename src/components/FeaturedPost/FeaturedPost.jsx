import TopicPill from '../TopicPill/TopicPill'
import { cld, cldSrcSet } from '../../lib/cloudinary'
import styles from './FeaturedPost.module.css'

export default function FeaturedPost({ post }) {
  return (
    <a href={`/blogs/${post.slug}`} className={styles.card}>
      {post.coverImage && (
        <img
          src={cld(post.coverImage, { width: 720 })}
          srcSet={cldSrcSet(post.coverImage, 720)}
          alt=""
          loading="lazy"
          className={styles.cover}
        />
      )}
      <div className={styles.body}>
        <p className={styles.featuredLabel}>● Latest post</p>
        <div className={styles.meta}>
          <TopicPill topic={post.topic} />
          {post.series && (
            <span className={styles.dayPill}>
              Day {post.series.day} of {post.series.totalDays}
            </span>
          )}
          <span className={styles.readTime}>{post.readTime} read</span>
        </div>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.date}>{post.date}</p>
      </div>
    </a>
  )
}
