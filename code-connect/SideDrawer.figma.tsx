import figma from "@figma/code-connect";
import SideDrawer from "../src/components/ui/SideDrawer";

figma.connect(SideDrawer, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=27-2", {
  props: { title: figma.string("Title") },
  example: ({ title }) => (
    <SideDrawer open title={title} onClose={() => {}} onSave={() => {}}>…</SideDrawer>
  ),
});
