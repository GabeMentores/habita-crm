import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-37", {
  props: { label: figma.string("Label") },
  example: ({ label }) => <div className="tooltip">{label}</div>,
});
