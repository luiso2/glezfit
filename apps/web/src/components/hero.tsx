"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] md:h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/generated-1772592641472.png"
          alt="GLEZFIT Hero"
          fill
          priority
          className="object-cover transition-transform duration-[10s] hover:scale-[1.03]"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-bg-warm/82 to-transparent" />

      {/* Content */}
      <div className="relative z-[2] flex flex-col justify-center h-full px-6 md:px-[120px] pt-[70px] md:pt-[90px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="font-serif text-[clamp(80px,10vw,140px)] font-bold tracking-[-2px] text-accent leading-[0.95]"
        >
          GLEZFIT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
          className="w-10 h-0.5 bg-accent my-2.5 origin-left"
        />

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="text-sm font-semibold tracking-[6px] text-text-dark-secondary"
        >
          MODAFITNESS
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.1 }}
          className="font-serif text-[clamp(18px,2vw,24px)] italic font-normal text-text-dark-muted mt-5"
        >
          Moldea tu figura sin sacrificar comodidad
        </motion.p>

        <motion.a
          href="#coleccion"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.3 }}
          className="inline-flex items-center justify-center px-12 py-[18px] bg-accent text-white text-sm font-semibold tracking-[3px] mt-9 w-fit shadow-[0_10px_30px_rgba(232,150,90,0.3),0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(232,150,90,0.3)]"
        >
          EXPLORAR COLECCION
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 1.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-8 bg-text-dark-muted animate-pulse-slow" />
        <span className="text-[10px] font-medium tracking-[3px] text-text-dark-muted">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
