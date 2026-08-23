import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-blush pt-32 pb-20 md:pt-44 md:pb-28"
    >
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
        <div className="animate-fadeUp [animation-delay:.05s]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose">
            Nail Designer
          </span>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Marcelle Pacheco
            <span className="block text-rose">Nails</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
            Beleza, técnica e cuidado em cada detalhe.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<Icon name="whatsapp" className="h-4 w-4" />}
            >
              Falar no WhatsApp
            </Button>
            <Button href="#servicos" variant="ghost">
              Ver serviços
            </Button>
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:.15s]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl2 bg-sky-light shadow-soft md:max-w-md">
            <Image
              src="/images/fotos/hero-placeholder.svg"
              alt="Trabalho de nail design de Marcelle Pacheco Nails"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
