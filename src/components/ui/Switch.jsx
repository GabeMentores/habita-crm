export default function Switch({ checked, disabled, onChange, ...rest }) {
  return (
    <input
      type="checkbox"
      className="switch"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      {...rest}
    />
  );
}
