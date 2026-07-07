import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=70-484", {
  props: { direction: figma.enum("Direction", { Collapse: "chevronLeft", Expand: "menu" }) },
  example: ({ direction }) => (
    <button className="sidebar-toggle" data-icon={direction} />
  ),
});
