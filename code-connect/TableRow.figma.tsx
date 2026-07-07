import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=26-97", {
  props: { selected: figma.enum("State", { Selected: true, Default: false, Zebra: false, Hover: false }) },
  example: ({ selected }) => (
    <tr aria-selected={selected}><td><input type="checkbox" className="checkbox" /></td><td>…</td></tr>
  ),
});
