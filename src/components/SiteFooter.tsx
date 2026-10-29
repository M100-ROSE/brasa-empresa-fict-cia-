import { footerContactLinks, footerNavLinks } from '../data/navegacao'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <p className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true"></span>
            <span className="brand__name">BRASA</span>
          </p>
          <p className="footer__tagline">Treine na brasa.</p>
          <p className="footer__text">
            Centro de treinamento funcional e boxe. Turmas fechadas, técnica cobrada, desculpa
            nenhuma.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Unidade Augusta</h2>
          <address className="footer__text">
            Rua Augusta, 1.480 — Consolação<br />São Paulo/SP, 01304-001
          </address>
          <p className="footer__text">
            Seg a sex, 6h às 22h<br />Sábado, 8h às 13h
          </p>
          <p className="footer__text">
            <a
              href="https://maps.google.com/?q=Rua+Augusta+1480+São+Paulo"
              rel="noopener"
            >
              Ver no mapa
            </a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Contato</h2>
          <ul className="footer__links">
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
          <h2 className="footer__title">No site</h2>
          <ul className="footer__links">
            {footerNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="wrap footer__bottom">
        <p>© 2026 BRASA Treinamento. Todos os direitos reservados.</p>
        <p>Vagas e horários atualizados em 26/10/2026.</p>
      </div>
    </footer>
  )
}
