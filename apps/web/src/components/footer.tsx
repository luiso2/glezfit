"use client";

import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants";
import { ScrollReveal } from "./ui/scroll-reveal";

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <>
      <div className="w-full h-px bg-border-subtle" />
      <footer className="bg-bg-darker px-6 md:px-[120px] py-10 md:py-20 flex flex-col gap-16">
        {/* Top: Brand + Nav */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <ScrollReveal direction="left" className="max-w-[340px] flex flex-col gap-5">
            <span className="font-serif text-[40px] font-medium tracking-[2px] text-text-light">
              GLEZFIT
            </span>
            <span className="text-[11px] font-medium tracking-[6px] text-accent">
              MODAFITNESS
            </span>
            <p className="text-sm text-text-footer-muted leading-[1.7]">
              Ropa que moldea y estiliza tu figura sin sacrificar comodidad.
              Disenada para mujeres que buscan lo extraordinario.
            </p>
            <div className="flex gap-5">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-[#1A1A1E] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:bg-accent group"
                >
                  <Icon className="w-[18px] h-[18px] text-text-light transition-colors duration-300 group-hover:text-bg-dark" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex flex-col md:flex-row gap-8 md:gap-20">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-[18px] min-w-[150px]">
                <span className="text-[11px] font-semibold tracking-[4px] text-text-light">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm transition-colors duration-300 hover:text-text-light ${
                      "accent" in link && link.accent
                        ? "text-accent font-medium"
                        : "text-text-footer-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Newsletter */}
        <ScrollReveal className="flex flex-col gap-7">
          <div className="w-full h-px bg-border-subtle" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl font-medium tracking-[-0.3px] text-text-light">
                Unete al Club GLEZFIT
              </h3>
              <p className="text-sm text-text-footer-muted">
                Acceso anticipado a nuevas colecciones y ofertas exclusivas
              </p>
            </div>
            <form
              className="flex flex-col md:flex-row w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Tu correo electronico"
                className="w-full md:w-[300px] h-[52px] bg-[#16161A] border border-border-input md:border-r-0 px-6 font-sans text-sm text-text-light outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-placeholder"
              />
              <button
                type="submit"
                className="h-[52px] px-9 bg-accent text-bg-dark text-xs font-semibold tracking-[3px] shadow-[0_6px_20px_rgba(232,150,90,0.22)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:shadow-[0_10px_28px_rgba(232,150,90,0.3)]"
              >
                SUSCRIBIRME
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* Bottom */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-px bg-border-subtle" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-xs text-text-placeholder">
              &copy; 2026 GLEZFIT. Todos los derechos reservados.
            </span>
            <div className="flex gap-8">
              {["Privacidad", "Terminos", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-text-footer-muted transition-colors duration-300 hover:text-text-light"
                >
                  {item}
                </a>
              ))}
            </div>
            <span className="text-xs text-text-placeholder">
              Hecho con amor en Mexico
            </span>
          </div>
          <div className="flex justify-center pt-2">
            <a
              href="https://merktop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-text-placeholder tracking-[1px] transition-colors duration-300 hover:text-accent"
            >
              Powered by <span className="font-semibold">Merktop</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
