import { depoimentos, numeros } from '../data/depoimentos'

export function Prova() {
  return (
    <section className="section prova" id="prova" aria-labelledby="prova-title">
      <div className="wrap">
        <div className="prova__top">
          <div>
            <p className="overline">
              05 <span aria-hidden="true">/</span> Quem treina aqui
            </p>
            <h2 className="section__title" id="prova-title">
              Aqui ninguém treina no escuro.
            </h2>
          </div>
          <dl className="numeros">
            {numeros.map((numero) => (
              <div key={numero.label}>
                <dt>{numero.label}</dt>
                <dd>{numero.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="quotes">
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
      </div>
    </section>
  )
}
