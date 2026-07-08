import Icon from "./Icon";

export default function SidebarToggle({ collapsed, onClick }) {
  return (
    <button className="sidebar-toggle" onClick={onClick} title={collapsed ? "Expandir" : "Recolher"}>
      <Icon name={collapsed ? "menu" : "chevronLeft"} size={20} />
    </button>
  );
}
