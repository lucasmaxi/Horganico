"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";


const diferenciais = [
  {
    num: "01",
    titulo: "Solução multidisciplinar 360°",
    texto:
      "Engenharia ambiental, segurança do trabalho e vigilância sanitária integrados em um único parceiro. Do licenciamento ambiental à defesa de autos de infração — sua empresa atendida de ponta a ponta, sem fragmentar fornecedores.",
    imagem: "/solucao 360.jpg",
  },
  {
    num: "02",
    titulo: "Foco em resultados e economia",
    texto:
      "Eliminamos multas ambientais, sanitárias e trabalhistas antes que aconteçam. Atuação preventiva que reduz passivos fiscais, protege a folha de pagamento e transforma compliance em vantagem competitiva.",
    imagem: "/economia_.jpg",
  },
  {
    num: "03",
    titulo: "Práticas ESG com impacto real",
    texto:
      "Implementamos estratégias ESG com indicadores mensuráveis: gestão de resíduos, redução de emissões e responsabilidade social. Sustentabilidade que atrai investidores, abre mercados e gera valor verificável.",
    imagem: "/ESG.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Differentials() {
  const [hovered, setHovered] = useState<string | null>(null);

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
            <motion.div key={d.num} variants={cardVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(d.num)}
              onHoverEnd={() => setHovered(null)}
              className="relative bg-[#0d1e14] rounded-2xl overflow-hidden flex flex-col shadow-xl shadow-forest/20 cursor-default"
            >
              {/* Imagem inset */}
              <div className="m-3 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={d.imagem}
                  alt={d.titulo}
                  className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  style={{ transform: hovered === d.num ? "scale(1.06)" : "scale(1)" }}
                />
              </div>

              {/* Texto */}
              <div className="px-6 pt-3 pb-5 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-[1.1rem] leading-snug tracking-tight text-[#008801]">
                  {d.titulo}
                </h3>
                <p className="text-white/60 text-[13.5px] leading-[1.65]">{d.texto}</p>
              </div>

              {/* CTA hover */}
              <AnimatePresence>
                {hovered === d.num && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.22 }}
                    className="px-6 pb-6"
                  >
                    <a
                      href="#contato"
                      className="block w-full text-center bg-gradient-to-r from-[#004d00] to-[#008801] hover:from-[#003800] hover:to-[#006801] text-white text-sm font-semibold py-2.5 rounded-full transition-colors duration-200"
                    >
                      Solicitar Diagnóstico
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
