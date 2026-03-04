import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import { ScrollReveal } from "./ui/scroll-reveal";

export function Collection() {
  return (
    <section
      id="coleccion"
      className="bg-bg-dark px-6 md:px-[120px] py-[60px] md:py-[100px] flex flex-col items-center gap-16"
    >
      <ScrollReveal>
        <span className="text-[11px] font-semibold tracking-[4px] text-accent">
          NUESTRA COLECCION
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-medium tracking-[-0.8px] text-text-light">
          La Coleccion
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full">
        {PRODUCTS.map((product, i) => (
          <ScrollReveal key={product.name} direction="scale" delay={i * 0.1}>
            <div className="flex flex-col group transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
              <div className="w-full h-[400px] md:h-[480px] overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="py-5 flex flex-col gap-2">
                <h3 className="font-serif text-[22px] font-semibold tracking-[-0.3px] text-text-light">
                  {product.name}
                </h3>
                <p className="text-sm text-text-light-secondary leading-relaxed">
                  {product.description}
                </p>
                <span className="text-base font-semibold text-accent">
                  {product.price}
                </span>
              </div>
              <a
                href="#"
                className="w-full py-3.5 px-8 bg-accent text-bg-dark text-sm font-semibold tracking-[1px] text-center shadow-[0_8px_24px_rgba(232,150,90,0.22),0_4px_10px_rgba(0,0,0,0.18)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,150,90,0.3)]"
              >
                Explorar
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
