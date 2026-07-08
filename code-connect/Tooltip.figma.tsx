import figma from "@figma/code-connect";
import Tooltip from "../src/components/ui/Tooltip";

figma.connect(Tooltip, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-37", {
  props: { label: figma.string("Label") },
  example: ({ label }) => <Tooltip label={label}><button className="iconbtn">?</button></Tooltip>,
});
