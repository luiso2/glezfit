import Image from "next/image";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "./ui/scroll-reveal";

export function Philosophy() {
  return (
    <section
      id="filosofia"
      className="bg-bg-warm px-6 md:px-10 lg:px-[120px] py-[60px] md:py-20 lg:py-[100px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <ScrollReveal direction="left" className="flex flex-col gap-7 order-2 md:order-1">
        <span className="text-[11px] font-medium tracking-[4px] text-accent">
          NUESTRA FILOSOFIA
        </span>

        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium tracking-[-0.8px] text-text-dark leading-[1.1]">
          Moda Que Esculpe Tu Figura
        </h2>

        <p className="font-serif text-[17px] italic font-normal text-text-dark-secondary leading-[1.8]">
          Cada prenda GLEZFIT esta disenada con telas ribbed premium que se
          adaptan y moldean tu silueta, creando una segunda piel que estiliza sin
          comprometer la comodidad. Nuestra filosofia es simple: mereces verte
          increible mientras te sientes libre.
        </p>

        <p className="text-[15px] text-text-dark-muted leading-[1.7] border-l-2 border-accent pl-5">
          Nuestros disenos estan pensados para todos, sin importar genero, edad o
          forma fisica. Creemos que cada persona merece sentirse bien en su piel y
          disfrutar de su tiempo en el gimnasio, al aire libre o en casa. Con
          materiales de alta calidad y tecnologia avanzada, nuestras prendas
          ofrecen transpirabilidad, elasticidad y durabilidad. En GLEZFIT, no solo
          vendemos ropa; cultivamos un estilo de vida que prioriza la comodidad y
          el bienestar.
        </p>

        <div className="flex flex-col gap-6">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="flex flex-col gap-2.5 group">
              <div className="w-10 h-0.5 bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[60px]" />
              <h4 className="text-base font-semibold text-text-dark">
                {feat.title}
              </h4>
              <p className="text-sm text-text-dark-muted leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center px-8 py-4 bg-text-dark text-text-light text-[13px] font-semibold tracking-[2px] w-fit shadow-[0_8px_24px_rgba(26,25,24,0.25)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(26,25,24,0.3)]"
        >
          CONOCE MAS
        </a>
      </ScrollReveal>

      <ScrollReveal direction="right" className="overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative order-1 md:order-2">
        <Image
          src="/images/generated-1772592680787.png"
          alt="Filosofia GLEZFIT"
          fill
          className="object-cover transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </ScrollReveal>
    </section>
  );
}
