export interface HeroFact {
  value: string
  label: string
}

export interface ProximaTurma {
  label: string
  time: string
  modality: string
  level: string
  spots: number
}

export const heroFacts: HeroFact[] = [
  { value: '40', label: 'minutos de treino' },
  { value: '16', label: 'pessoas por turma' },
  { value: '6', label: 'dias por semana' },
]

export const proximaTurma: ProximaTurma = {
  label: 'Próxima turma',
  time: 'Hoje, 18h',
  modality: 'Boxe',
  level: 'avançado',
  spots: 3,
}

export const marqueeWords: string[] = ['Força', 'Suor', 'Técnica', 'Constância']
