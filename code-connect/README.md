# Figma Code Connect — Habita CRM

Liga as 24 famílias de componentes do Figma aos componentes React / classes CSS.
Os snippets aparecem no Dev Mode do Figma ao selecionar cada componente.

## Publicar (requer assento Dev/Full em plano Org/Enterprise)
```bash
npm i -D @figma/code-connect
export FIGMA_ACCESS_TOKEN="seu_token"
npx figma connect publish
```

## Cobertura (24/24)
Button, Badge, Avatar, TextField, KpiCard, Toast, Dialog, BrandMark, Table,
Switch, Checkbox, Radio, Tag, Select, Alert, Tab, TableRow, SidebarToggle,
NavItem, Menu, Tooltip, EmptyState, SideDrawer, Accordion.

Componentes com contraparte React importam o componente; os demais (Table,
Tab) usam snippet com as classes CSS do design system.
