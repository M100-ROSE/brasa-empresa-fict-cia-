import type { ReactNode } from 'react'
import styles from './Overline.module.css'

interface OverlineProps {
  children: ReactNode
  dark?: boolean
  className?: string
}

export function Overline({ children, dark, className }: OverlineProps) {
  const classes = [styles.overline, dark ? styles.dark : '', className].filter(Boolean).join(' ')

  return <p className={classes}>{children}</p>
}
