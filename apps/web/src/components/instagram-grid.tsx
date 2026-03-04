import Image from "next/image";
import { INSTAGRAM_IMAGES } from "@/lib/constants";
import { ScrollReveal } from "./ui/scroll-reveal";

export function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {INSTAGRAM_IMAGES.map((src, i) => (
        <ScrollReveal key={src} direction="scale" delay={i * 0.1}>
          <div className="h-[200px] md:h-[300px] overflow-hidden relative group">
            <Image
              src={src}
              alt={`Instagram ${i + 1}`}
              fill
              className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-accent/0 transition-colors duration-400 group-hover:bg-accent/15" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
