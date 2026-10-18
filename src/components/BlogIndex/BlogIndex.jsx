import { useState, useMemo } from 'react'
import { blogCategories, activeSeries, blogPage } from '../../data'
import { cld, cldSrcSet } from '../../lib/cloudinary'
import SeriesBanner from '../SeriesBanner/SeriesBanner'
import FeaturedPost from '../FeaturedPost/FeaturedPost'
import BlogCard from '../BlogCard/BlogCard'
import FilterBar from '../FilterBar/FilterBar'
import SectionLabel from '../SectionLabel/SectionLabel'
import styles from './BlogIndex.module.css'

export default function BlogIndex({ posts }) {
  const [active, setActive] = useState('all')

  const featured = posts.find((p) => p.featured)

  // On "All", the featured post is already shown in the hero, so skip it in
  // the list. When a category is picked, show everything in that category.
  const filtered = useMemo(() => {
    if (active === 'all') return posts.filter((p) => p !== featured)
    return posts.filter((p) => p.topic === active)
  }, [active, featured, posts])

  // Only offer filters for categories that actually have posts.
  const usedTopics = new Set(posts.map((p) => p.topic))
  const filterOptions = blogCategories.filter(
    (c) => c.id === 'all' || usedTopics.has(c.id),
  )

  const latestInSeries = posts.find((p) => p.topic === 'series')
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

      {filterOptions.length > 2 && (
        <div className={styles.filters}>
          <FilterBar
            options={filterOptions}
            active={active}
            onChange={setActive}
          />
        </div>
      )}

      {filtered.length > 0 && <SectionLabel>{label}</SectionLabel>}

      <div className={styles.list}>
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        {posts.length === 0 && (
          <div className={styles.emptyWrap}>
            <div className={styles.empty}>
              <p className={styles.emptyLabel}>● Coming soon</p>
              <p className={styles.emptyTitle}>The first post is on its way.</p>
              <p className={styles.emptyText}>
                I'll be writing about cloud infrastructure, backend systems, and
                what I learn building things. Follow along via{' '}
                <a href="/rss.xml">RSS</a>.
              </p>
            </div>
            {blogPage?.image && (
              <img
                className={styles.emptyArt}
                src={cld(blogPage.image, { width: 680 })}
                srcSet={cldSrcSet(blogPage.image, 680)}
                alt={blogPage.imageAlt ?? ''}
                width="1600"
                height="900"
              />
            )}
          </div>
        )}
        {posts.length > 0 && filtered.length === 0 && (
          <p className={styles.state}>No posts in this category yet.</p>
        )}
      </div>
    </div>
  )
}
