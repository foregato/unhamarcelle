export type Testimonial = {
  id: number;
  name: string;
  avatar: string; // foto de perfil (placeholder)
  image: string; // print da mensagem (placeholder)
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cliente Marcelle Pacheco Nails",
    avatar: "/images/avatars/avatar-placeholder.svg",
    image: "/images/feedbacks/feedback-1.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Cliente Marcelle Pacheco Nails",
    avatar: "/images/avatars/avatar-placeholder.svg",
    image: "/images/feedbacks/feedback-2.svg",
    rating: 5,
  },
  {
    id: 3,
    name: "Cliente Marcelle Pacheco Nails",
    avatar: "/images/avatars/avatar-placeholder.svg",
    image: "/images/feedbacks/feedback-3.svg",
    rating: 5,
  },
];
