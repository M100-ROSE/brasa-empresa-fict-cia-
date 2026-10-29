import { heroFacts, proximaTurma } from '../data/hero'
import { Btn } from './Btn'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__beam"></span>
        <span className="hero__beam hero__beam--two"></span>
      </div>

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="overline">
            Consolação, São Paulo <span aria-hidden="true">·</span> desde 2020
          </p>
          <h1 className="hero__title" id="hero-title">
            Chega de<br />treino<br /><em>morno.</em>
          </h1>
          <p className="hero__lead">
            40 minutos. 16 pessoas. Zero desculpa. Treino funcional e boxe em turma fechada, na Rua
            Augusta.
          </p>

          <div className="hero__actions">
            <Btn href="#aula" variant="volt">
              Quero minha aula grátis <span aria-hidden="true">→</span>
            </Btn>
            <Btn href="#horarios" variant="ghost">
              Ver horários de hoje
            </Btn>
          </div>

          <ul className="hero__facts">
            {heroFacts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong> {fact.label}
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__next" aria-label="Próxima turma">
          <p className="hero__next-label">{proximaTurma.label}</p>
          <p className="hero__next-time">{proximaTurma.time}</p>
          <p className="hero__next-mod">
            {proximaTurma.modality} <span aria-hidden="true">·</span> {proximaTurma.level}
          </p>
          <p className="hero__next-spots">
            <span className="dot" aria-hidden="true"></span>
            {proximaTurma.spots} vagas restantes
          </p>
        </aside>
      </div>
    </section>
  )
}
