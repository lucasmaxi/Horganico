"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-forest overflow-hidden">
      <div className="absolute inset-0">
        {/* Mobile background */}
        <img
          src="/background mobile.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        {/* Desktop background */}
        <img
          src="/background desktop.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        {/* Gradiente mobile: cima → baixo */}
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, #12271b, transparent 100%)" }} />
        {/* Gradiente desktop: esquerda → direita */}
        <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(to right, #12271b, transparent 50%)" }} />
      </div>

      <div className="relative z-10 container-site py-32 md:py-40 w-full">
        <motion.h1
          className="text-white font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-[1.12] tracking-tight max-w-[580px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Protegemos sua empresa, seus trabalhadores e o meio ambiente.
        </motion.h1>

        <motion.p
          className="text-white/70 text-[15px] leading-[1.7] max-w-[460px] mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
        >
          Soluções técnicas, jurídicas e sustentáveis em uma única plataforma: engenharia ambiental, segurança do trabalho, vigilância sanitária, defesa de multas e gestão estratégica.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
        >
          <a
            href="#contato"
            className="bg-gradient-to-r from-[#004d00] to-[#008801] hover:from-[#003800] hover:to-[#006801] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/30"
          >
            Solicite um diagnóstico gratuito
          </a>
          <a
            href="#servicos"
            className="text-white/85 hover:text-white border border-white/25 hover:border-white/50 font-medium px-7 py-3.5 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-200"
          >
            Conheça os serviços
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
