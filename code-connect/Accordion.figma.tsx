import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=26-16", {
  props: { open: figma.enum("State", { Expanded: true, Collapsed: false }) },
  example: ({ open }) => (
    <div className="accordion__item">
      <div className="accordion__summary">Título</div>
      {open && <div className="accordion__content">Conteúdo…</div>}
    </div>
  ),
});
