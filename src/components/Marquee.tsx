import { Fragment } from 'react'
import { marqueeWords } from '../data/hero'

export function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Força, suor, técnica, constância">
      <div className="marquee__track">
        <div className="marquee__group">
          {marqueeWords.map((word) => (
            <Fragment key={word}>
              <span>{word}</span>
              <span aria-hidden="true">·</span>
            </Fragment>
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
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
