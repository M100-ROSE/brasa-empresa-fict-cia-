import { Btn } from './Btn'

export function CtaFinal() {
  return (
    <section className="cta-final" id="aula" aria-labelledby="aula-title">
      <div className="wrap cta-final__inner">
        <div>
          <p className="overline overline--dark">Aula experimental gratuita</p>
          <h2 className="cta-final__title" id="aula-title">
            A primeira dói.<br />A segunda vicia.
          </h2>
          <p className="cta-final__sub">
            Uma aula grátis por pessoa, com treinador na sua primeira turma. Vagas limitadas a 16
            por horário.
          </p>
        </div>
        <div className="cta-final__action">
          <Btn
            href="mailto:oi@brasa.treino?subject=Quero%20minha%20aula%20gr%C3%A1tis%20na%20BRASA"
            variant="dark"
          >
            Quero minha aula grátis <span aria-hidden="true">→</span>
          </Btn>
          <p className="cta-final__note">
            Chegue 10 minutos antes. Traga água e más intenções.
          </p>
        </div>
      </div>
    </section>
  )
}
