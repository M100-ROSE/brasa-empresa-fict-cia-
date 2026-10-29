import { heroFacts, proximaTurma } from '../../data/hero'
import { Btn } from '../ui/Btn'
import { Overline } from '../ui/Overline'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.beam}></span>
        <span className={`${styles.beam} ${styles.beamTwo}`}></span>
      </div>

      <div className={`${styles.wrap} ${styles.inner}`}>
        <div className={styles.copy}>
          <Overline>
            Consolação, São Paulo <span aria-hidden="true">·</span> desde 2020
          </Overline>
          <h1 className={styles.title} id="hero-title">
            Chega de<br />treino<br /><em>morno.</em>
          </h1>
          <p className={styles.lead}>
            40 minutos. 16 pessoas. Zero desculpa. Treino funcional e boxe em turma fechada, na Rua
            Augusta.
          </p>

          <div className={styles.actions}>
            <Btn href="#aula" variant="volt" className={styles.actionBtn}>
              Quero minha aula grátis <span aria-hidden="true">→</span>
            </Btn>
            <Btn href="#horarios" variant="ghost" className={styles.actionBtn}>
              Ver horários de hoje
            </Btn>
          </div>

          <ul className={styles.facts}>
            {heroFacts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong> {fact.label}
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.next} aria-label="Próxima turma">
          <p className={styles.nextLabel}>{proximaTurma.label}</p>
          <p className={styles.nextTime}>{proximaTurma.time}</p>
          <p className={styles.nextMod}>
            {proximaTurma.modality} <span aria-hidden="true">·</span> {proximaTurma.level}
          </p>
          <p className={styles.nextSpots}>
            <span className={styles.dot} aria-hidden="true"></span>
            {proximaTurma.spots} vagas restantes
          </p>
        </aside>
      </div>
    </section>
  )
}
