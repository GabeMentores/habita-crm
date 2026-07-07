export const STAGE_TONE = {
  Ganho: "success", Pendente: "warning", Atrasado: "error", Rascunho: null, Perdido: "neutral",
};

export const TAB_MAP = {
  todos: null,
  aberto: ["Pendente", "Atrasado", "Rascunho"],
  ganhos: ["Ganho"],
  perdidos: ["Perdido"],
};

export const TABS = [
  { id: "todos", label: "Todos" },
  { id: "aberto", label: "Em aberto" },
  { id: "ganhos", label: "Ganhos" },
  { id: "perdidos", label: "Perdidos" },
];

export const SEED_DEALS = [
  { name: "Mariana Lopes", company: "Construtora Aurora", stage: "Ganho", value: 128450 },
  { name: "João Pereira", company: "Imobiliária Sul", stage: "Pendente", value: 96300 },
  { name: "Ana Castro", company: "Grupo Meridiano", stage: "Atrasado", value: 212900 },
  { name: "Rafael Teixeira", company: "Incorporadora Vale", stage: "Rascunho", value: 54800 },
  { name: "Carla Nunes", company: "Lar Ideal", stage: "Perdido", value: 41200 },
  { name: "Bruno Dias", company: "Cidade Nova", stage: "Ganho", value: 173000 },
  { name: "Letícia Maia", company: "Horizonte Imóveis", stage: "Pendente", value: 88700 },
];
