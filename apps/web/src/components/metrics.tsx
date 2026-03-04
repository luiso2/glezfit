import { METRICS } from "@/lib/constants";
import { ScrollReveal } from "./ui/scroll-reveal";

export function Metrics() {
  return (
    <div className="bg-bg-light px-6 md:px-10 lg:px-[120px] py-5 pb-[60px] md:pb-[60px] lg:pb-20 flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20">
      {METRICS.map((m, i) => (
        <ScrollReveal key={m.label} delay={i * 0.1}>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-4xl font-medium tracking-[-0.8px] text-accent">
              {m.value}
            </span>
            <span className="text-[13px] text-text-dark-muted">{m.label}</span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
