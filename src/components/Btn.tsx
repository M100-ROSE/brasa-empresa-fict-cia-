import type { ReactNode } from 'react'

export type BtnVariant = 'volt' | 'ghost' | 'dark'

interface BtnProps {
  href: string
  variant: BtnVariant
  children: ReactNode
  className?: string
}

export function Btn({ href, variant, children, className }: BtnProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}
