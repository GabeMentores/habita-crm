import figma from "@figma/code-connect";
import SidebarToggle from "../src/components/ui/SidebarToggle";

figma.connect(SidebarToggle, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=70-484", {
  props: { collapsed: figma.enum("Direction", { Collapse: false, Expand: true }) },
  example: ({ collapsed }) => <SidebarToggle collapsed={collapsed} onClick={() => {}} />,
});
