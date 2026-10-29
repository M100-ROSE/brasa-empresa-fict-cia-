# contexto.md — BRASA

Fonte de verdade sobre o estado do projeto para quem entrar agora. Leia antes de mexer no código.
O histórico fica no final e **nunca deve ser apagado**; entradas novas vão no topo dele.

---

## Preferências

- Comunicação e documentação em **português do Brasil**.
- Commits no padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`), curtos, um assunto por commit.
- Não alterar design, CSS ou conteúdo sem pedido explícito: o CSS é **portado verbatim** da versão estática e é o contrato visual.
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
| CSS | um único `src/styles/global.css`, sem framework e sem CSS-in-JS |
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
├── briefing.md             briefing original do projeto (legado, não apagar)
├── site/                   versão estática original (legado, não apagar)
│   ├── index.html
│   └── styles.css
└── src/
    ├── main.tsx            createRoot + StrictMode + import do CSS global
    ├── App.tsx             composição das seções na ordem da página
    ├── components/         um arquivo por bloco/peça da UI
    ├── data/               conteúdo tipado (texto e listas)
    └── styles/global.css   CSS da home (idêntico a site/styles.css)
```

`site/` fica fora do build do Vite: é referência histórica e serve de comparação visual/textual.
`node_modules/` e `dist/` existem localmente e estão no `.gitignore`.

### Mapa de componentes

Ordem de renderização em `src/App.tsx`:

| Componente | Seção / âncora | Papel |
| --- | --- | --- |
| `SkipLink` | — | atalho "Pular para o conteúdo" para `#conteudo` |
| `SiteHeader` | topo | marca BRASA e navegação principal |
| `Hero` | `#inicio` | título, subtítulo, fatos e cartão da próxima turma |
| `Marquee` | — | faixa animada com as palavras-chave |
| `Metodo` | `#metodo` | texto do método + pilares numerados |
| `Modalidades` | `#modalidades` | cards de Boxe, Força, Condicionamento e Mobilidade |
| `Horarios` | `#horarios` | tabela de turmas do dia com vagas e CTA de reserva |
| `Planos` | `#planos` | três planos, com o "Livre" em destaque |
| `Prova` | `#prova` | números e depoimentos de alunos |
| `CtaFinal` | `#aula` | CTA final da aula experimental gratuita |
| `SiteFooter` | rodapé | navegação secundária, contato e endereço |

Componentes reutilizáveis:

| Componente | Papel |
| --- | --- |
| `Btn` | link estilizado como botão; variantes `volt`, `ghost`, `dark`; aceita `className` |
| `Tag` | item de lista de tags das modalidades; variantes `volt`, `red`, `outline` ou sem variante |

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

1. **CSS portado verbatim.** `src/styles/global.css` é byte a byte igual a `site/styles.css`
   (SHA-256 `1EAE02FA…E637C`). Migração sem mudança visual: qualquer refatoração de CSS é tarefa
   separada e precisa de validação visual.
2. **`site/` e `briefing.md` permanecem como legado.** Não são usados pelo build e não devem ser
   apagados; servem de referência para comparar conteúdo, classes e acessibilidade.
3. **Conteúdo separado em `src/data/`**, tipado, para permitir trocar texto sem tocar em JSX.
4. **`reserveSrText` nos horários.** O texto do botão "Reservar" é só "Reservar", então cada turma
   carrega um complemento para leitores de tela (`aula das 18h de boxe`). Sem ele, seis botões
   idênticos ficam sem contexto no leitor de tela. Turma lotada (`isFull`) não gera botão: mostra
   "Sem vagas".
5. **`spots <= 3` marca vagas baixas** (`schedule__spots--low`), conforme a regra herdada do HTML
   estático. Turma lotada ignora a classe de vagas baixas.
6. **Sem roteamento.** Site de uma página, navegação por âncoras (`#metodo`, `#horarios`, …).
7. **`.opencode/` não é versionado** (config local dos agentes).

### Acessibilidade já embutida

`SkipLink` para `#conteudo`; `main` com `id="conteudo"`; cada seção é `aria-labelledby` do próprio
título; tabela de horários com `caption` e `th scope="col"`; textos apenas para leitor de tela com
`.sr-only`; elementos decorativos com `aria-hidden="true"`.

---

## Status do build

- `npm run build` verde e `npx tsc --noEmit -p tsconfig.app.json` sem erros.
- Conteúdo textual e classes conferidos com `site/index.html`: idênticos.
- `node_modules/` e `dist/` fora do versionamento.

---

## Próximos passos possíveis

- [ ] Formulário real de aula experimental em `#aula` (hoje o CTA só leva à seção), com validação e estado de envio.
- [ ] Página/seção de horários com filtro por modalidade e nível, em vez da tabela fixa de um dia.
- [ ] Integração com sistema de reservas (vaga em tempo real, em vez de números estáticos em `src/data/horarios.ts`).
- [ ] Deploy (Vercel/Netlify/GitHub Pages) com build do Vite e definição de domínio.
- [ ] SEO e compartilhamento: Open Graph, `sitemap.xml`, `robots.txt`, imagem social.
- [ ] Revisar performance e acessibilidade com Lighthouse antes de publicar.
- [ ] Decidir o destino de `site/`: arquivar em `legacy/` ou remover quando a versão React estiver publicada.

---

## Histórico

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
