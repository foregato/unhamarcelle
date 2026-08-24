import { Course } from "@/data/courses";

export const aperfeicoamentoCourses: Course[] = [
  {
    id: 101,
    icon: "star",
    name: "Aperfeiçoamento VIP Técnico",
    price: "R$ 990,00",
    duration: "1 dia",
    indicatedFor:
      "Profissionais que já atuam na área e sentem dificuldade em estrutura, acabamento, durabilidade ou segurança na execução.",
    sections: [
      {
        title: "Metodologia do Aperfeiçoamento",
        items: [
          "Treinamento totalmente personalizado, baseado no nível atual da aluna e nas dificuldades reais apresentadas durante a prática.",
        ],
      },
      {
        title: "Imersão Prática",
        items: [
          "Avaliação do nível atual",
          "Demonstração da aluna (como trabalha hoje)",
          "Correções e ajustes em tempo real",
          "Demonstração da minha técnica",
          "Estrutura, curvatura, lixamento e acabamento",
          "Técnicas para maior durabilidade",
        ],
      },
    ],
    bonus: ["Esmaltação em gel"],
  },
  {
    id: 102,
    icon: "brush",
    name: "Aperfeiçoamento VIP Intensivo",
    price: "R$ 1.650,00",
    duration: "2 dias",
    indicatedFor:
      "Profissionais que já atuam e querem corrigir falhas, aprimorar técnica e elevar o nível dos atendimentos.",
    sections: [
      {
        title: "Metodologia do Aperfeiçoamento",
        items: [
          "Treinamento personalizado, focado nas dificuldades reais da aluna e evolução prática durante os dois dias.",
        ],
      },
      {
        title: "Dia 1 – Técnica Completa e Direcionamento",
        items: [
          "Avaliação do nível atual",
          "Alinhamento de base e correção de vícios técnicos",
          "Demonstração completa da minha técnica",
          "Lixamento técnico e acabamento profissional",
          "Técnicas para maior durabilidade e retenção",
        ],
      },
      {
        title: "Dia 2 – Prática Assistida (Execução da Aluna)",
        items: [
          "Aplicação completa realizada pela aluna em modelo",
          "Acompanhamento e correções em tempo real",
          "Ajustes finos de estrutura e acabamento",
          "Treino focado nos pontos de dificuldade",
          "Padronização para resultados mais profissionais",
        ],
      },
    ],
    bonus: ["Esmaltação em gel"],
  },
];
