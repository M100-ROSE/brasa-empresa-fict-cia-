import { modalidades } from '../data/modalidades'
import { Tag } from './Tag'

export function Modalidades() {
  return (
    <section className="section modalidades" id="modalidades" aria-labelledby="modalidades-title">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="overline">
              02 <span aria-hidden="true">/</span> Modalidades
            </p>
            <h2 className="section__title" id="modalidades-title">
              Escolha o seu tipo de desconforto.
            </h2>
          </div>
          <p className="section__intro">
            Quatro frentes, um método. Você pode treinar todas na mesma semana — e vai querer.
          </p>
        </div>

        <ul className="card-grid">
          {modalidades.map((modalidade) => (
            <li className="card" key={modalidade.title}>
              <div
                className={`card__media card__media--${modalidade.media}`}
                aria-hidden="true"
              >
                <span className="card__ghost">{modalidade.ghost}</span>
                <span className="card__slash"></span>
              </div>
              <div className="card__body">
                <h3 className="card__title">{modalidade.title}</h3>
                <p className="card__text">{modalidade.text}</p>
                <ul className="tags">
                  {modalidade.tags.map((tag) => (
                    <Tag key={tag.label} variant={tag.variant}>
                      {tag.label}
                    </Tag>
                  ))}
                </ul>
                <a className="card__link" href="#horarios">
                  Ver turmas <span aria-hidden="true">→</span>
                  <span className="sr-only">{` ${modalidade.linkSrText}`}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
