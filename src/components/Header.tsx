"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { NAV_LINKS, SITE_NAME, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-[0_1px_0_0_theme(colors.line)]" : ""
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center">
          <Image
            src="/images/logo/logoprincipalsiteSF.png"
            alt={SITE_NAME}
            width={220}
            height={70}
            priority
            className="h-15 w-auto object-contain sm:h-20"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-rose"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<Icon name="whatsapp" className="h-4 w-4" />}
          >
            Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </Container>

      {/* Menu mobile */}
      <div
        className={cn(
          "grid overflow-hidden bg-paper transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] border-t border-line" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink/85 transition-colors hover:bg-paper/60 hover:text-rose"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<Icon name="whatsapp" className="h-4 w-4" />}
              className="mt-3 justify-center"
            >
              Falar no WhatsApp
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
