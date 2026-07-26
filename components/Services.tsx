"use client";

import { motion } from "motion/react";

const servicos = [
  {
    num: "01",
    titulo: "Engenharia Ambiental",
    itens: [
      "Licenciamento Ambiental integral (LP, LI e LO)",
      "Estudos de Impacto Ambiental (EIA/RIMA, RAP, RAS)",
      "Gestão de resíduos sólidos (PGRS, PGRCC) e logística reversa",
      "Outorga de recursos hídricos e Cadastro Ambiental Rural (CAR)",
    ],
  },
  {
    num: "02",
    titulo: "Vigilância Sanitária e Regulatórios",
    itens: [
      "Licenciamento sanitário e AFE junto à ANVISA",
      "Implantação e auditoria de Boas Práticas de Fabricação (BPF)",
      "Segurança alimentar e qualidade: POP e APPCC",
      "Registro de produtos e marcas (ANVISA, MAPA, INPI)",
    ],
  },
  {
    num: "03",
    titulo: "Engenharia de Segurança do Trabalho",
    itens: [
      "Laudos técnicos: LTCAT, insalubridade e periculosidade",
      "PGR, análise ergonômica (AET – NR-17) e fatores psicossociais",
      "Treinamentos das NRs, estruturação da CIPA e SIPAT",
      "Assistência técnico-pericial em processos trabalhistas",
    ],
  },
  {
    num: "04",
    titulo: "Estudos e Projetos para Licenciamento",
    itens: [
      "Regularização fundiária e técnica de imóveis e condomínios",
      "Estudos de Viabilidade Técnica e Ambiental (EVTEA)",
      "Estudos de Impacto de Vizinhança (EIV) e viabilidade econômica",
      "Projetos integrados para tramitação acelerada em órgãos públicos",
    ],
  },
  {
    num: "05",
    titulo: "Defesa de Multas e Passivos",
    itens: [
      "Defesa e recurso contra autos de infração ambientais, sanitários e trabalhistas",
      "Contestação técnica e fundamentação jurídica de penalidades",
      "Mitigação ou cancelamento de multas",
      "Blindagem contra passivos financeiros e danos reputacionais",
    ],
  },
  {
    num: "06",
    titulo: "Inteligência e Gestão Estratégica",
    itens: [
      "Auditorias internas preventivas de riscos operacionais e regulatórios",
      "Modelagem e implementação de KPIs",
      "Mentoria para novos negócios e estruturação de cooperativas",
      "Comunicação política, institucional e com stakeholders",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 flex flex-col gap-4"
        >
          <span className="block text-brand-500 text-xs font-semibold tracking-[0.12em] uppercase">
            Áreas de atuação
          </span>
          <h2 className="font-extrabold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-forest">
            Nossas soluções em<br />
            <span className="text-brand-500">conformidade e sustentabilidade</span>
          </h2>
          <p className="text-forest/60 text-[15px] leading-relaxed max-w-[480px]">
            Seis frentes integradas para empresas que buscam crescimento sustentável,
            segurança jurídica e conformidade regulatória.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {servicos.map((s) => (
            <motion.div
              key={s.num}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 56px rgba(30,125,75,0.13), 0 8px 20px rgba(0,0,0,0.07)",
                transition: { duration: 0.25 },
              }}
              className="group bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 shadow-card cursor-default transition-colors hover:border-brand-200"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-[1.2rem] leading-snug tracking-tight text-forest group-hover:text-brand-600 transition-colors h-[3.3rem] line-clamp-2">
                  {s.titulo}
                </h3>
                <span className="flex-none text-xs font-bold text-brand-400 bg-brand-50 rounded-lg px-2.5 py-1 tabular-nums">
                  {s.num}
                </span>
              </div>

              <ul className="flex flex-col divide-y divide-gray-100">
                {s.itens.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start py-3">
                    <span className="flex-none mt-[7px] w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-[13.5px] leading-[1.55] text-forest/70">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="mt-auto text-brand-500 hover:text-brand-600 text-[13px] font-semibold flex items-center gap-1.5 group/cta transition-colors"
              >
                Falar com equipe
                <svg className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#contato"
            className="bg-gradient-to-r from-[#004d00] to-[#008801] hover:from-[#003800] hover:to-[#006801] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/30"
          >
            Fale com nossa equipe
          </a>
        </motion.div>
      </div>
    </section>
  );
}
