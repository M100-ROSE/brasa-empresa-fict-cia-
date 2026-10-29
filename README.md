# BRASA — site

Home institucional da BRASA, centro fictício de treinamento funcional e boxe na Rua Augusta
(Consolação, São Paulo). Projeto React + TypeScript com Vite, construído a partir da versão
estática original em `site/`.

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

## Estrutura

- `index.html` — documento base (head, fontes e `#root`).
- `src/main.tsx` — ponto de entrada React.
- `src/App.tsx` — composição das seções da home.
- `src/components/` — componentes de cada bloco da página.
- `src/data/` — conteúdo tipado (horários, modalidades, planos, depoimentos, navegação).
- `src/styles/global.css` — CSS da home, portado de `site/styles.css`.

## Versão estática original

A pasta `site/` contém a versão estática original (`index.html` + `styles.css`), mantida
como referência legada. Não é usada pelo build do Vite.
