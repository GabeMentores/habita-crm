import { useState, useRef, useCallback, useEffect } from "react";

export function useToast(duration = 2200) {
  const [toast, setToast] = useState({ show: false, msg: "" });
  const timer = useRef();

  const show = useCallback((msg) => {
    setToast({ show: true, msg });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast((s) => ({ ...s, show: false })), duration);
  }, [duration]);

  useEffect(() => () => clearTimeout(timer.current), []);
  return { toast, show };
}
