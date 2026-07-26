"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="bg-brand-500 py-24 md:py-32">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-brand-100 text-xs font-semibold tracking-[0.14em] uppercase mb-5">
              Contato
            </span>
            <h2 className="font-extrabold text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] tracking-tight text-white">
              Comece pelo diagnóstico gratuito.
            </h2>
            <p className="text-white/75 text-[15.5px] leading-relaxed max-w-[400px] mt-6">
              Conte-nos a sua demanda — retornamos com uma avaliação inicial e os
              próximos passos, sem compromisso.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {[
                { label: "Telefone", value: "[Seu Telefone]" },
                { label: "E-mail", value: "[Seu E-mail]" },
                { label: "Área de atendimento", value: "[Sua Cidade/Região]" },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-3">
                  <span className="flex-none w-2 h-2 rounded-full bg-white/60 mt-1" />
                  <span className="text-[15px] text-white/85">
                    <strong className="text-white font-semibold">{item.label}</strong>
                    {" — "}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-7 md:p-9 shadow-2xl shadow-forest/20">
              <AnimatePresence mode="wait">
                {enviado ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-12 gap-5 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-500 flex items-center justify-center">
                      <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-forest">Mensagem enviada!</h3>
                      <p className="text-forest/60 text-sm mt-2">
                        Retornaremos em breve com a avaliação inicial.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nome" name="nome" type="text" required />
                      <Field label="Empresa" name="empresa" type="text" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="E-mail" name="email" type="email" required />
                      <Field label="Telefone" name="telefone" type="tel" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-forest/60 uppercase tracking-wide">
                        Serviço de interesse
                      </label>
                      <select
                        name="servico"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-forest bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition"
                      >
                        <option>Engenharia Ambiental</option>
                        <option>Vigilância Sanitária e Regulatórios</option>
                        <option>Engenharia de Segurança do Trabalho</option>
                        <option>Estudos e Projetos para Licenciamento</option>
                        <option>Defesa de Multas e Passivos</option>
                        <option>Inteligência e Gestão Estratégica</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-forest/60 uppercase tracking-wide">
                        Mensagem
                      </label>
                      <textarea
                        name="mensagem"
                        rows={4}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-forest bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#004d00] to-[#008801] hover:from-[#003800] hover:to-[#006801] text-white font-semibold py-3.5 rounded-full transition-all duration-200 text-[15px]"
                    >
                      Enviar mensagem
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-between gap-4 text-white/50 text-sm"
        >
          <span>© 2026 Horgânico Soluções Ecológicas</span>
          <span>Engenharia · Sanitário · SST · Jurídico · Gestão</span>
        </motion.footer>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-forest/60 uppercase tracking-wide">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-forest bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition"
      />
    </div>
  );
}
