import { IconName } from "@/components/Icon";

export type CourseSection = {
  title: string;
  items: string[];
};

export type Course = {
  id: number;
  icon: IconName;
  name: string;
  price: string;
  duration: string;
  indicatedFor: string;
  sections: CourseSection[]; // conteúdo específico do curso (teoria, prática, dias, etc.)
  bonus?: string[];
};

// Incluso em todos os cursos — exibido dentro de cada card expandido.
export const COMMON_INCLUDED: string[] = [
  "Certificado de conclusão em PDF",
  "Coffee Break incluso em todos os dias de curso (Café da Manhã e Café da Tarde)",
  "Apostila em PDF Exclusiva",
  "Uso dos produtos disponíveis (a aluna que contratar não irá precisar levar material)",
  "Apresentação completa de todos os materiais (explicação detalhada de cada produto, função e indicação correta + lista de materiais orientada com tudo o que a aluna precisa adquirir após o curso)",
  "Acompanhamento e avaliação por 3 meses (suporte direto após o fim do curso, envio de fotos e trabalhos realizados, correções, orientações e ajustes personalizados)",
  "Tira-dúvidas contínuo para evolução técnica e segurança no atendimento",
];

// Texto do bloco "Investimento e Agendamento do Curso" — igual em todos os cursos.
export const INVESTMENT_INFO = {
  title: "Investimento e Agendamento do Curso",
  paymentTitle: "Forma de Pagamento",
  paymentText:
    "Para agendamento do curso, é necessário o pagamento de um sinal no valor de R$ 150,00. O sinal é obrigatório, à vista e não parcelável. Sua confirmação garante a reserva da data. O valor restante do curso pode ser parcelado, ficando a taxa da maquininha por conta da aluna.",
  scheduleTitle: "Dias de realização do curso",
  scheduleText:
    "Os cursos são ministrados preferencialmente aos Domingos, segundas ou terças-feiras. Datas negociáveis, mediante consulta de disponibilidade. Para verificar datas e efetuar o agendamento, basta entrar em contato.",
};

export const courses: Course[] = [
  {
    id: 1,
    icon: "nail",
    name: "Curso de Alongamento VIP Completo",
    price: "R$ 1.000,00",
    duration: "1 dia",
    indicatedFor:
      "Iniciantes ou profissionais que querem começar do zero na técnica de alongamento.",
    sections: [
      {
        title: "Parte Teórica (Manhã)",
        items: [
          "Apresentação dos materiais e lista de produtos",
          "Introdução ao alongamento em molde F1",
          "Química dos produtos (diferencial do curso)",
          "Função de cada produto",
          "Compatibilidade correta",
          "Prevenção de descolamentos",
          "Preparação da unha natural e biossegurança",
          "Estrutura e construção perfeita no molde F1",
        ],
      },
      {
        title: "Parte Prática (Tarde)",
        items: [
          "Demonstração em mesa no molde F1",
          "Construção dos formatos: Almond, Quadrada, Redonda, Bailarina",
          "Lixamento técnico e acabamento",
        ],
      },
    ],
    bonus: ["Esmaltação em gel"],
  },
  {
    id: 2,
    icon: "graduationCap",
    name: "Curso de Alongamento VIP Intensivo",
    price: "R$ 1.500,00",
    duration: "2 dias",
    indicatedFor:
      "Iniciantes e profissionais que desejam se aprimorar, adquirindo mais prática, segurança e vivência real de atendimento.",
    sections: [
      {
        title: "Dia 1 – Teoria + Demonstração",
        items: [
          "Conteúdo completo do Intensivo",
          "Química dos produtos aplicada ao molde F1",
          "Apresentação completa dos materiais",
          "Demonstração dos formatos em mesa",
        ],
      },
      {
        title: "Dia 2 – Prática em Modelo Real",
        items: [
          "Atendimento completo realizado pela aluna",
          "Aplicação do alongamento em molde F1 do início ao fim",
          "Acompanhamento individual e correções em tempo real",
          "Simulação de atendimento profissional",
        ],
      },
    ],
    bonus: [
      "Fotografia com celular",
      "Posicionamento correto da mão",
      "Ângulos que valorizam o formato e o acabamento",
      "Iluminação ideal",
      "Como tirar fotos que vendem nas redes sociais",
    ],
  },
  {
    id: 3,
    icon: "shield",
    name: "Curso de Blindagem e Banho de Gel",
    price: "R$ 800,00",
    duration: "1 dia",
    indicatedFor:
      "Profissionais que desejam oferecer serviços naturais, resistentes e muito procurados no salão.",
    sections: [
      {
        title: "Parte Teórica (Manhã)",
        items: [
          "Conceito de blindagem e banho de gel",
          "Diferença entre blindagem, banho de gel e alongamento",
          "Química dos produtos aplicados à blindagem",
          "Preparação correta da unha natural",
          "Indicação ideal para cada tipo de cliente",
          "Apresentação dos materiais e lista de produtos",
        ],
      },
      {
        title: "Parte Prática (Tarde)",
        items: [
          "Execução da blindagem e banho de gel no molde F1",
          "Estrutura, nivelamento e acabamento",
          "Esmaltação em gel",
          "Dicas para maior durabilidade e resistência",
        ],
      },
    ],
    bonus: [
      "Dicas de fotografia para blindagem e banho de gel",
      "Como valorizar serviços naturais nas redes sociais",
    ],
  },
];
