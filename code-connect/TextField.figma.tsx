import figma from "@figma/code-connect";
import TextField from "../src/components/ui/TextField";

figma.connect(TextField, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=23-23", {
  props: { placeholder: figma.string("Placeholder") },
  example: ({ placeholder }) => (
    <TextField label="Rótulo" value="" onChange={() => {}} placeholder={placeholder} />
  ),
});
