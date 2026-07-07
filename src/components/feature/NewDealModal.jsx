import { useState } from "react";
import { Modal, Button, TextField } from "../ui";
import { parseBRL } from "../../lib/format";

const EMPTY = { name: "", company: "", value: "" };

export default function NewDealModal({ open, onClose, onCreate }) {
  const [form, setForm] = useState(EMPTY);
  const set = (key) => (v) => setForm((f) => ({ ...f, [key]: v }));

  const submit = () => {
    onCreate({
      name: form.name.trim() || "Novo responsável",
      company: form.company.trim() || "Empresa",
      stage: "Rascunho",
      value: parseBRL(form.value),
    });
    setForm(EMPTY);
  };

  return (
    <Modal
      open={open} onClose={onClose} title="Novo negócio"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button variant="primary" onClick={submit}>Criar negócio</Button>
        </>
      }
    >
      <TextField label="Responsável" value={form.name} onChange={set("name")} placeholder="Nome do responsável" />
      <TextField label="Empresa" value={form.company} onChange={set("company")} placeholder="Nome da empresa" />
      <TextField label="Valor (R$)" value={form.value} onChange={set("value")} placeholder="0,00" />
    </Modal>
  );
}
