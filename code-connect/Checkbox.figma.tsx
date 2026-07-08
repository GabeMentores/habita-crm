import figma from "@figma/code-connect";
import Checkbox from "../src/components/ui/Checkbox";

figma.connect(Checkbox, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-62", {
  props: {
    checked: figma.enum("State", { Checked: true, Unchecked: false, Indeterminate: false, Disabled: false }),
    indeterminate: figma.enum("State", { Indeterminate: true, Checked: false, Unchecked: false, Disabled: false }),
    disabled: figma.enum("State", { Disabled: true, Checked: false, Unchecked: false, Indeterminate: false }),
  },
  example: ({ checked, indeterminate, disabled }) => (
    <Checkbox checked={checked} indeterminate={indeterminate} disabled={disabled} onChange={() => {}} />
  ),
});
