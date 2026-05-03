import styles from './ProjectCard.module.css'

function categoryClass(category) {
  return category.toLowerCase().replace(/\s+/g, '_')
}

export default function ProjectCard({ project }) {
  const cat = categoryClass(project.category)
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.left}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <span className={`${styles.tag} ${styles[cat] ?? ''}`}>
            {project.category}
          </span>
          {project.wip && <span className={styles.wip}>WIP</span>}
        </div>
        <span className={styles.title}>{project.title}</span>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <span key={s} className={styles.pill}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  )
}
