import figma from "@figma/code-connect";
import Select from "../src/components/ui/Select";

figma.connect(Select, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=23-38", {
  props: { disabled: figma.enum("State", { Disabled: true, Default: false, Focus: false }) },
  example: ({ disabled }) => <Select disabled={disabled} options={["Opção 1", "Opção 2"]} />,
});
