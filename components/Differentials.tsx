"use client";

import { motion } from "motion/react";

const diferenciais = [
  {
    num: "01",
    titulo: "Solução multidisciplinar 360°",
    texto:
      "Um único parceiro para todas as demandas de licenciamento, segurança do trabalho, vigilância sanitária e defesa legal — SST, ambiental, sanitário e jurídico integrados.",
    gradient: "from-[#0d1e14] via-[#1a3a26] to-[#12271b]",
    accent: "#6fcca4",
  },
  {
    num: "02",
    titulo: "Foco em resultados e economia",
    texto:
      "Redução real de custos tributários sobre a folha e prevenção de multas operacionais, com base técnica e jurídica sólida.",
    gradient: "from-[#12271b] via-[#1e4030] to-[#0d1e14]",
    accent: "#3aad78",
  },
  {
    num: "03",
    titulo: "Práticas ESG com impacto real",
    texto:
      "Conexão entre o setor corporativo e iniciativas socioambientais e cooperativas, para uma sustentabilidade rentável e transparente.",
    gradient: "from-[#0a1f12] via-[#165f38] to-[#12271b]",
    accent: "#6fcca4",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-[#f8faf7]">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 text-center"
        >
          <span className="block text-brand-500 text-xs font-semibold tracking-[0.12em] uppercase mb-3">
            Diferenciais
          </span>
          <h2 className="font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-forest">
            O que faz da Horgânico{" "}
            <span className="text-brand-500">referência</span>{" "}
            <br className="hidden md:block" />
            em soluções ecológicas
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {diferenciais.map((d) => (
            <motion.div
              key={d.num}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group relative overflow-hidden rounded-2xl min-h-[360px] md:min-h-[420px] flex flex-col justify-end bg-gradient-to-br ${d.gradient} shadow-xl shadow-forest/20 cursor-default`}
            >
              <motion.div
                className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 transition-colors duration-300"
              />

              <div className="absolute top-6 right-6 text-xs font-bold tabular-nums"
                style={{ color: d.accent }}>
                {d.num}
              </div>

              <div
                className="absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(18,39,27,0.97) 0%, rgba(18,39,27,0.7) 60%, transparent 100%)",
                }}
              />

              <div className="relative z-10 p-7 md:p-8">
                <h3 className="font-bold text-[1.15rem] leading-snug tracking-tight mb-3"
                  style={{ color: d.accent }}>
                  {d.titulo}
                </h3>
                <p className="text-white/70 text-[14px] leading-[1.65]">{d.texto}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
