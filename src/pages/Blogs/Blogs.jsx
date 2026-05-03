import { useState } from 'react'
import { blogs, blogTopics } from '../../data'
import FeaturedPost from '../../components/FeaturedPost/FeaturedPost'
import BlogCard from '../../components/BlogCard/BlogCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import styles from './Blogs.module.css'

export default function Blogs() {
  const [activeTopic, setActiveTopic] = useState('All')
  const featured = blogs.find((b) => b.featured)
  const allPosts =
    activeTopic === 'All' ? blogs : blogs.filter((b) => b.topic === activeTopic)

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs.</h1>
        <p className={styles.sub}>
          Thoughts on engineering, design, tools, and the occasional life
          observation.
        </p>
      </div>
      {featured && <FeaturedPost post={featured} />}
      <FilterBar
        options={blogTopics}
        active={activeTopic}
        onChange={setActiveTopic}
      />
      <SectionLabel>All Posts</SectionLabel>
      <div className={styles.list}>
        {allPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
