import { Fragment } from 'react'
import { marqueeWords } from '../../data/hero'
import styles from './Marquee.module.css'

export function Marquee() {
  return (
    <div className={styles.marquee} role="region" aria-label="Força, suor, técnica, constância">
      <div className={styles.track}>
        <div className={styles.group}>
          {marqueeWords.map((word) => (
            <Fragment key={word}>
              <span>{word}</span>
              <span aria-hidden="true">·</span>
            </Fragment>
          ))}
        </div>
        <div className={styles.group} aria-hidden="true">
          {marqueeWords.map((word) => (
            <Fragment key={word}>
              <span>{word}</span>
              <span>·</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
