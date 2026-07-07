import figma from "@figma/code-connect";
import Modal from "../src/components/ui/Modal";
import Button from "../src/components/ui/Button";

figma.connect(Modal, "https://www.figma.com/design/uHbOgcjvm7Jwc54ckNhSfl/CRM---Habita?node-id=25-42", {
  props: { title: figma.string("Title"), body: figma.string("Body") },
  example: ({ title, body }) => (
    <Modal open title={title} onClose={() => {}}
      footer={<><Button variant="secondary">Cancelar</Button><Button variant="destructive">Excluir</Button></>}>
      <p className="modal__text">{body}</p>
    </Modal>
  ),
});
