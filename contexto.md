# contexto.md — BRASA

Fonte de verdade sobre o estado do projeto para quem entrar agora. Leia antes de mexer no código.
O histórico fica no final e **nunca deve ser apagado**; entradas novas vão no topo dele.

---

## Preferências

- Comunicação e documentação em **português do Brasil**.
- Commits no padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`), curtos, um assunto por commit.
- Não alterar design, CSS ou conteúdo sem pedido explícito: o CSS (agora em CSS Modules) é o contrato visual e não existe mais cópia estática de referência.
- CSS em **CSS Modules** por componente: `styles.x` no JSX, `composes` para reúso, **sem `:global`**.
- TypeScript **strict**, sem `any`. `tsc --noEmit` precisa passar.
- Não versionar `node_modules/`, `dist/`, `.env` nem `.opencode/` (config local dos agentes).
- Projeto é uma empresa fictícia (portfólio/demonstração): nenhum dado real de cliente.

---

## Estado atual

Home institucional de uma página da **BRASA**, centro fictício de treinamento funcional e boxe na
Rua Augusta (Consolação, São Paulo). O site é uma landing page única, com âncoras internas e um
único CTA de conversão (aula experimental gratuita).

### Stack

| Item | Versão / escolha |
| --- | --- |
| React | 19 |
| TypeScript | 7 (`strict`, `noUnusedLocals`, `verbatimModuleSyntax`) |
| Vite | 8 (`@vitejs/plugin-react`) |
| CSS | CSS Modules: um `*.module.css` por componente + `src/styles/global.css` só com o que é global |
| Fontes | Anton, Barlow Condensed e Inter via Google Fonts (no `index.html`) |

### Estrutura de pastas

```
/
├── index.html              documento base: head, metas, fontes e <div id="root">
├── package.json            scripts e dependências
├── tsconfig.json           raiz (referências para app e node)
├── tsconfig.app.json       config do código em src/ (strict)
├── tsconfig.node.json      config do vite.config.ts
├── vite.config.ts          plugin React
├── .gitignore              node_modules, dist, dist-ssr, *.local, logs, editores
├── README.md               como rodar, build e estrutura
├── contexto.md             este arquivo
└── src/
    ├── main.tsx            createRoot + StrictMode + import do CSS global
    ├── App.tsx             composição das seções na ordem da página
    ├── components/
    │   ├── ui/             peças reutilizáveis, cada uma + seu .module.css
    │   │   ├── Btn.tsx            Btn.module.css
    │   │   ├── Tag.tsx            Tag.module.css
    │   │   ├── Brand.tsx          Brand.module.css
    │   │   ├── Section.tsx        Section.module.css
    │   │   ├── SectionHead.tsx    SectionHead.module.css
    │   │   ├── Overline.tsx       Overline.module.css
    │   │   └── SkipLink.tsx       SkipLink.module.css
    │   └── sections/       blocos da página, cada um + seu .module.css
    │       └── SiteHeader, Hero, Marquee, Metodo, Modalidades,
    │           Horarios, Planos, Prova, CtaFinal, SiteFooter
    ├── data/               conteúdo tipado (texto e listas)
    └── styles/
        ├── global.css              tokens, reset, foco, seleção, .sr-only, reduced motion (43 linhas)
        ├── layout.module.css       utilitário compartilhado `.wrap`
        └── typography.module.css   utilitário compartilhado `.sectionTitle`
```

Não existe mais `site/`, `briefing.md` nem `public/`. `node_modules/` existe localmente e está no
`.gitignore`; `dist/` é gerado pelo build e também é ignorado (apagado no estado atual).

### Convenções de CSS

- Cada componente importa o próprio módulo: `import styles from './X.module.css'` e usa
  `styles.x`. Não há folha de estilo global por seção.
- Reúso por **`composes`**, sem classes utilitárias globais:
  - `.wrap` (de `src/styles/layout.module.css`) — `Section.module.css`, `Hero.module.css`,
    `CtaFinal.module.css`, `SiteFooter.module.css`.
  - `.sectionTitle` (de `src/styles/typography.module.css`) — `SectionHead.module.css`,
    `Metodo.module.css`, `Prova.module.css`.
- **Nenhum `:global`** no projeto (verificado por busca). Classes condicionais são montadas com
  `[styles.x, cond ? styles.y : '', className].filter(Boolean).join(' ')`.
- `global.css` ficou só com o que é realmente global: variáveis (`:root`), reset (`box-sizing`,
  margens, listas, imagens), `:focus-visible`, `::selection`, `.sr-only` e o bloco universal de
  `prefers-reduced-motion`.

### Mapa de componentes

Ordem de renderização em `src/App.tsx`:

| Componente | Pasta | Seção / âncora | Papel |
| --- | --- | --- | --- |
| `SkipLink` | `ui/` | — | atalho "Pular para o conteúdo" para `#conteudo` |
| `SiteHeader` | `sections/` | topo | marca BRASA e navegação principal |
| `Hero` | `sections/` | `#inicio` | título, subtítulo, fatos e cartão da próxima turma |
| `Marquee` | `sections/` | — | faixa animada com as palavras-chave |
| `Metodo` | `sections/` | `#metodo` | texto do método + pilares numerados |
| `Modalidades` | `sections/` | `#modalidades` | cards de Boxe, Força, Condicionamento e Mobilidade |
| `Horarios` | `sections/` | `#horarios` | tabela de turmas do dia com vagas e CTA de reserva |
| `Planos` | `sections/` | `#planos` | três planos, com o "Livre" em destaque |
| `Prova` | `sections/` | `#prova` | números e depoimentos de alunos |
| `CtaFinal` | `sections/` | `#aula` | CTA final da aula experimental gratuita |
| `SiteFooter` | `sections/` | rodapé | navegação secundária, contato e endereço |

Contratos dos componentes compartilhados (`src/components/ui/`):

| Componente | Props | Renderiza |
| --- | --- | --- |
| `Btn` | `href`, `variant: 'volt' \| 'ghost' \| 'dark'` (obrigatória), `size?: 'header' \| 'row'`, `className?` | `<a>` |
| `Tag` | `variant: TagVariant` (`volt` \| `red` \| `outline` \| `''` para sem variante), `children` | `<li>` |
| `Brand` | `as?: 'a' \| 'p'` (padrão `a`), `href?` (padrão `#inicio`), `variant?: 'footer'` | marca (losango + "BRASA"); como link recebe `aria-label="BRASA — início"` |
| `Section` | `id`, `labelledBy`, `className?`, `wrapClassName?`, `children` | `<section aria-labelledby>` + `<div class="wrap">` |
| `SectionHead` | `id`, `overline`, `title`, `intro` | `<Overline>` + `<h2 id>` + parágrafo de intro |
| `Overline` | `children`, `dark?`, `className?` | `<p>` |
| `SkipLink` | nenhuma | `<a href="#conteudo">` |

### Mapa de dados (o que alimenta o quê)

| Arquivo | Exporta | Consumido por |
| --- | --- | --- |
| `src/data/navegacao.ts` | `headerNavLinks`, `footerNavLinks`, `footerContactLinks` | `SiteHeader`, `SiteFooter` |
| `src/data/hero.ts` | `heroFacts`, `proximaTurma`, `marqueeWords` | `Hero`, `Marquee` |
| `src/data/metodo.ts` | `metodoParagraph`, `pilares` | `Metodo` |
| `src/data/modalidades.ts` | `modalidades` (+ tipos `Modalidade`, `TagVariant`) | `Modalidades`, `Tag` |
| `src/data/horarios.ts` | `horarios` (+ tipo `Horario`) | `Horarios` |
| `src/data/planos.ts` | `planos` (+ tipos `Plano`, `PlanoCtaVariant`) | `Planos` |
| `src/data/depoimentos.ts` | `depoimentos`, `numeros` | `Prova` |

Regra: **texto e listas moram em `src/data/`**; componentes só renderizam. Ao adicionar turma,
modalidade, plano ou depoimento, mexa apenas no arquivo de dados correspondente.

### Scripts npm

| Script | O que faz |
| --- | --- |
| `npm install` | instala dependências |
| `npm run dev` | servidor de desenvolvimento do Vite |
| `npm run build` | `tsc -b && vite build` → gera `dist/` |
| `npm run preview` | serve o `dist/` localmente |

---

## Decisões tomadas

1. **Design de referência é o próprio código.** `site/` (HTML/CSS estático) e `briefing.md` foram
   removidos: o conteúdo já estava absorvido pelos componentes e pelos dados tipados. Não há mais
   cópia estática para comparar, então mudanças visuais se validam no navegador (build + inspeção),
   não por diff textual.
2. **CSS em CSS Modules, um arquivo por componente.** `global.css` só guarda o que é global. Reúso
   vem de `composes` (`wrap`, `sectionTitle`), não de classes utilitárias globais; `:global` é
   proibido no projeto.
3. **Conteúdo separado em `src/data/`**, tipado, para permitir trocar texto sem tocar em JSX.
4. **`reserveSrText` nos horários.** O texto do botão "Reservar" é só "Reservar", então cada turma
   carrega um complemento para leitores de tela (`aula das 18h de boxe`). Sem ele, seis botões
   idênticos ficam sem contexto no leitor de tela. Turma lotada (`isFull`) não gera botão: mostra
   "Sem vagas".
5. **`spots <= 3` marca vagas baixas** (classe `.spotsLow` de `Horarios.module.css`), conforme a
   regra herdada do HTML estático. Turma lotada ignora a classe de vagas baixas.
6. **Sem roteamento.** Site de uma página, navegação por âncoras (`#metodo`, `#horarios`, …).
7. **Sem `@types/node`.** O código não usa APIs de Node; o pacote saiu das dependências e
   `tsconfig.node.json` não declara mais `types: ["node"]`.
8. **`.opencode/` não é versionado** (config local dos agentes).

### Acessibilidade já embutida

`SkipLink` para `#conteudo`; `main` com `id="conteudo"`; cada seção é `aria-labelledby` do próprio
título; tabela de horários com `caption` e `th scope="col"`; textos apenas para leitor de tela com
`.sr-only`; elementos decorativos com `aria-hidden="true"`.

---

## Status do build

- `npm run build` verde (57 módulos) e `tsc --noEmit` sem erros nos dois tsconfig.
- Comparação do HTML renderizado em SSR **antes × depois** da modularização (ignorando hashes de
  classe): árvore, textos e atributos de a11y idênticos.
- Tamanhos do build atual: JS **239.329 B** (73.986 B gzip) e CSS **21.553 B** (5.211 B gzip).
- `node_modules/` e `dist/` fora do versionamento; `dist/` apagado no estado atual.
- Comandos: `npx tsc --noEmit -p tsconfig.app.json`, `npx tsc --noEmit -p tsconfig.node.json`,
  `npm run build`.

---

## Próximos passos possíveis

- [ ] **Passe visual nos breakpoints 480 / 720 / 900 / 1024** (não houve inspeção em navegador após a modularização).
- [ ] Formulário real de aula experimental em `#aula` (hoje o CTA só leva à seção), com validação e estado de envio.
- [ ] Página/seção de horários com filtro por modalidade e nível, em vez da tabela fixa de um dia.
- [ ] Integração com sistema de reservas (vaga em tempo real, em vez de números estáticos em `src/data/horarios.ts`).
- [ ] Deploy (Vercel/Netlify/GitHub Pages) com build do Vite e definição de domínio.
- [ ] SEO e compartilhamento: Open Graph, `sitemap.xml`, `robots.txt`, imagem social.
- [ ] Revisar performance e acessibilidade com Lighthouse antes de publicar.

---

## Histórico

### 2026-10-28 — Limpeza do legado estático e modularização com CSS Modules

**Solicitação original:** remover o legado estático (`site/`, `briefing.md`) já absorvido pelo
código, reorganizar os componentes em `ui/` e `sections/`, trocar o CSS global por CSS Modules
deduplicado com `composes` e enxugar o `global.css`; validar que nada muda visualmente, documentar,
commitar e enviar ao GitHub.

**O que foi feito**

1. Removidos com `git rm`: a pasta `site/` (`index.html`, `styles.css`) e `briefing.md`. O conteúdo
   já estava nos componentes e em `src/data/`; o briefing havia sido absorvido pelas decisões de
   design registradas neste arquivo.
2. Componentes reestruturados em duas pastas: `src/components/ui/` (`Btn`, `Tag`, `Section`,
   `SectionHead`, `Overline`, `SkipLink`, `Brand`) e `src/components/sections/` (`SiteHeader`,
   `Hero`, `Marquee`, `Metodo`, `Modalidades`, `Horarios`, `Planos`, `Prova`, `CtaFinal`,
   `SiteFooter`), cada um com seu `.module.css`. Os 13 arquivos antigos de `src/components/*.tsx`
   saíram.
3. `src/styles/global.css` reduzido a 43 linhas (tokens, reset, `:focus-visible`, `::selection`,
   `.sr-only`, bloco universal de reduced motion). Criados `layout.module.css` (`.wrap`) e
   `typography.module.css` (`.sectionTitle`).
4. Contratos ajustados: `Btn` usa `variant` (`volt`/`ghost`/`dark`) + `size` (`header`/`row`);
   `Tag` usa `variant` (`volt`/`red`/`outline`); `Overline` ganhou `dark`; `Brand` aceita
   `as`/`href`/`variant="footer"`.
5. Deduplicação via `composes` (`wrap` em 4 módulos, `sectionTitle` em 3) — sem `:global` em
   lugar nenhum.
6. CSS morto removido: `.btn--sm`, `.plan__currency`, `.plan__period` (zero uso) e o
   `className="footer__brand"` inerte do JSX.
7. `@types/node` removido de `package.json`/lock e `types: ["node"]` retirado de
   `tsconfig.node.json` (o build não usa APIs de Node).
8. `README.md` reescrito com a nova árvore e os scripts; `dist/` local apagado.
9. Validado: `tsc --noEmit` nos dois tsconfig, `npm run build` verde (57 módulos) e comparação SSR
   antes × depois do HTML (ignorando hashes) idêntica.

**Arquivos alterados**

- Novos: `src/components/ui/*` (7 componentes + 7 módulos), `src/components/sections/*`
  (10 componentes + 10 módulos), `src/styles/layout.module.css`, `src/styles/typography.module.css`.
- Modificados: `src/App.tsx`, `src/styles/global.css`, `package.json`, `package-lock.json`,
  `tsconfig.node.json`, `README.md`, `contexto.md`.
- Removidos: `site/index.html`, `site/styles.css`, `briefing.md`, os 13 arquivos de
  `src/components/*` e um campo de `@types/node` nas dependências.

**Pendências**

- [ ] Passe visual nos breakpoints 480 / 720 / 900 / 1024 (não houve inspeção em navegador).
- [ ] Formulário real de aula experimental.
- [ ] Horários com filtro por modalidade/nível.
- [ ] Integração com reservas em tempo real.
- [ ] Deploy em produção.

---

### 2026-10-28 — Migração do site para React + TypeScript (Vite)

**Solicitação original:** migrar o site estático `site/index.html` + `site/styles.css` para um
projeto React + TypeScript com Vite na raiz do repositório, sem mudança visual, de conteúdo ou de
acessibilidade; depois documentar, commitar e enviar ao GitHub.

**O que foi feito**

1. Criado o projeto Vite + React 19 + TypeScript na raiz (`index.html`, `package.json`,
   `tsconfig*.json`, `vite.config.ts`, `.gitignore`, `README.md`).
2. Portado o CSS de `site/styles.css` para `src/styles/global.css` **verbatim** (hash idêntico).
3. Quebrado o HTML estático em componentes: `SkipLink`, `SiteHeader`, `Hero`, `Marquee`, `Metodo`,
   `Modalidades`, `Horarios`, `Planos`, `Prova`, `CtaFinal`, `SiteFooter`, mais `Btn` e `Tag`.
4. Extraído o conteúdo para `src/data/` com tipos (`hero`, `navegacao`, `metodo`, `modalidades`,
   `horarios`, `planos`, `depoimentos`).
5. Preservadas as regras de acessibilidade do original: `reserveSrText` no botão de reserva e
   `spots <= 3` para vagas baixas.
6. Validado: `npm run build` verde, `tsc --noEmit` sem erros, conteúdo e classes iguais ao original.
7. Criado este `contexto.md` e preparado o commit da migração.

**Arquivos alterados**

- Novos: `index.html`, `package.json`, `package-lock.json`, `tsconfig.json`, `tsconfig.app.json`,
  `tsconfig.node.json`, `vite.config.ts`, `.gitignore`, `README.md`, `contexto.md`,
  `src/main.tsx`, `src/App.tsx`, `src/styles/global.css`, 13 arquivos em `src/components/`,
  7 arquivos em `src/data/`.
- Intocados: `site/index.html`, `site/styles.css`, `briefing.md`.

**Pendências**

- [ ] Formulário real de aula experimental.
- [ ] Horários com filtro por modalidade/nível.
- [ ] Integração com reservas em tempo real.
- [ ] Deploy em produção.

---

## Modelo para novas entradas

Copie o bloco abaixo para o **topo** da seção Histórico e preencha.

```markdown
### AAAA-MM-DD — Título curto da tarefa

**Solicitação original:** o que foi pedido, em uma ou duas frases.

**O que foi feito**

1. Passo objetivo.
2. Passo objetivo.

**Arquivos alterados**

- Novos: ...
- Modificados: ...
- Removidos: ...

**Pendências**

- [ ] Item pendente.
```
