import { metodoParagraph, pilares } from '../../data/metodo'
import { Overline } from '../ui/Overline'
import { Section } from '../ui/Section'
import styles from './Metodo.module.css'

export function Metodo() {
  return (
    <Section id="metodo" labelledBy="metodo-title" wrapClassName={styles.grid}>
      <div>
        <Overline>
          01 <span aria-hidden="true">/</span> O método
        </Overline>
        <h2 className={styles.title} id="metodo-title">
          Aquecimento. Trabalho. Guerra.
        </h2>
      </div>
      <div className={styles.body}>
        <p>{metodoParagraph}</p>
        <ul className={styles.pilarList}>
          {pilares.map((pilar) => (
            <li key={pilar.num}>
              <span className={styles.num} aria-hidden="true">
                {pilar.num}
              </span>
              <strong>{pilar.title}</strong> {pilar.text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
