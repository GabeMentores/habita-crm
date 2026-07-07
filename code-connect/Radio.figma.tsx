import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-69", {
  props: {
    checked: figma.enum("State", { Selected: true, Unselected: false, Disabled: false }),
    disabled: figma.enum("State", { Disabled: true, Selected: false, Unselected: false }),
  },
  example: ({ checked, disabled }) => (
    <input type="radio" className="radio" defaultChecked={checked} disabled={disabled} />
  ),
});
