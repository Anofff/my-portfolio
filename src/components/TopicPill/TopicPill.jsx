import { blogCategories } from '../../data'
import styles from './TopicPill.module.css'

export default function TopicPill({ topic, size = 'sm' }) {
  const cat = blogCategories.find((c) => c.id === topic) || blogCategories[0]
  return (
    <span
      className={`${styles.pill} ${styles[size]}`}
      style={{ '--pill-color': cat.color }}
    >
      {cat.label}
    </span>
  )
}
