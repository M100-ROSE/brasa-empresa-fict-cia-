import type { ReactNode } from 'react'
import { Overline } from './Overline'
import styles from './SectionHead.module.css'

interface SectionHeadProps {
  id: string
  overline: ReactNode
  title: ReactNode
  intro: ReactNode
}

export function SectionHead({ id, overline, title, intro }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <div>
        <Overline>{overline}</Overline>
        <h2 className={styles.title} id={id}>
          {title}
        </h2>
      </div>
      <p className={styles.intro}>{intro}</p>
    </div>
  )
}
