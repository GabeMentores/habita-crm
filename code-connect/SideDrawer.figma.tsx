import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=27-2", {
  props: { title: figma.string("Title") },
  example: ({ title }) => (
    <aside className="drawer">
      <div className="drawer__header"><strong>{title}</strong></div>
      <div className="drawer__body">…</div>
      <div className="drawer__footer">
        <button className="btn btn--secondary">Cancelar</button>
        <button className="btn btn--primary">Salvar</button>
      </div>
    </aside>
  ),
});
