import { planos } from '../../data/planos'
import { Btn } from '../ui/Btn'
import { Section } from '../ui/Section'
import { SectionHead } from '../ui/SectionHead'
import styles from './Planos.module.css'

export function Planos() {
  return (
    <Section id="planos" labelledBy="planos-title" className={styles.planos}>
      <SectionHead
        id="planos-title"
        overline={
          <>
            04 <span aria-hidden="true">/</span> Planos
          </>
        }
        title="Sem letra miúda. Sem fidelidade."
        intro="Matrícula sob consulta. Cancelamento com 30 dias de aviso, sem multa."
      />

      <ul className={styles.planGrid}>
        {planos.map((plano) => (
          <li
            key={plano.name}
            className={plano.featured ? `${styles.plan} ${styles.featured}` : styles.plan}
          >
            {plano.tag ? <p className={styles.tag}>{plano.tag}</p> : null}
            <h3 className={styles.name}>{plano.name}</h3>
            <p className={`${styles.price} ${styles.priceText}`}>{plano.price}</p>
            <ul className={styles.list}>
              {plano.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Btn href="#aula" variant={plano.ctaVariant} className={styles.cta}>
              {plano.ctaLabel}
            </Btn>
          </li>
        ))}
      </ul>
    </Section>
  )
}
