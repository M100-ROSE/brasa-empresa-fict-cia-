import styles from './Brand.module.css'

interface BrandProps {
  as?: 'a' | 'p'
  href?: string
  variant?: 'footer'
}

export function Brand({ as = 'a', href = '#inicio', variant }: BrandProps) {
  const classes = [styles.brand, variant === 'footer' ? styles.footer : ''].filter(Boolean).join(' ')
  const content = (
    <>
      <span className={styles.mark} aria-hidden="true"></span>
      <span className={styles.name}>BRASA</span>
    </>
  )

  if (as === 'p') {
    return <p className={classes}>{content}</p>
  }

  return (
    <a className={classes} href={href} aria-label="BRASA — início">
      {content}
    </a>
  )
}
