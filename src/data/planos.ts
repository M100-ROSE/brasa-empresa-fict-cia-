export type PlanoCtaVariant = 'volt' | 'ghost'

export interface Plano {
  name: string
  price: string
  items: string[]
  ctaLabel: string
  ctaVariant: PlanoCtaVariant
  featured?: boolean
  tag?: string
}

export const planos: Plano[] = [
  {
    name: '3x semana',
    price: 'Sob consulta',
    items: [
      '12 aulas por mês',
      'Boxe, força e condicionamento',
      'Avaliação a cada 8 semanas',
    ],
    ctaLabel: 'Começar com aula grátis',
    ctaVariant: 'ghost',
  },
  {
    name: 'Livre',
    price: 'Sob consulta',
    items: [
      'Aulas ilimitadas, sem reserva extra',
      'Acesso às unidades Augusta e Curitiba',
      'Um convidado por mês',
    ],
    ctaLabel: 'Quero o plano livre',
    ctaVariant: 'volt',
    featured: true,
    tag: 'Mais escolhido',
  },
  {
    name: 'Personal 1:1',
    price: 'Sob consulta',
    items: [
      'Sessão individual de 50 minutos',
      'Boxe ou força, com treinador sênior',
      'Agendamento direto com o treinador',
    ],
    ctaLabel: 'Falar com a equipe',
    ctaVariant: 'ghost',
  },
]
