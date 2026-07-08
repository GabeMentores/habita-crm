import figma from "@figma/code-connect";
import Tag from "../src/components/ui/Tag";

figma.connect(Tag, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-51", {
  props: {
    color: figma.enum("Color", { Blue: "blue", Violet: "violet", Teal: "teal", Bronze: "bronze", Slate: "slate", Cyan: "cyan" }),
    label: figma.string("Label"),
  },
  example: ({ color, label }) => <Tag color={color}>{label}</Tag>,
});
