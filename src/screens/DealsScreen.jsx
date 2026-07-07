import { useState, useMemo } from "react";
import Sidebar from "../components/feature/Sidebar";
import Topbar from "../components/feature/Topbar";
import KpiRow from "../components/feature/KpiRow";
import DealsToolbar from "../components/feature/DealsToolbar";
import DealsTable from "../components/feature/DealsTable";
import NewDealModal from "../components/feature/NewDealModal";
import { Button, Toast } from "../components/ui";
import { useTheme } from "../hooks/useTheme";
import { useToast } from "../hooks/useToast";
import { SEED_DEALS, TAB_MAP } from "../lib/deals";

export default function DealsScreen() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { toast, show: showToast } = useToast();
  const [collapsed, setCollapsed] = useState(false);
  const [tab, setTab] = useState("todos");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [deals, setDeals] = useState(SEED_DEALS);
  const [modalOpen, setModalOpen] = useState(false);

  const rows = useMemo(() => {
    const allow = TAB_MAP[tab];
    const q = query.trim().toLowerCase();
    return deals.filter(
      (d) =>
        (!allow || allow.includes(d.stage)) &&
        (!q || `${d.name} ${d.company}`.toLowerCase().includes(q))
    );
  }, [deals, tab, query]);

  const createDeal = (deal) => {
    setDeals((d) => [deal, ...d]);
    setModalOpen(false);
    showToast("Negócio criado");
  };

  return (
    <div className="app" data-collapsed={collapsed ? "" : undefined}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />

      <div className="main">
        <Topbar collapsed={collapsed} theme={theme} onToggleTheme={toggleTheme} />

        <div className="content">
          <div className="page-head">
            <div>
              <h1>Negócios</h1>
              <p>Acompanhe seu funil e os negócios em andamento.</p>
            </div>
            <div className="page-head__actions">
              <Button variant="secondary">Importar</Button>
              <Button variant="primary" icon="plus" onClick={() => setModalOpen(true)}>
                Novo negócio
              </Button>
            </div>
          </div>

          <KpiRow />

          <div className="section">
            <DealsToolbar
              tab={tab} onTab={setTab}
              query={query} onQuery={setQuery}
              onFilter={() => showToast("Painel de filtros — em breve")}
            />
            <DealsTable rows={rows} />
            <div className="table-foot">
              <span>{rows.length} de {deals.length} negócios</span>
              <div className="pager">
                <button>‹</button>
                {[1, 2, 3].map((n) => (
                  <button key={n} className={page === n ? "is-active" : ""} onClick={() => setPage(n)}>{n}</button>
                ))}
                <button>›</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewDealModal open={modalOpen} onClose={() => setModalOpen(false)} onCreate={createDeal} />
      <Toast msg={toast.msg} show={toast.show} />
    </div>
  );
}
