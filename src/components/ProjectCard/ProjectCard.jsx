import { projectCategories } from '../../data'
import { cld, cldSrcSet } from '../../lib/cloudinary'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const cat = projectCategories.find((c) => c.id === project.category)
  const primary = project.liveUrl || project.url

  return (
    <article className={styles.card}>
      {project.image && (
        <a href={primary} target="_blank" rel="noreferrer" tabIndex={-1}>
          <img
            src={cld(project.image, { width: 520 })}
            srcSet={cldSrcSet(project.image, 520)}
            alt=""
            loading="lazy"
            className={styles.image}
          />
        </a>
      )}

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <span
            className={styles.tag}
            style={{ '--tag-color': cat?.color ?? 'var(--muted)' }}
          >
            {project.category}
          </span>
          {project.wip && <span className={styles.wip}>WIP</span>}
        </div>

        <h2 className={styles.title}>
          <a href={primary} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h2>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map((s) => (
            <span key={s} className={styles.pill}>
              {s}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer">
              Code →
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
