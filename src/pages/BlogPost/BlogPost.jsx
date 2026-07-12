import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogs, personal } from '../../data'
import { getPostLoader } from '../../content/posts'
import TopicPill from '../../components/TopicPill/TopicPill'
import TableOfContents from '../../components/TableOfContents/TableOfContents'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogs.find((p) => p.slug === slug)
  const contentRef = useRef(null)
  const [Content, setContent] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setContent(null)
    setNotFound(false)

    const loader = getPostLoader(slug)
    if (!post || !loader) {
      setNotFound(true)
      return
    }

    let active = true
    loader().then((mod) => {
      if (active) setContent(() => mod.default)
    })
    return () => {
      active = false
    }
  }, [slug, post])

  useEffect(() => {
    document.title = post
      ? `${post.title} — ${personal.name}`
      : `Not found — ${personal.name}`
    return () => {
      document.title = `${personal.name} — ${personal.role}`
    }
  }, [post])

  if (notFound) {
    return (
      <div>
        <Link to="/blogs" className={styles.back}>
          ← Back
        </Link>
        <p className={styles.missing}>
          That post doesn’t exist (yet). Head back to the blog.
        </p>
      </div>
    )
  }

  return (
    <div className={styles.wide}>
      <Link to="/blogs" className={styles.back}>
        ← Back
      </Link>

      <div className={styles.grid}>
        <div className={styles.main}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <TopicPill topic={post.topic} />
              {post.series?.day && (
                <span className={styles.dayTag}>Day {post.series.day}</span>
              )}
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.byline}>
              {personal.name} · {post.date} · {post.readTime} read
            </p>
          </header>

          <article ref={contentRef} className={styles.prose}>
            {Content ? <Content /> : <p className={styles.loading}>Loading…</p>}
          </article>

          <div className={styles.footerNav}>
            <Link to="/blogs" className={styles.back}>
              ← All posts
            </Link>
          </div>
        </div>

        <aside className={styles.tocCol}>
          <TableOfContents containerRef={contentRef} ready={!!Content} />
        </aside>
      </div>
    </div>
  )
}
