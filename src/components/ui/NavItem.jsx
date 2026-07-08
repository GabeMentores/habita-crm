import Icon from "./Icon";

export default function NavItem({ icon, label, active, collapsed, ...rest }) {
  return (
    <a className={`nav-item ${active ? "nav-item--active" : ""}`.trim()} href="#" {...rest}>
      <Icon name={icon} size={20} />
      {!collapsed && <span className="nav-item__label">{label}</span>}
    </a>
  );
}
