import { BrandLockup, NavItem, SidebarToggle } from "../ui";

const NAV = [
  { icon: "home", label: "Dashboard" },
  { icon: "briefcase", label: "Negócios", active: true },
  { icon: "users", label: "Contatos" },
  { icon: "chart", label: "Relatórios" },
];

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo-row">
        {!collapsed && <BrandLockup />}
        <SidebarToggle collapsed={collapsed} onClick={onToggle} />
      </div>
      <nav className="nav">
        {NAV.map((item) => <NavItem key={item.label} {...item} collapsed={collapsed} />)}
        <span className="nav-spacer" />
        <NavItem icon="settings" label="Configurações" collapsed={collapsed} />
      </nav>
    </aside>
  );
}
