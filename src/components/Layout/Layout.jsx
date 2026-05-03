import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

export default function Layout({ personal }) {
  return (
    <div className={styles.page}>
      <Nav initials={personal.initials} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer name={personal.name} role={personal.role} />
    </div>
  )
}
