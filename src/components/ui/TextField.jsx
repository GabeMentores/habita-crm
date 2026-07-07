export default function TextField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input
        className="input" type={type} value={value}
        onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      />
    </div>
  );
}
