import { useEffect, useRef } from "react";

export default function Checkbox({ checked, indeterminate = false, disabled, onChange, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <input
      ref={ref}
      type="checkbox"
      className="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      {...rest}
    />
  );
}
