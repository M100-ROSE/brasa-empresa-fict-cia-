import { Btn } from '../ui/Btn'
import { Overline } from '../ui/Overline'
import styles from './CtaFinal.module.css'

export function CtaFinal() {
  return (
    <section className={styles.ctaFinal} id="aula" aria-labelledby="aula-title">
      <div className={`${styles.wrap} ${styles.inner}`}>
        <div>
          <Overline dark>Aula experimental gratuita</Overline>
          <h2 className={styles.title} id="aula-title">
            A primeira dói.<br />A segunda vicia.
          </h2>
          <p className={styles.sub}>
            Uma aula grátis por pessoa, com treinador na sua primeira turma. Vagas limitadas a 16
            por horário.
          </p>
        </div>
        <div className={styles.action}>
          <Btn
            href="mailto:oi@brasa.treino?subject=Quero%20minha%20aula%20gr%C3%A1tis%20na%20BRASA"
            variant="dark"
            className={styles.darkBtn}
          >
            Quero minha aula grátis <span aria-hidden="true">→</span>
          </Btn>
          <p className={styles.note}>
            Chegue 10 minutos antes. Traga água e más intenções.
          </p>
        </div>
      </div>
    </section>
  )
}
