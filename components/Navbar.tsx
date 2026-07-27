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

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/25 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Navbar + dropdown */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5 pointer-events-none" style={{ transform: "translateZ(0)" }}>
        <div className="pointer-events-auto w-full max-w-[1200px] flex flex-col">

          {/* Header */}
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className={`relative z-10 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
                : "bg-white/10 backdrop-blur-sm"
            }`}
          >
            <div className="flex items-center justify-between h-14 md:h-16 px-5 md:px-7">
              <a href="#" className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="Horgânico"
                  className="h-5 md:h-6 w-auto transition-all duration-300"
                  style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
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

          {/* Dropdown — sai de trás do header */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative z-0 -mt-3 bg-forest/95 backdrop-blur-md rounded-b-2xl px-5 pt-6 pb-5 md:hidden overflow-hidden"
              >
                <nav className="flex flex-col">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.25 }}
                      className="text-white/85 text-lg font-semibold py-3 border-b border-white/10 hover:text-white transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <motion.a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-4 block bg-gradient-to-r from-[#004d00] to-[#008801] text-white text-center font-semibold py-3 rounded-full"
                >
                  Diagnóstico gratuito
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}
