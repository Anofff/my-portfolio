import { useState } from 'react'
import { projects, projectCategories } from '../../data'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import styles from './Projects.module.css'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Projects.</h1>
        <p className={styles.sub}>
          A selection of things I've built — side projects, tools, and open
          source work.
        </p>
      </div>
      <FilterBar options={projectCategories} active={active} onChange={setActive} />
      <div className={styles.list}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
