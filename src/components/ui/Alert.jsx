import Icon from "./Icon";

const ICON = { success: "checkCircle", warning: "warning", error: "close", info: "info" };

export default function Alert({ tone = "info", title, children }) {
  return (
    <div className={`alert alert--${tone}`}>
      <Icon className="alert__icon" name={ICON[tone]} size={20} />
      <div>
        {title && <p className="alert__title">{title}</p>}
        {children && <p className="alert__body">{children}</p>}
      </div>
    </div>
  );
}
