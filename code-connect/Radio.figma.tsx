import figma from "@figma/code-connect";
import Radio from "../src/components/ui/Radio";

figma.connect(Radio, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-69", {
  props: {
    checked: figma.enum("State", { Selected: true, Unselected: false, Disabled: false }),
    disabled: figma.enum("State", { Disabled: true, Selected: false, Unselected: false }),
  },
  example: ({ checked, disabled }) => <Radio checked={checked} disabled={disabled} onChange={() => {}} />,
});
