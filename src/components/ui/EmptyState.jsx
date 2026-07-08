import Icon from "./Icon";
import Button from "./Button";

export default function EmptyState({ icon = "briefcase", title, children, actionLabel, onAction }) {
  return (
    <div className="empty">
      <div className="empty__icon"><Icon name={icon} size={24} /></div>
      {title && <p className="empty__title">{title}</p>}
      {children && <p className="empty__text">{children}</p>}
      {actionLabel && <Button variant="primary" onClick={onAction}>{actionLabel}</Button>}
    </div>
  );
}
