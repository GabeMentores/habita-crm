import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=24-47", {
  props: {
    tone: figma.enum("Type", { Info: "info", Success: "success", Warning: "warning", Error: "error" }),
    title: figma.string("Title"),
    body: figma.string("Body"),
  },
  example: ({ tone, title, body }) => (
    <div className={`alert alert--${tone}`}>
      <div><p className="alert__title">{title}</p><p className="alert__body">{body}</p></div>
    </div>
  ),
});
