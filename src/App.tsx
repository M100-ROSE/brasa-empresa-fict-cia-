import { CtaFinal } from './components/sections/CtaFinal'
import { Hero } from './components/sections/Hero'
import { Horarios } from './components/sections/Horarios'
import { Marquee } from './components/sections/Marquee'
import { Metodo } from './components/sections/Metodo'
import { Modalidades } from './components/sections/Modalidades'
import { Planos } from './components/sections/Planos'
import { Prova } from './components/sections/Prova'
import { SiteFooter } from './components/sections/SiteFooter'
import { SiteHeader } from './components/sections/SiteHeader'
import { SkipLink } from './components/ui/SkipLink'

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
