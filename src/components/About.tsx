import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";

const differentials = [
  "Especialista em alongamento de unhas",
  "Técnicas modernas com banho de gel e blindagem",
  "Produtos de alta qualidade",
  "Atendimento personalizado e acolhedor",
  "Cursos para todos os níveis",
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <SectionTitle
            eyebrow="Sobre mim"
            title="Técnica apurada e cuidado com cada detalhe"
            description="Nail Designer especializada em alongamento de unhas, banho de gel, blindagem e esmaltação em gel. Técnica apurada e cuidado com cada detalhe."
          />
          <ul className="mt-8 space-y-4">
            {differentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/40 text-rose">
                  <Icon name="sparkles" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-ink/80 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl2 bg-sky-light shadow-soft">
            <Image
              src="/images/fotos/sobre-placeholder.svg"
              alt="Marcelle Pacheco trabalhando"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
