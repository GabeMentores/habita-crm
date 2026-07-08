import { useState } from "react";
import Icon from "./Icon";

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion__item">
      <div className="accordion__summary" role="button" tabIndex={0} onClick={() => setOpen((o) => !o)}>
        {title}
        <Icon name={open ? "chevronUp" : "chevronDown"} size={18} />
      </div>
      {open && <div className="accordion__content">{children}</div>}
    </div>
  );
}

export default function Accordion({ children }) {
  return <div>{children}</div>;
}
