import Icon from "./Icon";

export default function Toast({ msg, show }) {
  return (
    <div className={`toast ${show ? "is-show" : ""}`.trim()} role="status" aria-live="polite">
      <Icon name="filter" size={20} />
      <span>{msg}</span>
    </div>
  );
}
