import figma from "@figma/code-connect";
import Button from "../src/components/ui/Button";

figma.connect(Button, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=21-95", {
  props: {
    variant: figma.enum("Variant", { Primary: "primary", Secondary: "secondary", Ghost: "ghost", Accent: "accent", Destructive: "destructive" }),
    size: figma.enum("Size", { SM: "sm", MD: "md", LG: "lg" }),
    disabled: figma.enum("State", { Disabled: true, Default: false, Hover: false }),
    label: figma.string("Label"),
  },
  example: ({ variant, size, disabled, label }) => (
    <Button variant={variant} size={size} disabled={disabled}>{label}</Button>
  ),
});
