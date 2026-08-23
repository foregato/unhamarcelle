import Image from "next/image";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import {
  DEVELOPER_NAME,
  DEVELOPER_URL,
  INSTAGRAM_URL,
  NAV_LINKS,
  SITE_NAME,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Image
              src="/images/logo/sublogositeSF.png"
              alt={SITE_NAME}
              width={96}
              height={96}
              className="h-20 w-20 rounded-full object-contain bg-paper"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Alongamento, banho de gel, blindagem e esmaltação em gel.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-rose hover:text-rose"
              aria-label={`Instagram de ${SITE_NAME}`}
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">
              Links rápidos
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-rose"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
            reservados.
          </p>

          {/* Crédito do desenvolvedor — discreto, deve permanecer em todas as páginas */}
          {DEVELOPER_URL ? (
            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-paper/30 opacity-60 transition-opacity duration-300 hover:text-rose hover:opacity-100"
            >
              Desenvolvido por {DEVELOPER_NAME}
            </a>
          ) : (
            <span className="text-[11px] text-paper/30 opacity-60">
              Desenvolvido por {DEVELOPER_NAME}
            </span>
          )}
        </div>
      </Container>
    </footer>
  );
}
