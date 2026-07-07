import KpiCard from "./KpiCard";

const KPIS = [
  { label: "Receita do mês", value: "R$ 1,24M", trend: "12% vs. mês ant.", dir: "up" },
  { label: "Negócios ganhos", value: "48", trend: "+5 na semana", dir: "up" },
  { label: "Taxa de conversão", value: "24%", trend: "2 p.p. na semana", dir: "down" },
  { label: "Ticket médio", value: "R$ 86,2k", trend: "+3,1%", dir: "up" },
];

export default function KpiRow({ items = KPIS }) {
  return (
    <div className="kpis">
      {items.map((k) => <KpiCard key={k.label} {...k} />)}
    </div>
  );
}
