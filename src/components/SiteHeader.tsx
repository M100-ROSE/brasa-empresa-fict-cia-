import { headerNavLinks } from '../data/navegacao'
import { Btn } from './Btn'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="BRASA — início">
          <span className="brand__mark" aria-hidden="true"></span>
          <span className="brand__name">BRASA</span>
        </a>

        <nav className="primary-nav" aria-label="Navegação principal">
          {headerNavLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <Btn href="#aula" variant="volt" className="btn--header">
          <span className="btn--header__long">Quero minha aula grátis</span>
          <span className="btn--header__short">Aula grátis</span>
        </Btn>
      </div>
    </header>
  )
}
