# Habita CRM — Design System + App

Design system e tela de exemplo do Habita CRM (imobiliário).
Tokens (light+dark), 24 famílias de componentes, 41 ícones — em CSS e React.

- **Figma:** https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita

## Rodar o app React
```bash
npm install
npm run dev
```
Abre em http://localhost:5173

## Estrutura
- `src/` — app React (Vite): styles, lib, hooks, components/ui, components/feature, screens
- `design-system/` — biblioteca CSS avulsa (tokens, componentes, ícones) para reuso
- `demo/index.html` — versão single-file, abre direto no navegador

## Dark mode
`<html data-theme="dark">` — tudo troca via CSS variables.
