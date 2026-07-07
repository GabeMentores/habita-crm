import { Icon, BrandLockup } from "../ui";

const NAV = [
  { icon: "home", label: "Dashboard" },
  { icon: "briefcase", label: "Negócios", active: true },
  { icon: "users", label: "Contatos" },
  { icon: "chart", label: "Relatórios" },
];

function NavItem({ icon, label, active, collapsed }) {
  return (
    <a className={`nav-item ${active ? "nav-item--active" : ""}`.trim()} href="#">
      <Icon name={icon} size={20} />
      {!collapsed && <span className="nav-item__label">{label}</span>}
    </a>
  );
}

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo-row">
        {!collapsed && <BrandLockup />}
        <button className="sidebar-toggle" onClick={onToggle} title={collapsed ? "Expandir" : "Recolher"}>
          <Icon name={collapsed ? "menu" : "chevronLeft"} size={20} />
        </button>
      </div>
      <nav className="nav">
        {NAV.map((item) => <NavItem key={item.label} {...item} collapsed={collapsed} />)}
        <span className="nav-spacer" />
        <NavItem icon="settings" label="Configurações" collapsed={collapsed} />
      </nav>
    </aside>
  );
}
