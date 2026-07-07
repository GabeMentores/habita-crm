import figma from "@figma/code-connect";

figma.connect("https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-19", {
  example: () => (
    <div className="menu">
      <div className="menu__item">Editar</div>
      <div className="menu__item">Duplicar</div>
      <div className="menu__sep" />
      <div className="menu__item menu__item--danger">Excluir</div>
    </div>
  ),
});
