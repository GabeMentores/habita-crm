import figma from "@figma/code-connect";
import Toast from "../src/components/ui/Toast";

figma.connect(Toast, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=24-65", {
  props: { msg: figma.string("Message") },
  example: ({ msg }) => <Toast msg={msg} show />,
});
