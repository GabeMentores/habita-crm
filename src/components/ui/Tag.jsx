import Icon from "./Icon";

export default function Tag({ color = "blue", removable, onRemove, children }) {
  return (
    <span className={`tag tag--${color}`}>
      {children}
      {removable && (
        <button type="button" className="tag__remove" onClick={onRemove} aria-label="Remover">
          <Icon name="close" size={12} />
        </button>
      )}
    </span>
  );
}
