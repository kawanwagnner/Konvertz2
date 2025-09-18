export default function Hero() {
  return (
    <section className="pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-20 gradient-bg text-white relative overflow-hidden">
      {/* Efeito Partículas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Layout Flexível */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Texto (SEMPRE à esquerda) */}
          <div
            className="w-full lg:w-1/2 lg:pr-8 xl:pr-12"
            data-aos="fade-right"
          >
            <span className="inline-block mt-10 md:mt-0 bg-lightning text-power-blue px-3 py-1 rounded-full mb-3 font-bold animate-bounce-slow text-sm md:text-base">
              🚨 ALERTA AOS EMPRESÁRIOS
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
              <span className="block">Ei! Sabia que seu negócio</span>
              <span className="text-lightning block">
                pode economizar até 35% na conta de luz?
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 opacity-90">
              Reduza o custo de energia da sua empresa migrando para o{" "}
              <span className="font-bold">Mercado Livre de Energia</span> — sem
              obras, tudo digital. Representante autorizado da{" "}
              <span className="text-lightning font-bold">Grupo Safira</span>.
            </p>

            <div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-lightning/30 mb-6"
              data-aos="zoom-in"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-lightning/20 p-2 rounded-full text-sm">
                  🔍
                </div>
                <div>
                  <h3 className="font-bold text-lightning mb-2 text-sm sm:text-base">
                    Envie sua conta e descubra:
                  </h3>
                  <ul className="space-y-1 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-lightning mr-2">✓</span>
                      <span>Quanto você pode economizar todo mês</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lightning mr-2">✓</span>
                      <span>Sem trocar de distribuidora</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lightning mr-2">✓</span>
                      <span>Sem custos iniciais (p/ orçamento)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-3">
              <a
                href="#form"
                className="bg-lightning hover:bg-white text-power-blue font-bold px-6 py-3 rounded-full text-base transition duration-300 shadow-xl hover:shadow-lightning/40 flex items-center justify-center"
              >
                <span className="mr-2">⚡</span>
                QUERO MEU DESCONTO
              </a>
            </div>
          </div>

          {/* Card Gráfico (ABAIXO em mobile, À DIREITA em desktop) */}
          <div
            className="w-full lg:w-1/2 mt-10 lg:mt-12 lg:pl-8 xl:pl-12"
            data-aos="fade-left"
          >
            <div className="floating-card bg-white/5 backdrop-blur-md border-2 border-lightning/20 rounded-xl p-1 overflow-hidden max-w-md lg:max-w-none mx-auto lg:mx-0 lg:ml-auto">
              <div className="bg-black/20 p-4 sm:p-5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lightning font-bold text-sm sm:text-base">
                      CONTA DE LUZ
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Últimos 12 meses
                    </p>
                  </div>
                  <div className="bg-lightning/20 text-lightning px-2 py-1 rounded-full text-xs sm:text-sm font-bold">
                    -35% ECONOMIA
                  </div>
                </div>

                <div className="mb-4">
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-thunder to-lightning rounded-full mb-1" />
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Jan</span>
                    <span>Dez</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-white/60 text-xs sm:text-sm">
                      Média anterior
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-thunder">
                      R$ 2.450
                    </p>
                  </div>
                  <div className="bg-lightning/10 border border-lightning/30 p-3 rounded-lg">
                    <p className="text-lightning text-xs sm:text-sm">
                      Média c/ desconto
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      R$ 1.593
                    </p>
                    <p className="text-xs text-lightning mt-1">
                      Economia de R$ 857/mês
                    </p>
                  </div>
                </div>

                <div className="bg-power-blue rounded-lg p-3">
                  <p className="text-white text-xs sm:text-sm font-medium mb-1">
                    💡 Você pode economizar{" "}
                    <span className="font-bold">R$ 10.284/ano</span>
                  </p>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-lightning rounded-full"
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Card */}
        </div>
      </div>
    </section>
  );
}
