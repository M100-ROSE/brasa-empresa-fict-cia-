import { horarios } from '../data/horarios'
import { Btn } from './Btn'

function spotsClassName(spots: number, isFull: boolean | undefined): string {
  if (isFull) {
    return 'schedule__spots'
  }

  return spots <= 3 ? 'schedule__spots schedule__spots--low' : 'schedule__spots'
}

export function Horarios() {
  return (
    <section className="section horarios" id="horarios" aria-labelledby="horarios-title">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="overline">
              03 <span aria-hidden="true">/</span> Horários
            </p>
            <h2 className="section__title" id="horarios-title">
              Hoje na Augusta.
            </h2>
          </div>
          <p className="section__intro">
            Turmas de até 16 pessoas. Não trabalhamos com lista de espera.
          </p>
        </div>

        <table className="schedule">
          <caption className="sr-only">
            Horários de hoje, segunda-feira, com vagas restantes por turma
          </caption>
          <thead>
            <tr>
              <th scope="col">Horário</th>
              <th scope="col">Modalidade</th>
              <th scope="col">Nível</th>
              <th scope="col">Vagas</th>
              <th scope="col">
                <span className="sr-only">Reserva</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((horario) => (
              <tr key={horario.time} className={horario.isFull ? 'is-full' : undefined}>
                <td className="schedule__time">{horario.time}</td>
                <td className="schedule__mod">{horario.modality}</td>
                <td data-label="Nível">{horario.level}</td>
                <td
                  data-label="Vagas"
                  className={spotsClassName(horario.spots, horario.isFull)}
                >
                  {horario.isFull ? 'Lotado' : `${horario.spots} vagas`}
                </td>
                <td className="schedule__action">
                  {horario.isFull ? (
                    <span className="schedule__full">Sem vagas</span>
                  ) : (
                    <Btn href="#aula" variant="ghost" className="btn--row">
                      Reservar
                      <span className="sr-only">
                        {horario.reserveSrText ? ` ${horario.reserveSrText}` : ''}
                      </span>
                    </Btn>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="schedule__note">
          Vagas atualizadas hoje, 06h40. Reservas fecham 2 horas antes de cada turma.
        </p>
      </div>
    </section>
  )
}
