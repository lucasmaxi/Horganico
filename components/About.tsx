"use client";

import { motion } from "motion/react";

const cards = [
  {
    titulo: "Equipe multidisciplinar",
    texto:
      "Nossa equipe reúne engenheiros ambientais, florestais, sanitários e de trânsito, agrônomos, arquitetos, urbanistas, especialistas em saneamento, advogados e consultores em comunicação política — tudo sob um único teto para atender empresas de qualquer porte e setor.",
    variante: "default",
  },
  {
    titulo: "Nossa missão",
    texto:
      "Integrar excelência técnica, rigor científico e defesa jurídica para garantir a conformidade regulatória das empresas, proteger a saúde dos trabalhadores e viabilizar projetos com alto impacto econômico e socioambiental positivo.",
    variante: "default",
  },
  {
    titulo: "Por que escolher a Horgânico",
    itens: [
      "Parceiro único para todas as frentes: ambiental, trabalhista e sanitária",
      "Resultados mensuráveis com redução real de custos e passivos",
      "Compromisso ESG com impacto socioambiental verificável",
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
    <section id="quem-somos" className="relative bg-forest py-24 md:py-32 overflow-hidden">
      <img
        src="/background quem somos.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(18,39,27,0.92) 0%, rgba(30,125,75,0.45) 50%, rgba(0,72,0,0.80) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(111,204,164,0.08) 0%, transparent 60%)" }} />
      <div className="relative z-10 container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="block text-white text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Quem somos
          </span>
          <h2 className="font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-white mx-auto">
            A Horgânico e sua missão em<br />
            <span className="text-white">sustentabilidade</span>
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
              className={`rounded-2xl p-8 flex flex-col gap-5 backdrop-blur-md ${
                card.variante === "accent"
                  ? "bg-brand-500/70 border border-brand-400/40 shadow-xl shadow-brand-900/30"
                  : "bg-white/10 border border-white/15 hover:border-white/30 transition-colors"
              }`}
            >
              <h3
                className="font-bold text-xl tracking-tight text-white"
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
