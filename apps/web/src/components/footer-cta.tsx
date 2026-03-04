import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function FooterCta() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-[#1A1917] via-bg-dark to-bg-darker px-6 md:px-[200px] py-[60px] md:py-[120px] flex flex-col items-center gap-9 text-center"
    >
      <ScrollReveal>
        <div className="w-[60px] h-0.5 bg-accent mx-auto" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-[clamp(40px,5vw,72px)] font-medium tracking-[-1px] text-text-light">
          Eleva Tu Estilo
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-lg text-text-light-secondary leading-[1.7] max-w-[500px]">
          Descubre piezas que moldean tu silueta
          <br />
          con elegancia y comodidad sin igual
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
          <a
            href="#"
            className="inline-flex items-center gap-3.5 px-[52px] py-5 bg-accent text-bg-dark text-[13px] font-semibold tracking-[3px] shadow-[0_10px_30px_rgba(232,150,90,0.3)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(232,150,90,0.3)] w-full md:w-auto justify-center"
          >
            COMPRAR AHORA
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#coleccion"
            className="px-[52px] py-5 bg-transparent text-text-light text-[13px] font-semibold tracking-[3px] border border-white/20 transition-all duration-400 hover:border-white/40 hover:-translate-y-0.5 w-full md:w-auto text-center"
          >
            VER COLECCION
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
