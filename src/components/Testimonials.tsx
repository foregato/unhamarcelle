"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Testimonials() {
  return (
    <section id="feedbacks" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que dizem"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm"
            >
              {/* Print da mensagem */}
              <div className="relative aspect-[3/4] w-full bg-sky-light/30">
                <Image
                  src={item.image}
                  alt={`Depoimento de ${item.name}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Rodapé com estrelas, foto de perfil e nome */}
              <div className="p-5">
                {item.rating && (
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-rose">
                        ★
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full bg-sky/40">
                    <Image
                      src={item.avatar}
                      alt={`Foto de perfil de ${item.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
