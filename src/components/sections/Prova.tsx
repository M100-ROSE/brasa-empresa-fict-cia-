import { depoimentos, numeros } from '../../data/depoimentos'
import { Overline } from '../ui/Overline'
import { Section } from '../ui/Section'
import styles from './Prova.module.css'

export function Prova() {
  return (
    <Section id="prova" labelledBy="prova-title" className={styles.prova}>
      <div className={styles.top}>
        <div>
          <Overline>
            05 <span aria-hidden="true">/</span> Quem treina aqui
          </Overline>
          <h2 className={styles.title} id="prova-title">
            Aqui ninguém treina no escuro.
          </h2>
        </div>
        <dl className={styles.numeros}>
          {numeros.map((numero) => (
            <div key={numero.label}>
              <dt>{numero.label}</dt>
              <dd>{numero.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className={styles.quotes}>
        {depoimentos.map((depoimento) => (
          <li key={depoimento.author}>
            <blockquote>
              <p>{depoimento.quote}</p>
              <footer>
                {depoimento.author} <span aria-hidden="true">·</span> {depoimento.tenure}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  )
}
