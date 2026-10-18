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

  // On "All", the featured post is already shown in the hero, so skip it in
  // the list. When a category is picked, show everything in that category.
  const filtered = useMemo(() => {
    if (active === 'all') return blogs.filter((p) => p !== featured)
    return blogs.filter((p) => p.topic === active)
  }, [active, featured])

  const latestInSeries = blogs.find((p) => p.topic === 'series')
  const hasHero = featured || activeSeries
  const label =
    active === 'all'
      ? 'More posts'
      : blogCategories.find((c) => c.id === active)?.label

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs.</h1>
        <p className={styles.sub}>
          Documenting the journey — Terraform, AWS, system design, and everything
          in between.
        </p>
      </div>

      {hasHero && (
        <div
          className={`${styles.hero} ${featured && activeSeries ? styles.heroSplit : ''}`}
        >
          {featured && <FeaturedPost post={featured} />}
          {activeSeries && <SeriesBanner series={activeSeries} latest={latestInSeries} />}
        </div>
      )}

      {blogs.length > 0 && (
        <div className={styles.filters}>
          <FilterBar
            options={blogCategories}
            active={active}
            onChange={setActive}
          />
        </div>
      )}

      {filtered.length > 0 && <SectionLabel>{label}</SectionLabel>}

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
