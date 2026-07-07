import figma from "@figma/code-connect";
import BrandMark, { BrandLockup } from "../src/components/ui/BrandMark";

figma.connect(BrandMark, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=70-489", {
  props: { collapsed: figma.enum("Mode", { Collapsed: true, Expanded: false }) },
  example: ({ collapsed }) => (collapsed ? <BrandMark /> : <BrandLockup />),
});
