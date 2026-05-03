import styles from './Footer.module.css'

export default function Footer({ name, role }) {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      © {year} · {name} · {role}
    </footer>
  )
}
