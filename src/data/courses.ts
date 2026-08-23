export type Course = {
  id: number;
  icon: string; // chave usada pelo componente CourseCard para escolher o ícone
  name: string;
  description: string;
  price: string;
};

export const courses: Course[] = [
  {
    id: 1,
    icon: "nail",
    name: "Curso de Alongamento de Unhas",
    description: "Do básico ao avançado, domine as técnicas de alongamento.",
    price: "R$ XX",
  },
  {
    id: 2,
    icon: "shield",
    name: "Curso de Banho de Gel e Blindagem",
    description: "Aprenda a aplicar e finalizar com perfeição.",
    price: "R$ XX",
  },
  {
    id: 3,
    icon: "graduationCap",
    name: "Curso para Iniciantes",
    description: "Primeiros passos no mundo das unhas com base sólida.",
    price: "R$ XX",
  },
  {
    id: 4,
    icon: "star",
    name: "Aperfeiçoamento Profissional",
    description: "Técnicas avançadas para quem já atua na área.",
    price: "R$ XX",
  },
];
