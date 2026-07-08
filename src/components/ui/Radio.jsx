export default function Radio({ checked, disabled, onChange, ...rest }) {
  return (
    <input
      type="radio"
      className="radio"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      {...rest}
    />
  );
}
