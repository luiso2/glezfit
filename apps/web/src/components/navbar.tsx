"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-10 lg:px-20 h-[70px] md:h-[90px] transition-all duration-400 ${
        scrolled
          ? "bg-bg-warm/92 backdrop-blur-[20px] shadow-[0_1px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="flex flex-col">
        <span className="font-serif text-[28px] font-semibold tracking-[4px] text-text-dark leading-none">
          GLEZFIT
        </span>
        <span className="text-[9px] font-medium tracking-[4px] text-text-dark">
          MODAFITNESS
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden lg:flex gap-10 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium tracking-[1.5px] text-text-dark relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-accent after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#"
        className="hidden lg:inline-flex px-8 py-3.5 bg-accent text-white text-xs font-semibold tracking-[2.5px] shadow-[0_8px_24px_rgba(232,150,90,0.22),0_4px_12px_rgba(0,0,0,0.18)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,150,90,0.3)]"
      >
        SHOP NOW
      </a>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <X className="w-6 h-6 text-text-dark" />
        ) : (
          <Menu className="w-6 h-6 text-text-dark" />
        )}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[70px] md:top-[90px] left-0 right-0 bg-bg-warm/97 backdrop-blur-[20px] p-8 flex flex-col items-center gap-6 z-99">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[1.5px] text-text-dark hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="px-8 py-3.5 bg-accent text-white text-xs font-semibold tracking-[2.5px]"
          >
            SHOP NOW
          </a>
        </div>
      )}
    </nav>
  );
}
