export interface Horario {
  time: string
  modality: string
  level: string
  spots: number
  isFull?: boolean
  /** Texto completo do label acessível do botão "Reservar". */
  reserveSrText?: string
}

export const horarios: Horario[] = [
  {
    time: '06h30',
    modality: 'Força',
    level: 'Iniciante',
    spots: 6,
    reserveSrText: 'aula das 6h30 de força',
  },
  {
    time: '07h30',
    modality: 'Boxe',
    level: 'Todos os níveis',
    spots: 4,
    reserveSrText: 'aula das 7h30 de boxe',
  },
  {
    time: '12h15',
    modality: 'Condicionamento',
    level: 'Intermediário',
    spots: 2,
    reserveSrText: 'aula das 12h15 de condicionamento',
  },
  {
    time: '18h00',
    modality: 'Boxe',
    level: 'Avançado',
    spots: 3,
    reserveSrText: 'aula das 18h de boxe',
  },
  {
    time: '19h00',
    modality: 'Força',
    level: 'Livre',
    spots: 0,
    isFull: true,
  },
  {
    time: '20h00',
    modality: 'Mobilidade',
    level: 'Todos os níveis',
    spots: 8,
    reserveSrText: 'aula das 20h de mobilidade',
  },
]
