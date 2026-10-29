export type TagVariant = 'volt' | 'red' | 'outline' | ''

export type ModalidadeMedia = 'boxe' | 'forca' | 'cond' | 'mob'

export interface ModalidadeTag {
  label: string
  variant: TagVariant
}

export interface Modalidade {
  title: string
  ghost: string
  media: ModalidadeMedia
  text: string
  tags: ModalidadeTag[]
  /** Complemento do link "Ver turmas" lido por leitores de tela. */
  linkSrText: string
}

export const modalidades: Modalidade[] = [
  {
    title: 'Boxe',
    ghost: '01',
    media: 'boxe',
    text: 'Ataque, esquiva, retorno. O ringue começa no chão da Augusta e termina no saco de pancada.',
    tags: [
      { label: 'Alto', variant: 'volt' },
      { label: 'Técnico', variant: '' },
      { label: '60 min', variant: '' },
    ],
    linkSrText: 'de boxe',
  },
  {
    title: 'Força',
    ghost: '02',
    media: 'forca',
    text: 'Barra, peso e tempo sob tensão. Agachar não é castigo: é o básico que ninguém te ensinou.',
    tags: [
      { label: 'Alto', variant: 'volt' },
      { label: 'Progressivo', variant: '' },
      { label: '50 min', variant: '' },
    ],
    linkSrText: 'de força',
  },
  {
    title: 'Condicionamento',
    ghost: '03',
    media: 'cond',
    text: 'Rounds de 4 minutos, descanso de 60 segundos. O relógio não para e você também não.',
    tags: [
      { label: 'Brutal', variant: 'red' },
      { label: 'Metabólico', variant: '' },
      { label: '40 min', variant: '' },
    ],
    linkSrText: 'de condicionamento',
  },
  {
    title: 'Mobilidade',
    ghost: '04',
    media: 'mob',
    text: 'Quadril, ombro, tornozelo. O trabalho chato que te mantém treinando em dezembro.',
    tags: [
      { label: 'Médio', variant: 'outline' },
      { label: 'Recuperação', variant: '' },
      { label: '45 min', variant: '' },
    ],
    linkSrText: 'de mobilidade',
  },
]
