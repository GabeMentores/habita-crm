import figma from "@figma/code-connect";
import KpiCard from "../src/components/feature/KpiCard";

figma.connect(KpiCard, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-18", {
  props: { dir: figma.enum("Trend", { Up: "up", Down: "down" }) },
  example: ({ dir }) => (
    <KpiCard label="Receita do mês" value="R$ 1,24M" trend="12% vs. mês ant." dir={dir} />
  ),
});
