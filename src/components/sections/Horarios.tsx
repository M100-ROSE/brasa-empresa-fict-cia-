import { horarios } from '../../data/horarios'
import { Btn } from '../ui/Btn'
import { Section } from '../ui/Section'
import { SectionHead } from '../ui/SectionHead'
import styles from './Horarios.module.css'

function spotsClassName(spots: number, isFull: boolean | undefined): string {
  if (isFull) {
    return styles.spots
  }

  return spots <= 3 ? `${styles.spots} ${styles.spotsLow}` : styles.spots
}

export function Horarios() {
  return (
    <Section id="horarios" labelledBy="horarios-title">
      <SectionHead
        id="horarios-title"
        overline={
          <>
            03 <span aria-hidden="true">/</span> Horários
          </>
        }
        title="Hoje na Augusta."
        intro="Turmas de até 16 pessoas. Não trabalhamos com lista de espera."
      />

      <table className={styles.table}>
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
            <tr key={horario.time} className={horario.isFull ? styles.isFull : undefined}>
              <td className={styles.time}>{horario.time}</td>
              <td className={styles.mod}>{horario.modality}</td>
              <td data-label="Nível">{horario.level}</td>
              <td
                data-label="Vagas"
                className={spotsClassName(horario.spots, horario.isFull)}
              >
                {horario.isFull ? 'Lotado' : `${horario.spots} vagas`}
              </td>
              <td className={styles.action}>
                {horario.isFull ? (
                  <span className={styles.full}>Sem vagas</span>
                ) : (
                  <Btn href="#aula" variant="ghost" size="row">
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

      <p className={styles.note}>
        Vagas atualizadas hoje, 06h40. Reservas fecham 2 horas antes de cada turma.
      </p>
    </Section>
  )
}
