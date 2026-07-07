import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-51", {
  props: {
    color: figma.enum("Color", { Blue: "blue", Violet: "violet", Teal: "teal", Bronze: "bronze", Slate: "slate", Cyan: "cyan" }),
    label: figma.string("Label"),
  },
  example: ({ color, label }) => <span className={`tag tag--${color}`}>{label}</span>,
});
