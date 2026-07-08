import { useState } from "react";
import DealsScreen from "./screens/DealsScreen";
import Showcase from "./screens/Showcase";

export default function App() {
  const [screen, setScreen] = useState("deals");

  if (screen === "showcase") {
    return <Showcase onBack={() => setScreen("deals")} />;
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setScreen("showcase")}
        style={{
          position: "fixed", top: 16, right: 16, zIndex: 70,
          height: 32, padding: "0 12px", borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-default)", background: "var(--color-surface-white)",
          color: "var(--color-text-secondary)", font: "500 13px/1 var(--font-sans)", cursor: "pointer",
        }}
      >
        Showcase
      </button>
      <DealsScreen />
    </div>
  );
}
