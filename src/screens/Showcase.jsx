import { useState } from "react";
import "../styles/showcase.css";
import {
  Icon, BrandLockup, Button, Badge, Avatar, TextField, Tabs, Modal, Toast,
  Tag, Select, Radio, Checkbox, Switch, Alert, Menu, MenuItem, MenuSeparator,
  Tooltip, EmptyState, SideDrawer, Accordion, AccordionItem, SidebarToggle,
  TableRow, NavItem,
} from "../components/ui";
import KpiCard from "../components/feature/KpiCard";

const VARIANTS = ["primary", "secondary", "ghost", "accent", "destructive"];
const SIZES = ["sm", "md", "lg"];
const TONES = ["success", "warning", "critical", "error", "info", "neutral"];
const TAG_COLORS = ["blue", "cyan", "teal", "violet", "fuchsia", "lime", "bronze", "slate"];
const ALERT_TONES = ["info", "success", "warning", "error"];

function Section({ title, children }) {
  return (
    <section className="showcase__section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Card({ label, children }) {
  return (
    <div className="showcase__card">
      {children}
      <span className="showcase__label">{label}</span>
    </div>
  );
}

export default function Showcase({ onBack }) {
  const [tab, setTab] = useState("a");
  const [toastShow, setToastShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);
  const [radioValue, setRadioValue] = useState("a");
  const [tags, setTags] = useState(TAG_COLORS.slice(0, 3));

  return (
    <div className="showcase">
      <div className="showcase__header">
        <div>
          <h1>Design System Showcase</h1>
          <p>Referência visual de todos os componentes e estados — espelha a biblioteca do Figma.</p>
        </div>
        <Button variant="secondary" onClick={onBack}>← Voltar para Negócios</Button>
      </div>

      <Section title="Button">
        <div className="showcase__grid">
          {VARIANTS.map((variant) => (
            <Card key={variant} label={`${variant} · md`}>
              <Button variant={variant}>Botão</Button>
            </Card>
          ))}
        </div>
        <div className="showcase__row">
          {SIZES.map((size) => (
            <Button key={size} variant="primary" size={size}>Tamanho {size}</Button>
          ))}
          <Button variant="primary" disabled>Desabilitado</Button>
          <Button variant="primary" icon="plus">Com ícone</Button>
        </div>
      </Section>

      <Section title="Badge">
        <div className="showcase__row">
          {TONES.map((tone) => <Badge key={tone} tone={tone}>{tone}</Badge>)}
        </div>
        <div className="showcase__row">
          {TONES.map((tone) => <Badge key={tone} tone={tone} solid>{tone}</Badge>)}
        </div>
      </Section>

      <Section title="Tag">
        <div className="showcase__row">
          {TAG_COLORS.map((color) => <Tag key={color} color={color}>{color}</Tag>)}
        </div>
        <div className="showcase__row">
          {tags.map((color) => (
            <Tag key={color} color={color} removable onRemove={() => setTags((t) => t.filter((c) => c !== color))}>
              {color}
            </Tag>
          ))}
          {tags.length === 0 && <span className="showcase__label">Todas as tags removidas — recarregue para ver de novo.</span>}
        </div>
      </Section>

      <Section title="Text Field">
        <div className="showcase__grid">
          <TextField label="Padrão" placeholder="Digite algo…" value="" onChange={() => {}} />
          <TextField label="Preenchido" value="Valor preenchido" onChange={() => {}} />
          <TextField label="Erro" value="valor inválido" onChange={() => {}} error help="Campo obrigatório" />
          <TextField label="Desabilitado" value="Não editável" onChange={() => {}} disabled />
        </div>
      </Section>

      <Section title="Select">
        <div className="showcase__row">
          <Select options={["Opção 1", "Opção 2", "Opção 3"]} value="Opção 1" onChange={() => {}} />
          <Select options={["Opção 1", "Opção 2"]} disabled placeholder="Desabilitado" onChange={() => {}} />
        </div>
      </Section>

      <Section title="Radio / Checkbox / Switch">
        <div className="showcase__row">
          <Card label="Radio selecionado">
            <Radio checked={radioValue === "a"} onChange={() => setRadioValue("a")} />
          </Card>
          <Card label="Radio não selecionado">
            <Radio checked={radioValue === "b"} onChange={() => setRadioValue("b")} />
          </Card>
          <Card label="Radio desabilitado">
            <Radio checked={false} disabled onChange={() => {}} />
          </Card>
          <Card label="Checkbox marcado">
            <Checkbox checked={checked} onChange={setChecked} />
          </Card>
          <Card label="Checkbox desmarcado">
            <Checkbox checked={false} onChange={() => {}} />
          </Card>
          <Card label="Checkbox indeterminado">
            <Checkbox checked={false} indeterminate onChange={() => {}} />
          </Card>
          <Card label="Checkbox desabilitado">
            <Checkbox checked={false} disabled onChange={() => {}} />
          </Card>
          <Card label="Switch ligado">
            <Switch checked={switchOn} onChange={setSwitchOn} />
          </Card>
          <Card label="Switch desligado">
            <Switch checked={false} onChange={() => {}} />
          </Card>
          <Card label="Switch desabilitado">
            <Switch checked={false} disabled onChange={() => {}} />
          </Card>
        </div>
      </Section>

      <Section title="Alert">
        <div className="showcase__grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
          {ALERT_TONES.map((tone) => (
            <Alert key={tone} tone={tone} title={`Alerta de ${tone}`}>
              Mensagem de exemplo para o estado {tone}.
            </Alert>
          ))}
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs
          tabs={[{ id: "a", label: "Aba A" }, { id: "b", label: "Aba B" }, { id: "c", label: "Aba C" }]}
          active={tab}
          onChange={setTab}
        />
      </Section>

      <Section title="Table Row (zebra / hover / selected)">
        <table className="table">
          <thead><tr><th style={{ width: 40 }} /><th>Estado</th></tr></thead>
          <tbody>
            <TableRow><td><Checkbox checked={false} onChange={() => {}} /></td><td>Padrão</td></TableRow>
            <TableRow><td><Checkbox checked={false} onChange={() => {}} /></td><td>Zebra (linha par)</td></TableRow>
            <TableRow><td><Checkbox checked={false} onChange={() => {}} /></td><td>Passe o mouse para ver o hover</td></TableRow>
            <TableRow selected><td><Checkbox checked onChange={() => {}} /></td><td>Selecionada</td></TableRow>
          </tbody>
        </table>
      </Section>

      <Section title="Avatar">
        <div className="showcase__row">
          <Card label="xs"><Avatar initials="GS" size="xs" /></Card>
          <Card label="sm"><Avatar initials="GS" size="sm" /></Card>
          <Card label="md"><Avatar initials="GS" size="md" /></Card>
          <Card label="lg"><Avatar initials="GS" size="lg" /></Card>
        </div>
      </Section>

      <Section title="Nav Item">
        <div className="showcase__row">
          <div style={{ width: 220, border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-lg)", padding: "var(--space-md)", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <span className="showcase__label">Expandido</span>
            <NavItem icon="home" label="Dashboard" active collapsed={false} />
            <NavItem icon="briefcase" label="Negócios" collapsed={false} />
          </div>
          <div style={{ width: 72, border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-lg)", padding: "var(--space-md)", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <span className="showcase__label">Recolhido</span>
            <NavItem icon="home" label="Dashboard" active collapsed />
            <NavItem icon="briefcase" label="Negócios" collapsed />
          </div>
          <Card label="Sidebar toggle">
            <SidebarToggle collapsed={false} onClick={() => {}} />
          </Card>
        </div>
      </Section>

      <Section title="Menu">
        <Menu>
          <MenuItem>Editar</MenuItem>
          <MenuItem>Duplicar</MenuItem>
          <MenuSeparator />
          <MenuItem danger>Excluir</MenuItem>
        </Menu>
      </Section>

      <Section title="Tooltip">
        <div className="showcase__row">
          <Tooltip label="Dica contextual"><Button variant="secondary">Passe o mouse aqui</Button></Tooltip>
        </div>
      </Section>

      <Section title="Empty State">
        <EmptyState title="Nenhum negócio ainda" actionLabel="Novo negócio" onAction={() => {}}>
          Crie seu primeiro negócio para começar a acompanhar o funil.
        </EmptyState>
      </Section>

      <Section title="Accordion">
        <Accordion>
          <AccordionItem title="Como funciona o funil?" defaultOpen>
            Cada negócio passa pelas etapas configuradas até ser fechado.
          </AccordionItem>
          <AccordionItem title="Posso importar negócios existentes?">
            Sim, use o botão Importar no topo da tela de Negócios.
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Side Drawer / Dialog / Toast">
        <div className="showcase__row">
          <Button variant="secondary" onClick={() => setDrawerOpen(true)}>Abrir drawer</Button>
          <Button variant="secondary" onClick={() => setModalOpen(true)}>Abrir dialog</Button>
          <Button variant="secondary" onClick={() => { setToastShow(true); setTimeout(() => setToastShow(false), 2000); }}>
            Disparar toast
          </Button>
        </div>
      </Section>

      <Section title="KPI Card / Brand">
        <div className="showcase__row">
          <KpiCard label="Receita do mês" value="R$ 1,24M" trend="12% vs. mês ant." dir="up" />
          <KpiCard label="Churn" value="2,1%" trend="0,4% vs. mês ant." dir="down" />
          <Card label="Brand lockup"><BrandLockup /></Card>
          <Card label="Ícone (kebab)"><Icon name="kebab" /></Card>
        </div>
      </Section>

      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onSave={() => setDrawerOpen(false)} title="Editar negócio">
        <TextField label="Responsável" value="" onChange={() => {}} placeholder="Nome do responsável" />
      </SideDrawer>

      <Modal
        open={modalOpen} onClose={() => setModalOpen(false)} title="Excluir negócio"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>Excluir</Button>
          </>
        }
      >
        <p className="modal__text">Esta ação não pode ser desfeita.</p>
      </Modal>

      <Toast msg="Ação concluída" show={toastShow} />
    </div>
  );
}
