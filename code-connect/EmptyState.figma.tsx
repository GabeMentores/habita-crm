import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-55", {
  props: { title: figma.string("Title"), body: figma.string("Body") },
  example: ({ title, body }) => (
    <div className="empty">
      <div className="empty__icon" />
      <p className="empty__title">{title}</p>
      <p className="empty__text">{body}</p>
      <button className="btn btn--primary">Novo negócio</button>
    </div>
  ),
});
