import figma from "@figma/code-connect";
import Badge from "../src/components/ui/Badge";

figma.connect(Badge, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-24", {
  props: {
    solid: figma.enum("Style", { Solid: true, Soft: false }),
    tone: figma.enum("Status", { Success: "success", Warning: "warning", Critical: "critical", Error: "error", Info: "info", Neutral: "neutral" }),
    label: figma.string("Label"),
  },
  example: ({ solid, tone, label }) => <Badge tone={tone} solid={solid}>{label}</Badge>,
});
