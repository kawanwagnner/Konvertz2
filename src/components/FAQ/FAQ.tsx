import { useState } from "react";

const items = [
  {
    q: "Preciso trocar de distribuidora?",
    a: "Não! Você continua recebendo energia da mesma distribuidora (Enel, Light, Elektro, etc). Apenas o fornecedor da energia é alterado, gerando economia na sua fatura.",
  },
  {
    q: "Qual o consumo mínimo necessário?",
    a: "Empresas com consumo a partir de 500 kWh/mês já podem migrar para o Mercado Livre. Quanto maior o consumo, maior a economia potencial.",
  },
  {
    q: "Quanto tempo leva o processo?",
    a: "O desconto aparece na conta em até 90 dias após a migração.",
  },
  {
    q: "Há fidelidade no contrato?",
    a: "Os contratos têm prazo determinado (normalmente 12 a 36 meses), mas com cláusulas de saída que permitem cancelamento antecipado em algumas situações específicas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-power-blue mb-4">
            Perguntas <span className="text-thunder">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que você precisa saber antes de migrar
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpen((prev) => (prev === i ? null : i))}
              >
                <h3 className="text-lg font-bold text-power-blue">{it.q}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-power-blue transform transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{it.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
