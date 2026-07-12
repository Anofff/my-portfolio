import { useState, useMemo } from 'react'
import { blogs, blogCategories, activeSeries } from '../../data'
import SeriesBanner from '../../components/SeriesBanner/SeriesBanner'
import FeaturedPost from '../../components/FeaturedPost/FeaturedPost'
import BlogCard from '../../components/BlogCard/BlogCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import styles from './Blogs.module.css'

export default function Blogs() {
  const [active, setActive] = useState('all')

  const featured = blogs.find((p) => p.featured)
  const filtered = useMemo(() => {
    return active === 'all' ? blogs : blogs.filter((p) => p.topic === active)
  }, [active])

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs.</h1>
        <p className={styles.sub}>
          Documenting the journey — Terraform, AWS, system design, and everything
          in between.
        </p>
      </div>

      {activeSeries && <SeriesBanner series={activeSeries} />}

      {featured && <FeaturedPost post={featured} />}

      {blogs.length > 0 && (
        <FilterBar
          options={blogCategories}
          active={active}
          onChange={setActive}
        />
      )}

      {blogs.length > 0 && <SectionLabel>All Posts</SectionLabel>}

      <div className={styles.list}>
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
        {blogs.length === 0 && (
          <p className={styles.state}>No posts yet. Check back soon.</p>
        )}
        {blogs.length > 0 && filtered.length === 0 && (
          <p className={styles.state}>No posts in this category yet.</p>
        )}
      </div>
    </div>
  )
}
