# Marcelle Pacheco Nails — Site institucional

Site em Next.js 14 (App Router) + TypeScript + Tailwind CSS, seguindo a mesma
estrutura de pastas e componentes do projeto de referência (luvia).

## Como rodar localmente

```
npm install
npm run dev
```

Abra <http://localhost:3000>.

## Estrutura

```
src/
  app/
    layout.tsx        → fontes (Fraunces + Inter) e metadata
    page.tsx           → composição das seções
    globals.css
  components/
    Header, Footer, Hero, About, Services, Courses (novo), Portfolio,
    Testimonials, Contact
    Container.tsx, SectionTitle.tsx, Button.tsx, Icon.tsx → componentes base
    ServiceCard.tsx, CourseCard.tsx, PortfolioCard.tsx → cards das seções
  data/
    services.ts, courses.ts, portfolio.ts, testimonials.ts
  lib/
    constants.ts        → WHATSAPP_NUMBER, WHATSAPP_MESSAGE, INSTAGRAM_URL, NAV_LINKS
  utils/
    cn.ts
public/
  images/
    fotos/       → hero e sobre
    portfolio/   → 6 trabalhos
    feedbacks/   → prints de depoimentos
    avatars/     → foto de perfil dos depoimentos
    logo/        → ícone/logo
```

## Identidade visual

Paleta definida como tokens no `tailwind.config.ts`:

- `sky` `#A8D5E2` (com `sky.light` `#C4E0F0` e `sky.dark` `#7CB9CE`) — azul bebê,
  usado no header, botões primários e detalhes de destaque.
- `rose` `#FF2A8C` (com `rose.light` `#FF6FB0` e `rose.dark` `#E91E8C`) — rosa
  choque, usado em CTAs (WhatsApp), links, ícones e hovers.
- `paper` `#FAFAFA` — fundo principal.
- `blush` `#F3F9FB` — fundo das seções alternadas (off-white).
- `ink` `#1A1A2E` — texto principal.
- `mist` `#555570` — texto secundário.

## Antes de publicar

- As imagens em `public/images/` são placeholders em SVG — substitua pelas
  fotos reais da Marcelle assim que estiverem disponíveis (mesmos nomes de
  arquivo, ou atualize os caminhos em `src/data/*.ts`).
- Preencha `EMAIL` em `src/lib/constants.ts` quando houver um e-mail de
  contato — o botão aparece automaticamente na seção de Contato assim que o
  valor for definido.
- Ajuste `DEVELOPER_NAME` e `DEVELOPER_URL` em `src/lib/constants.ts` com o
  crédito do desenvolvedor.
- Os depoimentos em `src/data/testimonials.ts` usam prints placeholder —
  substitua por prints reais de mensagens das clientes.
