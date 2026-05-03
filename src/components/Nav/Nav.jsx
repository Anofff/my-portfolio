import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav({ initials }) {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>
        {initials} ›
      </NavLink>
      <div className={styles.links}>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  )
}
