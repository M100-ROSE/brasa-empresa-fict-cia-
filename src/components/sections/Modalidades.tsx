import type { ModalidadeMedia } from '../../data/modalidades'
import { modalidades } from '../../data/modalidades'
import { Section } from '../ui/Section'
import { SectionHead } from '../ui/SectionHead'
import { Tag } from '../ui/Tag'
import styles from './Modalidades.module.css'

const mediaClasses: Record<ModalidadeMedia, string> = {
  boxe: styles.mediaBoxe,
  forca: styles.mediaForca,
  cond: styles.mediaCond,
  mob: styles.mediaMob,
}

export function Modalidades() {
  return (
    <Section id="modalidades" labelledBy="modalidades-title" className={styles.modalidades}>
      <SectionHead
        id="modalidades-title"
        overline={
          <>
            02 <span aria-hidden="true">/</span> Modalidades
          </>
        }
        title="Escolha o seu tipo de desconforto."
        intro="Quatro frentes, um método. Você pode treinar todas na mesma semana — e vai querer."
      />

      <ul className={styles.cardGrid}>
        {modalidades.map((modalidade) => (
          <li className={styles.card} key={modalidade.title}>
            <div
              className={`${styles.media} ${mediaClasses[modalidade.media]}`}
              aria-hidden="true"
            >
              <span className={styles.ghost}>{modalidade.ghost}</span>
              <span className={styles.slash}></span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{modalidade.title}</h3>
              <p className={styles.text}>{modalidade.text}</p>
              <ul className={styles.tags}>
                {modalidade.tags.map((tag) => (
                  <Tag key={tag.label} variant={tag.variant}>
                    {tag.label}
                  </Tag>
                ))}
              </ul>
              <a className={styles.link} href="#horarios">
                Ver turmas <span aria-hidden="true">→</span>
                <span className="sr-only">{` ${modalidade.linkSrText}`}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
