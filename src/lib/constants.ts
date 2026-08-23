// Informações de contato da Marcelle Pacheco Nails — centralizadas para fácil manutenção.
export const SITE_NAME = "Marcelle Pacheco Nails";

export const WHATSAPP_NUMBER = "5519991801570"; // apenas dígitos, com DDI e DDD
export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de mais informações.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_HANDLE = "@marcellepacheconails";
export const INSTAGRAM_URL = "https://instagram.com/marcellepacheconails";

// E-mail ainda não informado pela cliente — preencha aqui quando disponível
// e o botão correspondente aparecerá automaticamente na seção de Contato.
export const EMAIL = "";

export const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cursos", href: "#cursos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#feedbacks" },
  { label: "Contato", href: "#contato" },
];

// Crédito do desenvolvedor — deve permanecer em todas as páginas.
// Alterar os valores abaixo é suficiente para atualizar o link em todo o site.
export const DEVELOPER_NAME = "[seu nome/empresa]";
export const DEVELOPER_URL = "";
