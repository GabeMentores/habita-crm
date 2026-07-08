import figma from "@figma/code-connect";
import Menu, { MenuItem, MenuSeparator } from "../src/components/ui/Menu";

figma.connect(Menu, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-19", {
  example: () => (
    <Menu>
      <MenuItem>Editar</MenuItem>
      <MenuItem>Duplicar</MenuItem>
      <MenuSeparator />
      <MenuItem danger>Excluir</MenuItem>
    </Menu>
  ),
});
