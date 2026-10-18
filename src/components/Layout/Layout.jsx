import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

// List pages get a wider frame so cards and long titles have room.
// Home and individual posts keep the narrow reading column.
const WIDE_PAGES = ['/blogs', '/projects']

export default function Layout({ personal }) {
  const { pathname } = useLocation()
  const wide = WIDE_PAGES.includes(pathname.replace(/\/$/, ''))

  return (
    <div className={`${styles.page} ${wide ? styles.wide : ''}`}>
      <Nav initials={personal.initials} />
      <main>
        <Outlet />
      </main>
      <Footer name={personal.name} role={personal.role} />
    </div>
  )
}
