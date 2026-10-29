import { headerNavLinks } from '../../data/navegacao'
import { Brand } from '../ui/Brand'
import { Btn } from '../ui/Btn'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Brand />

        <nav className={styles.nav} aria-label="Navegação principal">
          {headerNavLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <Btn href="#aula" variant="volt" size="header" className={styles.headerBtn}>
          <span className={styles.long}>Quero minha aula grátis</span>
          <span className={styles.short}>Aula grátis</span>
        </Btn>
      </div>
    </header>
  )
}
