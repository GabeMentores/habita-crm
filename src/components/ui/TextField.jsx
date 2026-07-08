export default function TextField({ label, value, onChange, placeholder, type = "text", error, disabled, help }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input
        className={`input ${error ? "input--error" : ""}`.trim()} type={type} value={value} disabled={disabled}
        onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      />
      {help && <span className={`field__help ${error ? "field__help--error" : ""}`.trim()}>{help}</span>}
    </div>
  );
}
