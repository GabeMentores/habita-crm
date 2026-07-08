import figma from "@figma/code-connect";
import NavItem from "../src/components/ui/NavItem";

figma.connect(NavItem, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=70-475", {
  props: {
    collapsed: figma.enum("Mode", { Collapsed: true, Expanded: false }),
    active: figma.enum("State", { Active: true, Default: false, Hover: false }),
    label: figma.string("Label"),
  },
  example: ({ collapsed, active, label }) => (
    <NavItem icon="home" label={label} active={active} collapsed={collapsed} />
  ),
});
