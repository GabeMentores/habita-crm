import figma from "@figma/code-connect";
import EmptyState from "../src/components/ui/EmptyState";

figma.connect(EmptyState, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-55", {
  props: { title: figma.string("Title"), body: figma.string("Body") },
  example: ({ title, body }) => (
    <EmptyState title={title} actionLabel="Novo negócio">{body}</EmptyState>
  ),
});
