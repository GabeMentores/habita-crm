import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-78", {
  props: {
    checked: figma.enum("State", { On: true, Off: false, Disabled: false }),
    disabled: figma.enum("State", { Disabled: true, On: false, Off: false }),
  },
  example: ({ checked, disabled }) => (
    <input type="checkbox" className="switch" defaultChecked={checked} disabled={disabled} />
  ),
});
