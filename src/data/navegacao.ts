export interface NavLink {
  href: string
  label: string
}

export interface ExternalNavLink extends NavLink {
  external: boolean
}

export const headerNavLinks: NavLink[] = [
  { href: '#metodo', label: 'Método' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#horarios', label: 'Horários' },
  { href: '#planos', label: 'Planos' },
]

export const footerNavLinks: NavLink[] = [
  { href: '#metodo', label: 'Método' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#horarios', label: 'Horários' },
  { href: '#planos', label: 'Planos' },
  { href: '#aula', label: 'Aula grátis' },
]

export const footerContactLinks: ExternalNavLink[] = [
  { href: 'mailto:oi@brasa.treino', label: 'oi@brasa.treino', external: false },
  { href: 'https://instagram.com/brasa.treino', label: '@brasa.treino', external: true },
]
