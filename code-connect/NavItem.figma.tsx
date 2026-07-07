import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=70-475", {
  props: {
    collapsed: figma.enum("Mode", { Collapsed: true, Expanded: false }),
    active: figma.enum("State", { Active: true, Default: false, Hover: false }),
    label: figma.string("Label"),
  },
  example: ({ collapsed, active, label }) => (
    <a className={`nav-item ${active ? "nav-item--active" : ""}`}>
      {!collapsed && <span className="nav-item__label">{label}</span>}
    </a>
  ),
});
