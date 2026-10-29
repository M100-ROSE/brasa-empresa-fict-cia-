import { metodoParagraph, pilares } from '../data/metodo'

export function Metodo() {
  return (
    <section className="section metodo" id="metodo" aria-labelledby="metodo-title">
      <div className="wrap metodo__grid">
        <div>
          <p className="overline">
            01 <span aria-hidden="true">/</span> O método
          </p>
          <h2 className="section__title" id="metodo-title">
            Aquecimento. Trabalho. Guerra.
          </h2>
        </div>
        <div className="metodo__body">
          <p>{metodoParagraph}</p>
          <ul className="pilar-list">
            {pilares.map((pilar) => (
              <li key={pilar.num}>
                <span className="pilar-list__num" aria-hidden="true">
                  {pilar.num}
                </span>
                <strong>{pilar.title}</strong> {pilar.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
