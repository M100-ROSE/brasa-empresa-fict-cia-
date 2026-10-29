import { CtaFinal } from './components/CtaFinal'
import { Hero } from './components/Hero'
import { Horarios } from './components/Horarios'
import { Marquee } from './components/Marquee'
import { Metodo } from './components/Metodo'
import { Modalidades } from './components/Modalidades'
import { Planos } from './components/Planos'
import { Prova } from './components/Prova'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { SkipLink } from './components/SkipLink'

export default function App() {
  return (
    <>
      <SkipLink />

      <SiteHeader />

      <main id="conteudo">
        <Hero />
        <Marquee />
        <Metodo />
        <Modalidades />
        <Horarios />
        <Planos />
        <Prova />
        <CtaFinal />
      </main>

      <SiteFooter />
    </>
  )
}
