export default function Menu({ children }) {
  return (
    <div className="menu" role="menu">
      {children}
    </div>
  );
}

export function MenuItem({ danger, children, ...rest }) {
  return (
    <div className={`menu__item ${danger ? "menu__item--danger" : ""}`.trim()} role="menuitem" {...rest}>
      {children}
    </div>
  );
}

export function MenuSeparator() {
  return <div className="menu__sep" role="separator" />;
}
