import figma from "@figma/code-connect";
import Alert from "../src/components/ui/Alert";

figma.connect(Alert, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=24-47", {
  props: {
    tone: figma.enum("Type", { Info: "info", Success: "success", Warning: "warning", Error: "error" }),
    title: figma.string("Title"),
    body: figma.string("Body"),
  },
  example: ({ tone, title, body }) => <Alert tone={tone} title={title}>{body}</Alert>,
});
