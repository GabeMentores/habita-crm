export default function Badge({ tone = "neutral", solid = false, children }) {
  return <span className={`badge badge--${tone} ${solid ? "badge--solid" : ""}`.trim()}>{children}</span>;
}
