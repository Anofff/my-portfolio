import styles from './FilterBar.module.css'

export default function FilterBar({ options, active, onChange }) {
  return (
    <div className={styles.bar}>
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`${styles.btn} ${active === opt.id ? styles.active : ''}`}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
