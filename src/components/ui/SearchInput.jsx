import Icon from "./Icon";

export default function SearchInput({ value, onChange, placeholder, width }) {
  return (
    <label className="search" style={width ? { width } : undefined}>
      <Icon name="search" size={20} />
      <input
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
