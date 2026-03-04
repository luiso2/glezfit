import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "./ui/scroll-reveal";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-bg-light px-6 md:px-10 lg:px-[120px] py-[60px] md:py-20 lg:py-[100px] flex flex-col items-center gap-16"
    >
      <ScrollReveal>
        <span className="text-[11px] font-semibold tracking-[4px] text-accent">
          TESTIMONIOS
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium tracking-[-0.8px] text-text-dark text-center max-w-[800px]">
          Lo Que Dicen Nuestras Clientas
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {TESTIMONIALS.map((t, i) => (
          <ScrollReveal key={t.name} direction="scale" delay={i * 0.1}>
            <div className="bg-white p-6 sm:p-10 flex flex-col gap-5 shadow-[0_12px_32px_rgba(26,25,24,0.07),0_4px_8px_rgba(0,0,0,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(26,25,24,0.11)]">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-[18px] h-[18px] text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="font-serif text-base italic font-normal leading-relaxed text-text-dark">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="text-sm font-semibold text-text-dark block">
                  {t.name}
                </span>
                <span className="text-xs text-text-dark-muted mt-0.5 block">
                  {t.location}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
