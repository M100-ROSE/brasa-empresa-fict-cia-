import type { ReactNode } from 'react'
import type { TagVariant } from '../data/modalidades'

interface TagProps {
  variant: TagVariant
  children: ReactNode
}

export function Tag({ variant, children }: TagProps) {
  return <li className={variant ? `tag tag--${variant}` : 'tag'}>{children}</li>
}
