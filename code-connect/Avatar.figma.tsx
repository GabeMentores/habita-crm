import figma from "@figma/code-connect";
import Avatar from "../src/components/ui/Avatar";

figma.connect(Avatar, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=22-89", {
  props: { size: figma.enum("Size", { XS: "xs", SM: "sm", MD: "md", LG: "lg" }) },
  example: ({ size }) => <Avatar size={size} initials="GS" />,
});
