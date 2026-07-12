import { useState } from 'react'
import { projects, projectCategories } from '../../data'
import ProjectCard from '../ProjectCard/ProjectCard'
import FilterBar from '../FilterBar/FilterBar'
import styles from './ProjectIndex.module.css'

export default function ProjectIndex() {
  const [active, setActive] = useState('all')
  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Projects.</h1>
        <p className={styles.sub}>
          A selection of things I've built — side projects, tools, and open
          source work.
        </p>
      </div>
      {projects.length > 0 && (
        <FilterBar
          options={projectCategories}
          active={active}
          onChange={setActive}
        />
      )}
      <div className={styles.list}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {projects.length === 0 && (
          <p className={styles.state}>No projects yet.</p>
        )}
      </div>
    </div>
  )
}
