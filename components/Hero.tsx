"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-forest overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#1a3a26] to-[#0d1e14]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(111,204,164,1) 1px, transparent 1px), linear-gradient(90deg, rgba(111,204,164,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-brand-700/15 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container-site py-32 md:py-40 w-full">
        <motion.span
          className="inline-block text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Horgânico · Soluções Ecológicas
        </motion.span>

        <motion.h1
          className="text-white font-extrabold text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.06] tracking-tight max-w-[680px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Protegemos sua empresa, seus trabalhadores e o meio ambiente.
        </motion.h1>

        <motion.p
          className="text-white/70 text-lg leading-[1.75] max-w-[520px] mt-8"
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
            className="text-white/80 hover:text-white border border-white/20 hover:border-white/50 font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
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
