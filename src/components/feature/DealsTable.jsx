import { Icon, Badge, Avatar } from "../ui";
import { STAGE_TONE } from "../../lib/deals";
import { initials, brl, supportColor } from "../../lib/format";

function Header() {
  return (
    <tr>
      <th style={{ width: 40 }} />
      <th>Responsável</th><th>Empresa</th><th>Etapa</th>
      <th className="num">Valor</th><th style={{ width: 48 }} />
    </tr>
  );
}

function StageCell({ stage }) {
  const tone = STAGE_TONE[stage];
  return tone
    ? <Badge tone={tone}>{stage}</Badge>
    : <span style={{ color: "var(--color-text-muted)" }}>{stage}</span>;
}

export default function DealsTable({ rows }) {
  return (
    <table className="table">
      <thead><Header /></thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={6} style={{ textAlign: "center", color: "var(--color-text-muted)", padding: 40 }}>
              Nenhum negócio nesta visão.
            </td>
          </tr>
        ) : (
          rows.map((d, i) => (
            <tr key={`${d.name}-${i}`}>
              <td><input type="checkbox" className="checkbox" /></td>
              <td>
                <span className="cell-name">
                  <Avatar initials={initials(d.name)} color={supportColor(i)} size="sm" />
                  {d.name}
                </span>
              </td>
              <td style={{ color: "var(--color-text-secondary)" }}>{d.company}</td>
              <td><StageCell stage={d.stage} /></td>
              <td className="num">{brl(d.value)}</td>
              <td><button className="iconbtn"><Icon name="kebab" size={20} /></button></td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
