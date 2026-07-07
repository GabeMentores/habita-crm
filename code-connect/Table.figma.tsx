import figma from "@figma/code-connect";
import DealsTable from "../src/components/feature/DealsTable";

figma.connect(DealsTable, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=26-98", {
  example: () => <DealsTable rows={[]} />,
});
