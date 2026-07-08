export default function Select({ options = [], value, onChange, placeholder = "Selecione…", disabled, ...rest }) {
  return (
    <select
      className="select"
      value={value ?? ""}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      {...rest}
    >
      {placeholder && <option value="" disabled hidden>{placeholder}</option>}
      {options.map((opt) => {
        const { value: v, label } = typeof opt === "string" ? { value: opt, label: opt } : opt;
        return <option key={v} value={v}>{label}</option>;
      })}
    </select>
  );
}
