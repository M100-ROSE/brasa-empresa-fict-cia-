import type { ReactNode } from 'react'
import type { TagVariant } from '../../data/modalidades'
import styles from './Tag.module.css'

interface TagProps {
  variant: TagVariant
  children: ReactNode
}

export function Tag({ variant, children }: TagProps) {
  const classes = [styles.tag, variant ? styles[variant] : ''].filter(Boolean).join(' ')

  return <li className={classes}>{children}</li>
}
