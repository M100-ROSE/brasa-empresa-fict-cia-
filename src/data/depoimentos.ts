export interface Depoimento {
  quote: string
  author: string
  tenure: string
}

export interface Numero {
  label: string
  value: string
}

export const depoimentos: Depoimento[] = [
  {
    quote: '“Entrei achando que ia passar mal na primeira semana. Fiquei dois anos.”',
    author: 'Marina T.',
    tenure: '2 anos de casa',
  },
  {
    quote: '“Aprendi a socar sem fechar os olhos. Ainda erro o gancho.”',
    author: 'Rafael M.',
    tenure: '8 meses de casa',
  },
  {
    quote: '“Não tem espelho, tem relógio. É a única academia que me faz chegar no horário.”',
    author: 'Júlia P.',
    tenure: '3 anos de casa',
  },
]

export const numeros: Numero[] = [
  { label: 'Alunos ativos', value: '1.200' },
  { label: 'Treinadores', value: '18' },
  { label: 'Anos de Augusta', value: '6' },
]
