import styles from './FilterBar.module.css'

export default function FilterBar({ options, active, onChange }) {
  return (
    <div className={styles.bar}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`${styles.btn} ${active === opt ? styles.active : ''}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
