import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-62", {
  props: {
    checked: figma.enum("State", { Checked: true, Unchecked: false, Indeterminate: false, Disabled: false }),
    disabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ checked, disabled }) => (
    <input type="checkbox" className="checkbox" defaultChecked={checked} disabled={disabled} />
  ),
});
