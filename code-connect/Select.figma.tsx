import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=23-38", {
  props: { disabled: figma.enum("State", { Disabled: true, Default: false, Focus: false }) },
  example: ({ disabled }) => (
    <select className="select" disabled={disabled}><option>Selecione…</option></select>
  ),
});
