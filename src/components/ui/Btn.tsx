import type { ReactNode } from 'react'
import styles from './Btn.module.css'

export type BtnVariant = 'volt' | 'ghost' | 'dark'

export type BtnSize = 'header' | 'row'

interface BtnProps {
  href: string
  variant: BtnVariant
  size?: BtnSize
  children: ReactNode
  className?: string
}

export function Btn({ href, variant, size, children, className }: BtnProps) {
  const classes = [styles.btn, styles[variant], size ? styles[size] : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}
