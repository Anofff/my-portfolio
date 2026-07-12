import { useEffect, useState } from 'react'
import styles from './TableOfContents.module.css'

export default function TableOfContents({ contentSelector = 'article' }) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const root = document.querySelector(contentSelector)
    if (!root) return

    const els = Array.from(root.querySelectorAll('h2, h3'))
    setHeadings(
      els.map((el) => ({
        id: el.id,
        text: el.textContent,
        level: Number(el.tagName[1]),
      })),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [contentSelector])

  if (headings.length === 0) return null

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <p className={styles.heading}>On this page</p>
      <ul className={styles.list}>
        {headings.map((h) => (
          <li
            key={h.id}
            className={[
              h.level === 3 ? styles.sub : '',
              activeId === h.id ? styles.active : '',
            ]
              .join(' ')
              .trim()}
          >
            <a href={`#${h.id}`} onClick={(e) => handleClick(e, h.id)}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
