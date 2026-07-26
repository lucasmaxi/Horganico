"use client";

import { motion } from "motion/react";

const cards = [
  {
    titulo: "Equipe multidisciplinar",
    texto:
      "Engenheiros ambientais, florestais, sanitários e de trânsito, agrônomos, arquitetos e urbanistas, especialistas em saneamento, advogados e consultores em comunicação política.",
    variante: "default",
  },
  {
    titulo: "Nossa missão",
    texto:
      "Unir excelência técnica, rigor científico, sustentabilidade e defesa jurídica para blindar empresas, proteger trabalhadores e impulsionar projetos de alto impacto econômico e ambiental.",
    variante: "default",
  },
  {
    titulo: "Diferenciais estratégicos",
    itens: [
      "Solução multidisciplinar 360° — um único parceiro",
      "Foco em resultados e economia real de custos",
      "Práticas ESG com impacto socioambiental real",
    ],
    variante: "accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function About() {
  return (
    <section id="quem-somos" className="bg-forest py-24 md:py-32">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="block text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Quem somos
          </span>
          <h2 className="font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-tight text-white max-w-[520px] mx-auto">
            A Horgânico e sua missão em{" "}
            <span className="text-brand-300">sustentabilidade</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className={`rounded-2xl p-8 flex flex-col gap-5 ${
                card.variante === "accent"
                  ? "bg-brand-500 shadow-xl shadow-brand-900/30"
                  : "bg-white/[0.06] border border-white/10 hover:border-white/20 transition-colors"
              }`}
            >
              <h3
                className={`font-bold text-xl tracking-tight ${
                  card.variante === "accent" ? "text-white" : "text-brand-300"
                }`}
              >
                {card.titulo}
              </h3>

              {card.texto && (
                <p
                  className={`text-[14.5px] leading-[1.7] ${
                    card.variante === "accent" ? "text-white/85" : "text-white/65"
                  }`}
                >
                  {card.texto}
                </p>
              )}

              {card.itens && (
                <ul className="flex flex-col gap-3.5">
                  {card.itens.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="flex-none mt-[3px] w-2 h-2 rounded-full bg-white/70" />
                      <span className="text-[14.5px] leading-[1.6] text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
