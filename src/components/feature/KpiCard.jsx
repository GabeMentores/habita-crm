import { Icon } from "../ui";

export default function KpiCard({ label, value, trend, dir = "up" }) {
  return (
    <div className="kpi">
      <span className="kpi__label">{label}</span>
      <span className="kpi__value">{value}</span>
      <span className={`kpi__trend kpi__trend--${dir}`}>
        <Icon name={dir} size={14} />{trend}
      </span>
    </div>
  );
}
