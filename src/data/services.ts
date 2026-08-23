export type Service = {
  id: number;
  icon: string; // chave usada pelo componente ServiceCard para escolher o ícone
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    icon: "nail",
    name: "Alongamento de unhas",
    description: "Técnica de alongamento com segurança e durabilidade.",
  },
  {
    id: 2,
    icon: "gem",
    name: "Banho de gel",
    description: "Cobertura em gel que fortalece e dá brilho por semanas.",
  },
  {
    id: 3,
    icon: "shield",
    name: "Blindagem",
    description: "Reforço e proteção para unhas fragilizadas.",
  },
  {
    id: 4,
    icon: "brush",
    name: "Esmaltação em gel",
    description: "Esmaltação de longa duração com acabamento impecável.",
  },
];
