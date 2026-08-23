import { cn } from "@/utils/cn";

export type IconName =
  | "instagram"
  | "whatsapp"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "arrow"
  | "sparkles"
  | "nail"
  | "gem"
  | "shield"
  | "brush"
  | "graduationCap"
  | "star";

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, JSX.Element> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <path
      d="M20.5 11.9c0 4.6-3.8 8.4-8.4 8.4-1.5 0-2.9-.4-4.1-1.1L3 20.5l1.4-4.8a8.3 8.3 0 0 1-1.3-4.5C3.1 6.6 6.9 2.8 11.5 2.8s9 3.7 9 9.1zm-8.4-6.6a6.6 6.6 0 0 0-6.6 6.6c0 1.5.5 2.9 1.3 4l-.8 2.8 2.9-.8c1.1.7 2.4 1.1 3.7 1.1a6.6 6.6 0 0 0 6.6-6.6 6.6 6.6 0 0 0-6.6-6.6zm3.9 8.9c-.2.5-1 .9-1.4 1-.4.1-.8.1-1.3-.1-.3-.1-.7-.2-1.2-.5-2.1-1-3.5-3-3.6-3.2-.1-.2-.9-1.1-.9-2.1s.5-1.5.7-1.7c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4l.7 1.6c.1.1.1.3 0 .4l-.3.5c-.1.1-.2.3-.1.5.2.3.7 1.1 1.5 1.7.9.7 1.6.9 1.9 1 .2.1.3.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.2.4.4 0 .1 0 .5-.2 1z"
      fill="currentColor"
      stroke="none"
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h13M13 6l7 6-7 6" />,
  sparkles: (
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15zM5 14l.7 1.9L7.6 16.6l-1.9.7L5 19.2l-.7-1.9L2.4 16.6l1.9-.7L5 14z" />
  ),
  // unha alongada — representa o serviço de alongamento
  nail: (
    <path d="M12 2.5c2.6 3 4.2 7.4 4.2 11 0 2.9-1.9 5-4.2 5s-4.2-2.1-4.2-5c0-3.6 1.6-8 4.2-11z" />
  ),
  // gota/gema — representa brilho do banho de gel
  gem: (
    <>
      <path d="M4 9l4-5.5h8L20 9l-8 11.5L4 9z" />
      <path d="M4 9h16M9.5 3.5 8 9l4 11.5L16 9l-1.5-5.5" />
    </>
  ),
  // escudo — representa proteção da blindagem
  shield: <path d="M12 3l7 3v5.5c0 4.6-3 8.4-7 9.5-4-1.1-7-4.9-7-9.5V6l7-3z" />,
  // pincel — representa a esmaltação em gel
  brush: (
    <>
      <path d="M14.5 3.5 20.5 9.5 11 19c-1 1-4 2-5 1s0-4 1-5l7.5-11.5z" />
      <path d="M9 15l-3 3" />
    </>
  ),
  graduationCap: (
    <>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <path d="M22 9v6" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.5 5.6 6 .7-4.5 4.1 1.3 6-5.3-3.1-5.3 3.1 1.3-6L3.5 9.8l6-.7L12 3.5z" />
  ),
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
