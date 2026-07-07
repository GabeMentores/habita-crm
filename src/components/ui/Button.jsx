import Icon from "./Icon";

export default function Button({ variant = "primary", size = "md", icon, children, ...rest }) {
  const sizeClass = size === "sm" ? "btn--sm" : size === "lg" ? "btn--lg" : "";
  return (
    <button className={`btn btn--${variant} ${sizeClass}`.trim()} {...rest}>
      {icon && <Icon name={icon} size={20} />}
      {children}
    </button>
  );
}
