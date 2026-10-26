# Briefing — BRASA

**Centro de treinamento funcional e boxe**
Versão 1.0 · Responsável: Day · 26/10/2026 · Status: pronto para design

---

## 1. Visão geral

| Item | Definição |
|---|---|
| **Nicho** | Fitness de alta intensidade — centro boutique de treinamento funcional e boxe |
| **Público** | Adultos de 22 a 40 anos, urbanos, que já treinam ou querem sair do sedentarismo; valorizam performance, comunidade e resultado visível. Consomem esporte, música e cultura de rua. |
| **Objetivo do site** | Converter visitantes em aulas experimentais gratuitas e vendas de plano, com sensação de escassez real (turmas limitadas). |
| **Local fictício** | Galpão na Rua Augusta, 1.480 — Consolação, São Paulo/SP. Unidade 2 em Curitiba. |
| **Tom de voz** | Direto, imperativo, competitivo e sem eufemismo. Fala como treinador, não como marca de bem-estar. Humor seco. |

**Promessa central:** "Treine na brasa." Aqui o desconforto é parte do método.

**Conversões principais**
1. Aula experimental gratuita (primária).
2. Escolher plano e horário.
3. Ver grade de horários.

---

## 2. Sentimento alvo

**Sentimento alvo: energia, urgência e movimento.**

**Declaração:** o visitante deve sentir o corpo pronto para levantar da cadeira, com a impressão de que a turma começa em cinco minutos.

Como o design produz isso:

- **Contraste extremo:** preto quase absoluto `#0B0B0C` com verde-volt `#D8FF2E` e vermelho-sinal `#FF3B1F`. Nada de meio-tom.
- **Tipografia gigante e condensada:** Anton em 96–160 px, entrelinha 0,88, caixa alta. O título ocupa a tela como um cartaz de rua.
- **Full-bleed e diagonais:** fotos sangradas, cortes diagonais entre seções, nada de cartão centralizado com sombra.
- **Ritmo quebrado:** blocos de 100 vh, faixas marquee, números que sobem, scroll horizontal na grade de modalidades.
- **Fotografia de esforço:** suor, movimento congelado, grão, preto e branco com duotone sutil. Zero pose sorrindo.
- **Motion rápido:** 120–180 ms, sem easing decorativo. Hover responde como um soco.
- **Urgência concreta:** "Turma de 18h — 3 vagas", horários reais, contador de vagas por horário (não countdown falso).

---

## 3. Identidade verbal

**Nome:** BRASA
**Justificativa:** uma palavra, duas sílabas, imagem de calor e combustão. É o estado entre o fogo e a cinza — exatamente o esforço do treino. Grita bem em camiseta e não soa genérica como "Fit".

**Tagline:** *Treine na brasa.*

**Headlines de exemplo**
1. "Chega de treino morno."
2. "40 minutos. Sem espelho, sem fila, sem desculpa."
3. "O relógio não para. Você também não."
4. "A primeira aula é grátis. A segunda dói. A terceira vicia."
5. "Seu limite de hoje não é o de amanhã."

**Microcopy de apoio**
- CTA principal: "Quero minha aula grátis"
- CTA secundário: "Ver horários"
- Formulário: "Qual é o seu nível hoje?" (Nunca treinei / Voltei agora / Treino 3x+)
- Confirmação: "Vaga reservada. Chegue 10 minutos antes. Traga água e más intenções."
- Aviso: "Turmas de até 16 pessoas. Não trabalhamos com lista de espera."

**Vocabulário preferido:** treino, turma, rounds, intensidade, técnica, constância, quebrar.
**Vocabulário proibido:** bem-estar, equilíbrio, autocuidado, jornada, "seu melhor você", emagrecimento milagroso.

---

## 4. Paleta de cores

| Papel | Nome | HEX | Uso |
|---|---|---|---|
| Primária | Volt | `#D8FF2E` | CTAs, palavras-chave, linhas de destaque, marquee |
| Secundária | Vermelho-sinal | `#FF3B1F` | Alertas de vagas, indicadores ao vivo, tags de intensidade |
| Fundo | Preto-brasa | `#0B0B0C` | Fundo global |
| Superfície | Grafite | `#141416` | Cards, faixas alternadas, header sólido |
| Texto | Branco-osso | `#F2F2ED` | Títulos e corpo |
| Texto suave | Cinza-fumaça | `#9A9A93` | Legendas, metadados, texto secundário |
| Borda | Chumbo | `#2A2A2E` | Divisores de 1 px, bordas de input |
| Apoio | Cinza-claro | `#D6D6CF` | Ícones inativos, texto sobre foto |

**Regras de contraste (WCAG 2.2)**

| Combinação | Razão | Nível |
|---|---|---|
| `#F2F2ED` sobre `#0B0B0C` | 17,5:1 | AAA |
| `#D8FF2E` sobre `#0B0B0C` | 17,1:1 | AAA |
| `#0B0B0C` sobre `#D8FF2E` | 17,1:1 | AAA |
| `#FF3B1F` sobre `#0B0B0C` | 5,5:1 | AA |
| `#9A9A93` sobre `#0B0B0C` | 7,0:1 | AA |
| `#F2F2ED` sobre `#141416` | 16,4:1 | AAA |
| `#FF3B1F` sobre `#F2F2ED` | 3,2:1 | Apenas texto ≥ 24 px ou elementos gráficos |

**Restrições:** vermelho nunca em corpo de texto pequeno sobre fundo claro; volt nunca como fundo de texto longo (usar só em botões, tags e palavras isoladas); nenhum gradiente entre as cores da paleta.

---

## 5. Tipografia

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display | **Anton** (Google Fonts) | 400 (único) | H1, H2, números, marquee, palavras de impacto |
| Subtítulos / UI | **Barlow Condensed** (Google Fonts) | 600, 700 | Overlines, botões, navegação, labels, tabela de horários |
| Corpo | **Inter** (Google Fonts) | 400, 600 | Parágrafos, descrições, formulários, FAQ |

**Escala desktop (base 16 px)**

| Token | px | rem | Entrelinha | Letter-spacing |
|---|---:|---:|---:|---:|
| Hero | 160 | 10 | 144 px (0.90) | −0,03em |
| Display | 128 | 8 | 112 px (0.875) | −0,03em |
| H1 | 96 | 6 | 88 px (0.92) | −0,02em |
| H2 | 64 | 4 | 60 px (0.94) | −0,02em |
| H3 | 40 | 2.5 | 40 px (1.00) | −0,01em |
| H4 | 28 | 1.75 | 30 px (1.07) | 0 |
| Lead | 24 | 1.5 | 32 px (1.33) | 0 |
| Corpo | 18 | 1.125 | 28 px (1.56) | 0 |
| Corpo pequeno | 16 | 1.0 | 24 px (1.5) | 0 |
| Label | 14 | 0.875 | 18 px (1.29) | 0,08em, caixa alta |
| Micro | 12 | 0.75 | 16 px (1.33) | 0,04em |

**Escala mobile (≤ 767 px):** Hero 56/52; Display 48/46; H1 40/38; H2 32/32; H3 26/28; Lead 20/28; Corpo 16/26; Label 13/18; Micro 11/15.

**Regras:** Anton apenas em caixa alta; nunca em parágrafo; máximo de 6 palavras por linha de display; Barlow Condensed 700 para botões; Inter para qualquer texto acima de 2 linhas. Números em `font-variant-numeric: tabular-nums` nos horários.

---

## 6. Layout e componentes

### Direção de layout — **full-bleed imersivo com cortes diagonais**

Sem largura máxima no hero: a tipografia e a foto ocupam 100% da viewport. Conteúdo interno limitado a **1600 px** com margem de **24 px** (mobile) e **48 px** (desktop). Grid de 12 colunas, gutter **24 px**. Seções alternam entre preto, grafite, foto full-bleed e faixa volt.

- Hero de **100 svh**, título ancorado no canto inferior esquerdo, ocupando de 3 a 5 linhas; foto em preto e branco com overlay de 55% e recorte diagonal no rodapé.
- **Cortes diagonais** de 6° entre seções (clip-path), usados no máximo 3 vezes na home.
- **Marquee** horizontal de 20 s com palavras ("FORÇA · SUOR · TÉCNICA · CONSTÂNCIA ·").
- **Scroll horizontal** na seção de modalidades: 4 painéis de 80 vw com snap e botões anterior/próximo.
- **Faixa de estatísticas** com 3 números em 96 px (ex.: 1.200 alunos, 18 treinadores, 6 anos).
- Cards com **raio 0** e borda de 1 px; sem sombra. Foto sempre no topo, título sobreposto.
- Header fixo de 72 px, transparente no topo, preto sólido após 40 px de scroll. CTA volt sempre visível à direita.

### Breakpoints

| Nome | Largura | Grid | Comportamento |
|---|---:|---|---|
| XS | 360–479 | 4 col, gutter 16 | Hero 56 px; scroll horizontal vira carrossel com snap; CTA fixo no rodapé |
| SM | 480–767 | 4 col, gutter 16 | Duas colunas para horários |
| MD | 768–1023 | 8 col, gutter 20 | Grade de horários em tabela; menu completo |
| LG | 1024–1279 | 12 col, gutter 24 | Scroll horizontal ativo; hero 120 px |
| XL | 1280–1599 | 12 col, gutter 24 | Hero 160 px |
| 2XL | ≥ 1600 | 12 col | Conteúdo centralizado em 1600 px |

### Componentes e estados

**Botão primário (volt)**
- Default: fundo `#D8FF2E`, texto `#0B0B0C`, altura 56 px, padding 28 px, raio 0, Barlow Condensed 700 15 px, caixa alta, letter-spacing 0,08em.
- Hover: fundo transparente, borda 2 px volt, texto volt; transição 120 ms.
- Focus: contorno branco de 2 px + contorno volt de 2 px com offset 2 px.
- Active: `translateY(2px)`.
- Disabled: fundo `#2A2A2E`, texto `#6E6E68`.
- Loading: barra volt de 2 px preenchendo da esquerda em 800 ms + texto "RESERVANDO".

**Botão secundário:** transparente, borda 2 px `#F2F2ED`, texto branco; hover inverte para branco com texto preto.

**Card de modalidade:** imagem 3:4 full-bleed, gradiente preto de 0 a 80% no rodapé (permitido apenas para legibilidade), título Anton 40 px, 3 tags de intensidade (volt, laranja, vermelho), link "VER TURMAS →". Hover: imagem `scale(1.04)` em 180 ms e linha volt de 4 px na base.

**Tabela de horários:** linhas de 64 px, borda inferior 1 px `#2A2A2E`; horário em Barlow Condensed 700 24 px; vagas em vermelho quando ≤ 3; hover de linha `#141416`; linha esgotada com opacidade 40% e label "LOTADO".

**Campo de formulário:** altura 56 px, fundo transparente, borda 1 px `#2A2A2E`, raio 0, texto branco; label em caixa alta 12 px; foco borda volt 2 px; erro borda vermelha + mensagem 14 px; sem placeholder como label.

**Tag de intensidade:** 3 níveis — "MÉDIO" (contorno volt), "ALTO" (fundo volt/texto preto), "BRUTAL" (fundo vermelho/texto preto).

**Contador de vagas:** número em Anton 28 px + label "VAGAS RESTANTES"; atualiza por API a cada 60 s; se esgotado, vira "LOTADO" e o CTA é desabilitado.

### Animações

- Transições de UI: 120 ms `ease-out`; hover de imagem: 180 ms.
- Marquee: 20 s linear, pausa no hover e no foco; botão "Pausar" visível para leitores de tela e teclado.
- Entrada de seção: `clip-path` wipe da esquerda, 300 ms, uma única vez.
- Números: contagem de 800 ms ao entrar na viewport, uma vez.
- Nenhum parallax, nenhum vídeo de fundo com som, nenhum flash.
- `prefers-reduced-motion`: marquee vira lista estática, contadores mostram o valor final, wipes removidos.

---

## 7. Estrutura de páginas e conteúdo

### Mapa do site

1. Home
2. Modalidades (Boxe, Força, Condicionamento, Mobilidade)
3. Horários
4. Treinadores
5. Planos
6. Aula experimental
7. Unidades e contato

### Wireframe — Home

```
┌──────────────────────────────────────────────────────────────┐
│ BRASA   MODALIDADES  HORÁRIOS  PLANOS  UNIDADES  [AULA GRÁTIS]│ 72px
├──────────────────────────────────────────────────────────────┤
│ FOTO FULL-BLEED P&B + OVERLAY 55%                            │
│                                                              │
│  ┌────────────────────────────────────────────┐              │
│  │ OVERLINE: SÃO PAULO · DESDE 2020           │              │
│  │ CHEGA DE                                   │              │
│  │ TREINO                                     │              │
│  │ MORNO.                                     │              │
│  │ 40 min · 16 pessoas · 0 desculpa           │              │
│  │ [QUERO MINHA AULA GRÁTIS →]                │              │
│  └────────────────────────────────────────────┘              │
│                                              ↓ diagonal 6°   │
├──────────────────────────────────────────────────────────────┤
│ MARQUEE VOLT: FORÇA · SUOR · TÉCNICA · CONSTÂNCIA ·          │
├──────────────────────────────────────────────────────────────┤
│ 01 / O MÉTODO                                                │
│ Texto curto à esquerda (5 col) + 3 regras à direita (5 col)  │
│ "Aquecimento. Trabalho. Guerra. Recuperação."                 │
├──────────────────────────────────────────────────────────────┤
│ MODALIDADES — scroll horizontal, 4 painéis 80vw com snap     │
│ [BOXE] [FORÇA] [CONDICIONAMENTO] [MOBILIDADE]                │
│                                            ‹ 01/04 ›         │
├──────────────────────────────────────────────────────────────┤
│ NÚMEROS — 1.200 alunos · 18 treinadores · 6 anos             │
├──────────────────────────────────────────────────────────────┤
│ FOTO FULL-BLEED + CITAÇÃO: "AQUI NINGUÉM TREINA NO ESCURO."  │
├──────────────────────────────────────────────────────────────┤
│ HORÁRIOS DE HOJE — tabela densa (6 linhas) + [VER GRADE]     │
├──────────────────────────────────────────────────────────────┤
│ PLANOS — 3 colunas, sem arredondamento, volt no plano livre  │
├──────────────────────────────────────────────────────────────┤
│ TREINADORES — 4 retratos 1:1, nome e especialidade           │
├──────────────────────────────────────────────────────────────┤
│ DEPOIMENTOS — 3 frases curtas, sem foto, nome + tempo de casa│
├──────────────────────────────────────────────────────────────┤
│ CTA FINAL — fundo volt, texto preto: "A PRIMEIRA DÓI.        │
│ A SEGUNDA VICIA." [RESERVAR AULA]                            │
├──────────────────────────────────────────────────────────────┤
│ Rodapé preto: endereço, horários, Instagram, WhatsApp        │
└──────────────────────────────────────────────────────────────┘
```

### Conteúdo por página

**Home**
- Hero: H1 "CHEGA DE TREINO MORNO.", subhead "40 minutos. 16 pessoas. Zero desculpa.", CTA e selo "Primeira aula gratuita".
- Método: texto manifesto de 80 palavras + 3 pilares (Técnica antes de carga; Intensidade com critério; Comunidade que cobra presença).
- Modalidades: 4 cards com descrição de 2 linhas e intensidade.
- Números: provas concretas, com data de atualização no rodapé da seção.
- Horários de hoje: 6 linhas com vagas reais e CTA por linha.
- Planos: 3x/semana R$ 389/mês; Livre R$ 489/mês; Personal 1:1 R$ 220/sessão. Sem "a partir de".
- Treinadores: 4 perfis com credencial (CREF) e especialidade.
- Depoimentos: frases de até 12 palavras, nome + tempo de casa.
- Local: endereço, estacionamento, vestiário, horários.

**Horários:** tabela por dia e unidade, filtro por modalidade e nível, legenda de vagas, CTA em cada linha. Atualização manual diária + integração com o sistema de reservas.

**Planos:** comparativo com o que está incluído, política de cancelamento, taxa de matrícula, FAQ. CTA para aula grátis antes do checkout.

**Aula experimental:** formulário de 4 campos (nome, WhatsApp, nível, horário), escolha de horário com vagas, confirmação imediata e instruções de chegada.

**Treinadores:** foto P&B, nome, CREF, modalidade, uma frase de filosofia, horários.

---

## 8. Acessibilidade e performance

**Acessibilidade**
- Contraste AA em todo texto; volt sobre preto é AAA e pode ser usado em labels pequenos.
- Vermelho apenas em textos ≥ 24 px ou elementos gráficos com ícone + texto.
- Foco visível em todos os controles: anel branco de 2 px + volt de 2 px, offset 2 px.
- Áreas de toque ≥ 48×48 px; linhas de horário com 64 px.
- Scroll horizontal com botões acessíveis, `tabindex` e suporte a teclado; nunca esconder conteúdo atrás de hover.
- Faixa rolante (marquee) com controle de pausa; nenhum movimento acima de 3 flashes por segundo.
- Formulários com label visível, erros vinculados e texto de ajuda; não usar apenas cor para "lotado".
- Hierarquia semântica correta; vídeos sem autoplay, com legenda e transcrição.
- `prefers-reduced-motion` desliga marquee, contadores e wipes.
- Link "Pular para o conteúdo" no topo.

**Performance (metas)**
- LCP < 1,8 s em 4G; CLS < 0,05; INP < 150 ms.
- Peso da home < 1,2 MB; hero em AVIF com `fetchpriority="high"`; demais imagens lazy.
- Anton e Barlow Condensed em WOFF2 com subset latino; Inter variável apenas 400/600.
- Sem vídeo de fundo; se houver reel, poster estático e carregamento sob clique.
- Animações em CSS/transform; sem biblioteca de scroll.
- Lighthouse ≥ 95 em Performance, Acessibilidade e SEO no mobile.

---

## 9. O que NÃO fazer

**Anti-padrões visuais proibidos**
- Gradientes suaves, roxo, azul corporativo, "tech fitness" com glow.
- Cantos arredondados em cards, botões ou fotos; sombras difusas.
- Fotos de banco de imagem com pessoas sorrindo para a câmera, jaleco, prancha de ioga em jardim.
- Tipografia serifada, script, weight 300, entrelinha frouxa.
- Layout centralizado com cards de 3 colunas iguais e muito espaço em branco.
- Ícones outline finos; ilustrações vetoriais fofas; emojis como ícones.
- Copy de bem-estar ("equilíbrio", "jornada", "seu melhor você") ou promessa de resultado em 30 dias.
- Countdown falso, vagas inventadas, "últimas unidades" sem dado real.
- Autoplay com som, flash, cursor customizado, scroll hijacking.
- Vermelho em parágrafos longos ou como fundo de seção inteira.

---

## 10. Diferenciação vs os outros briefings

**Como esse site é diferente dos outros 4**

| Eixo | BRASA (este) | CASULO | TORNO | GIRA | LASTRO |
|---|---|---|---|---|---|
| Base cromática | Preto + volt + vermelho | Creme + sálvia + terracota | Marfim + espresso + ouro | Creme + coral + amarelo | Branco + navy + teal |
| Tipografia | Condensada industrial | Serif humanista + sans calorosa | Serif editorial + sans geométrica | Rounded + sans arredondada | Sans técnica + mono |
| Forma | Diagonais, 0 raio | Curvas orgânicas, arcos | Hairlines, 0 raio | Blobs, cartões 32 px | Grid modular, 8 px |
| Densidade | Média-alta, tipo gigante | Baixa, muito respiro | Baixa, margens amplas | Média, colagem | Alta, dados |
| Ritmo de motion | Rápido (120–180 ms) | Lento (600–700 ms) | Muito lento (800–1200 ms) | Saltitante (280–420 ms) | Discreto (150–200 ms) |
| Emoção | Urgência | Acolhimento | Exclusividade | Diversão | Controle |

- **vs CASULO:** BRASA é escuro, agressivo, condensado e orientado a ação imediata. CASULO é claro, curvo, serifado e convida a desacelerar.
- **vs TORNO:** ambos usam muito preto/branco, mas TORNO é marfim + ouro, tipografia pequena, margens enormes e nenhuma urgência. BRASA é volt + vermelho, tipo gigante e CTA em cada dobra.
- **vs GIRA:** as duas usam saturação, mas GIRA é clara, arredondada e fofa; BRASA é escura, reta e dura. Nenhuma cor coincide.
- **vs LASTRO:** LASTRO é denso em dados com paleta fria e sóbria; BRASA é denso em tipografia com paleta quente e agressiva. LASTRO não usa full-bleed nem diagonais.

**Teste de diferenciação:** sem logo e sem texto, a home de BRASA é reconhecível pelo fundo preto, pelo volt e pelos cortes diagonais. Nenhum outro briefing usa essa combinação.
