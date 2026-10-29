import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  labelledBy: string
  className?: string
  wrapClassName?: string
  children: ReactNode
}

export function Section({ id, labelledBy, className, wrapClassName, children }: SectionProps) {
  const sectionClasses = [styles.section, className].filter(Boolean).join(' ')
  const wrapClasses = [styles.wrap, wrapClassName].filter(Boolean).join(' ')

  return (
    <section className={sectionClasses} id={id} aria-labelledby={labelledBy}>
      <div className={wrapClasses}>{children}</div>
    </section>
  )
}
