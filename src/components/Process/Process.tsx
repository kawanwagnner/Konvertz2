export default function Process() {
  return (
    <section
      id="processo"
      className="py-20 bg-gradient-to-br from-power-blue to-black text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:4xl font-black mb-4">
            Migração <span className="text-lightning">Rápida</span> e{" "}
            <span className="text-lightning">Sem Risco</span>
          </h2>
          <p className="text-xl opacity-90">
            O desconto aparece na conta em até 90 dias
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-lightning/30 -translate-x-1/2" />

          {[
            {
              n: 1,
              title: "Análise da Conta",
              text: "Envie sua conta de luz para análise gratuita da economia potencial.",
              side: "left",
            },
            {
              n: 2,
              title: "Proposta Personalizada",
              text: "Nossa equipe envia uma proposta com a economia estimada para sua empresa.",
              side: "right",
            },
            {
              n: 3,
              title: "Assinatura Digital",
              text: "Assinatura 100% online sem burocracia. Processo rápido e seguro.",
              side: "left",
            },
            {
              n: 4,
              title: "Desconto Ativo!",
              text: "Em até 90 dias você verá a diferença na fatura. Acompanhamos tudo para você.",
              side: "right",
            },
          ].map((step, _idx) => (
            <div
              key={step.n}
              className={`relative mb-16 lg:mb-28 lg:w-1/2 ${
                step.side === "right" ? "lg:ml-auto lg:pl-16" : "lg:pr-16"
              }`}
              data-aos={step.side === "right" ? "fade-left" : "fade-right"}
            >
              <div className="bg-white/10 backdrop-blur-sm border-2 border-lightning/30 p-8 rounded-2xl shadow-xl">
                <div
                  className={`absolute -left-4 ${
                    step.side === "right"
                      ? "lg:left-auto lg:-right-14"
                      : "lg:left-auto lg:-right-14"
                  } top-8 w-10 h-10 bg-lightning rounded-full flex items-center justify-center text-power-blue font-black text-xl shadow-lg`}
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-black text-lightning mb-3">
                  {step.title}
                </h3>
                <p className="opacity-90 mb-4">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
