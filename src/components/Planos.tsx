import { planos } from '../data/planos'
import { Btn } from './Btn'

export function Planos() {
  return (
    <section className="section planos" id="planos" aria-labelledby="planos-title">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="overline">
              04 <span aria-hidden="true">/</span> Planos
            </p>
            <h2 className="section__title" id="planos-title">
              Sem letra miúda. Sem fidelidade.
            </h2>
          </div>
          <p className="section__intro">
            Matrícula sob consulta. Cancelamento com 30 dias de aviso, sem multa.
          </p>
        </div>

        <ul className="plan-grid">
          {planos.map((plano) => (
            <li key={plano.name} className={plano.featured ? 'plan plan--featured' : 'plan'}>
              {plano.tag ? <p className="plan__tag">{plano.tag}</p> : null}
              <h3 className="plan__name">{plano.name}</h3>
              <p className="plan__price plan__price--text">{plano.price}</p>
              <ul className="plan__list">
                {plano.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Btn
                href="#aula"
                variant={plano.ctaVariant}
                className="plan__cta"
              >
                {plano.ctaLabel}
              </Btn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
