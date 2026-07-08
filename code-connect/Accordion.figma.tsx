import figma from "@figma/code-connect";
import { AccordionItem } from "../src/components/ui/Accordion";

figma.connect(AccordionItem, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=26-16", {
  props: { open: figma.enum("State", { Expanded: true, Collapsed: false }) },
  example: ({ open }) => <AccordionItem title="Título" defaultOpen={open}>Conteúdo…</AccordionItem>,
});
