# BRASA — site

Home institucional da BRASA, centro fictício de treinamento funcional e boxe na Rua Augusta
(Consolação, São Paulo). Projeto React 19 + TypeScript com Vite e CSS Modules.

## Como rodar

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/`.

## Scripts

- `npm run dev` — servidor de desenvolvimento do Vite.
- `npm run build` — checagem de tipos (`tsc -b`) e build de produção.
- `npm run preview` — serve o build de `dist/` localmente.

## Estrutura

```
index.html                 documento base (head, fontes e #root)
src/
  main.tsx                 ponto de entrada React
  App.tsx                  composição das seções da home
  styles/
    global.css             tokens, reset, foco, seleção, utilitário .sr-only e reduced motion
    layout.module.css      utilitário compartilhado de largura (.wrap)
    typography.module.css  título de seção compartilhado (.sectionTitle)
  components/
    ui/                    componentes reutilizáveis (Btn, Tag, Brand, Section, SectionHead, Overline, SkipLink)
    sections/              blocos da página (SiteHeader, Hero, Marquee, Metodo, Modalidades,
                           Horarios, Planos, Prova, CtaFinal, SiteFooter)
  data/                    conteúdo tipado (hero, método, modalidades, horários, planos,
                           depoimentos, navegação)
```

Cada componente tem seu próprio `*.module.css`; não há folha de estilo global de seção.
