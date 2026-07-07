const SUPPORT = ["01-blue","02-cyan","03-teal","04-violet","05-fuchsia","06-lime","07-bronze","08-slate"];

export const initials = (name) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

export const brl = (value) =>
  "R$ " + value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

export const supportColor = (i) => `var(--color-support-${SUPPORT[i % SUPPORT.length]})`;

export const parseBRL = (str) =>
  parseFloat(String(str).replace(/\./g, "").replace(",", ".")) || 0;
