import figma from "@figma/code-connect";
import TableRow from "../src/components/ui/TableRow";

figma.connect(TableRow, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=26-97", {
  props: { selected: figma.enum("State", { Selected: true, Default: false, Zebra: false, Hover: false }) },
  example: ({ selected }) => (
    <TableRow selected={selected}><td><input type="checkbox" className="checkbox" /></td><td>…</td></TableRow>
  ),
});
