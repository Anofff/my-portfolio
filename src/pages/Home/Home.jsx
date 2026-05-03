import { personal, socials, experience } from '../../data'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import WorkCard from '../../components/WorkCard/WorkCard'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.name}>{personal.name}.</h1>
        <p className={styles.role}>{personal.role}</p>
      </div>

      <SectionLabel>About</SectionLabel>
      <p className={styles.bio}>{personal.bio}</p>

      <SectionLabel>Work Experience</SectionLabel>
      <div className={styles.workList}>
        {experience.map((job) => (
          <WorkCard key={job.id} job={job} />
        ))}
      </div>

      <hr className={styles.divider} />

      <SectionLabel>Connect</SectionLabel>
      <SocialLinks socials={socials} resumeUrl={personal.resumeUrl} />
    </div>
  )
}
