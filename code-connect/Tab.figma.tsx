import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=24-13", {
  props: {
    active: figma.enum("State", { Active: true, Default: false, Hover: false }),
    label: figma.string("Label"),
  },
  example: ({ active, label }) => (
    <button className={`tab ${active ? "tab--active" : ""}`}>{label}</button>
  ),
});
