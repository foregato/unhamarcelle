import Image from "next/image";
import Icon from "@/components/Icon";
import { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-square overflow-hidden bg-sky-light/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Categoria */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-rose backdrop-blur">
          {item.category}
        </span>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="font-display text-lg text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          {item.description}
        </p>

        {item.instagram && (
          <div className="mt-5">
            <a
              href={item.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-rose hover:text-rose"
            >
              <Icon name="instagram" className="h-3.5 w-3.5" />
              Instagram
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
