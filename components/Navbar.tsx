"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Horgânico"
              className="h-5 md:h-6 w-auto transition-all duration-300"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-brand-500 ${
                  scrolled ? "text-forest/80" : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-gradient-to-r from-[#004d00] to-[#008801] hover:from-[#003800] hover:to-[#006801] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-px"
            >
              Diagnóstico gratuito
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-forest" : "text-white"
            }`}
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <motion.span
                className="h-0.5 bg-current rounded-full block origin-center"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="h-0.5 bg-current rounded-full block"
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="h-0.5 bg-current rounded-full block origin-center"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-40 bg-forest flex flex-col pt-24 px-7 pb-10 md:hidden"
          >
                <div className="absolute top-5 left-7">
              <img src="/logo.svg" alt="Horgânico" className="h-5 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.35 }}
                  className="text-white/90 text-3xl font-bold py-4 border-b border-white/10 hover:text-brand-300 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="block bg-gradient-to-r from-brand-700 to-brand-400 text-white text-center font-semibold text-lg py-4 rounded-full transition-all duration-200 hover:from-brand-800 hover:to-brand-500"
            >
              Diagnóstico gratuito
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
