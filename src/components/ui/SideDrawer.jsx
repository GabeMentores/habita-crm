import { useEffect } from "react";
import Icon from "./Icon";
import Button from "./Button";

export default function SideDrawer({
  open, onClose, title, children,
  onSave, saveLabel = "Salvar", cancelLabel = "Cancelar",
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-root">
      <div className="modal__scrim" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-label={title}>
        <div className="drawer__header">
          <strong>{title}</strong>
          <button className="iconbtn" onClick={onClose} aria-label="Fechar">
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="drawer__body">{children}</div>
        <div className="drawer__footer">
          <Button variant="secondary" onClick={onClose}>{cancelLabel}</Button>
          <Button variant="primary" onClick={onSave}>{saveLabel}</Button>
        </div>
      </aside>
    </div>
  );
}
