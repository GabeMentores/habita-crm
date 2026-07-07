export default function Avatar({ initials, color, size = "md" }) {
  const cls = size === "xs" ? "avatar--xs" : size === "sm" ? "avatar--sm" : size === "lg" ? "avatar--lg" : "";
  return (
    <span className={`avatar ${cls}`.trim()} style={color ? { background: color } : undefined}>
      {initials}
    </span>
  );
}
