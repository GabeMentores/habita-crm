import { Tabs, SearchInput, Button } from "../ui";
import { TABS } from "../../lib/deals";

export default function DealsToolbar({ tab, onTab, query, onQuery, onFilter }) {
  return (
    <div className="toolbar">
      <Tabs tabs={TABS} active={tab} onChange={onTab} />
      <div className="toolbar__right">
        <SearchInput value={query} onChange={onQuery} placeholder="Buscar negócio…" width={260} />
        <Button variant="ghost" icon="filter" onClick={onFilter}>Filtros</Button>
      </div>
    </div>
  );
}
