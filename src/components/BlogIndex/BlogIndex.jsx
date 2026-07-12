import { useState, useMemo } from 'react'
import { blogCategories, activeSeries } from '../../data'
import SeriesBanner from '../SeriesBanner/SeriesBanner'
import FeaturedPost from '../FeaturedPost/FeaturedPost'
import BlogCard from '../BlogCard/BlogCard'
import FilterBar from '../FilterBar/FilterBar'
import SectionLabel from '../SectionLabel/SectionLabel'
import styles from './BlogIndex.module.css'

export default function BlogIndex({ posts }) {
  const [active, setActive] = useState('all')

  const featured = posts.find((p) => p.featured)
  const filtered = useMemo(() => {
    return active === 'all' ? posts : posts.filter((p) => p.topic === active)
  }, [active, posts])

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

      {posts.length > 0 && (
        <FilterBar
          options={blogCategories}
          active={active}
          onChange={setActive}
        />
      )}

      {posts.length > 0 && <SectionLabel>All Posts</SectionLabel>}

      <div className={styles.list}>
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        {posts.length === 0 && (
          <p className={styles.state}>No posts yet. Check back soon.</p>
        )}
        {posts.length > 0 && filtered.length === 0 && (
          <p className={styles.state}>No posts in this category yet.</p>
        )}
      </div>
    </div>
  )
}
