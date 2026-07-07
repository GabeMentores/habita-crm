import { Icon, SearchInput, Avatar, BrandLockup } from "../ui";

export default function Topbar({ collapsed, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        {collapsed && <BrandLockup />}
        <SearchInput placeholder="Buscar leads, contatos…" width={380} />
      </div>
      <div className="topbar__right">
        <button className="iconbtn" onClick={onToggleTheme} title="Alternar tema">
          <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
        </button>
        <button className="iconbtn" title="Notificações"><Icon name="bell" size={20} /></button>
        <Avatar initials="GS" color="var(--color-support-04-violet)" />
      </div>
    </header>
  );
}
