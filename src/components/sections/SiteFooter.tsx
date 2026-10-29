import { footerContactLinks, footerNavLinks } from '../../data/navegacao'
import { Brand } from '../ui/Brand'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.wrap} ${styles.grid}`}>
        <div>
          <Brand as="p" variant="footer" />
          <p className={styles.tagline}>Treine na brasa.</p>
          <p className={styles.text}>
            Centro de treinamento funcional e boxe. Turmas fechadas, técnica cobrada, desculpa
            nenhuma.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Unidade Augusta</h2>
          <address className={styles.text}>
            Rua Augusta, 1.480 — Consolação<br />São Paulo/SP, 01304-001
          </address>
          <p className={styles.text}>
            Seg a sex, 6h às 22h<br />Sábado, 8h às 13h
          </p>
          <p className={styles.text}>
            <a
              href="https://maps.google.com/?q=Rua+Augusta+1480+São+Paulo"
              rel="noopener"
            >
              Ver no mapa
            </a>
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Contato</h2>
          <ul className={styles.links}>
            {footerContactLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} rel={link.external ? 'noopener' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className={styles.title}>No site</h2>
          <ul className={styles.links}>
            {footerNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`${styles.wrap} ${styles.bottom}`}>
        <p>© 2026 BRASA Treinamento. Todos os direitos reservados.</p>
        <p>Vagas e horários atualizados em 26/10/2026.</p>
      </div>
    </footer>
  )
}
