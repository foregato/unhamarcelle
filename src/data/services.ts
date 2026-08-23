export type Service = {
  id: number;
  icon: string; // chave usada pelo componente ServiceCard para escolher o ícone
  name: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    id: 1,
    icon: "nail",
    name: "Alongamento de unhas",
    description: "Técnica de alongamento com segurança e durabilidade.",
    price: "R$ XX",
  },
  {
    id: 2,
    icon: "gem",
    name: "Banho de gel",
    description: "Cobertura em gel que fortalece e dá brilho por semanas.",
    price: "R$ XX",
  },
  {
    id: 3,
    icon: "shield",
    name: "Blindagem",
    description: "Reforço e proteção para unhas fragilizadas.",
    price: "R$ XX",
  },
  {
    id: 4,
    icon: "brush",
    name: "Esmaltação em gel",
    description: "Esmaltação de longa duração com acabamento impecável.",
    price: "R$ XX",
  },
];
