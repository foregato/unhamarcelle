export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  /** Imagem do trabalho — coloque em /public/images/portfolio/ */
  image: string;
  /** Link para o Instagram da cliente (perfil ou post específico) */
  instagram?: string;
};

/**
 * Para adicionar um novo trabalho ao portfólio:
 * 1. Salve a foto do trabalho em /public/images/portfolio/
 * 2. Adicione um novo objeto neste array com o caminho em "image"
 *
 * Não é necessário alterar nenhum componente. O componente Portfolio
 * lê este array automaticamente e gera os cards.
 */
export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "Alongamento com banho de gel",
    category: "Alongamento",
    description:
      "Alongamento em fibra com acabamento em banho de gel e brilho intenso.",
    image: "/images/portfolio/portfolio-1.svg",
    instagram: "https://instagram.com/marcellepacheconails",
  },
  {
    id: 2,
    title: "Blindagem em unhas naturais",
    category: "Blindagem",
    description:
      "Reforço estrutural em unhas naturais fragilizadas, com acabamento uniforme.",
    image: "/images/portfolio/portfolio-2.svg",
    instagram: "https://instagram.com/marcellepacheconails",
  },
  {
    id: 3,
    title: "Esmaltação em gel nude",
    category: "Esmaltação em Gel",
    description: "Esmaltação em gel de longa duração em tom nude clássico.",
    image: "/images/portfolio/portfolio-3.svg",
    instagram: "https://instagram.com/marcellepacheconails",
  },
  {
    id: 4,
    title: "Alongamento em fibra de vidro",
    category: "Alongamento",
    description: "Alongamento leve e resistente com formato amêndoa.",
    image: "/images/portfolio/portfolio-4.svg",
    instagram: "https://instagram.com/marcellepacheconails",
  },
  {
    id: 5,
    title: "Banho de gel com francesinha",
    category: "Banho de Gel",
    description: "Banho de gel finalizado com francesinha fina e delicada.",
    image: "/images/portfolio/portfolio-5.svg",
    instagram: "https://instagram.com/marcellepacheconails",
  },
  {
    id: 6,
    title: "Blindagem com esmaltação em gel",
    category: "Blindagem",
    description:
      "Blindagem de proteção seguida de esmaltação em gel em tom vibrante.",
    image: "/images/portfolio/portfolio-6.svg",
    instagram: "https://instagram.com/marcellepacheconails",
  },
];
