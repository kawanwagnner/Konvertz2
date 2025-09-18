export default function FormSection() {
  return (
    <section
      id="form"
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-power-blue to-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">
              <span className="text-lightning">Envie seus dados</span> e
              descubra quanto pode economizar
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 md:mb-8">
              Em até <span className="font-bold">1 dia útil</span>, nossa equipe
              envia uma análise estimativa de economia.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <Bullet
                title="Sem compromisso"
                desc="Análise gratuita e sem obrigatoriedade de contratação"
              />
              <Bullet
                title="Dados protegidos"
                desc="Tratamos seus dados conforme a LGPD e usamos apenas para a simulação"
              />
            </div>
          </div>

          <div className="lg:w-[50%]" data-aos="fade-left">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-lightning/30 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-xl lg:shadow-2xl">
              <form
                className="space-y-4 sm:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault(); /* handle submit */
                }}
              >
                <LabeledInput
                  id="form-nome"
                  label="Nome Completo"
                  type="text"
                  placeholder="Seu nome"
                  required
                />
                <LabeledInput
                  id="form-email"
                  label="E-mail"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
                <LabeledInput
                  id="form-telefone"
                  label="WhatsApp"
                  type="tel"
                  placeholder="(11) 98765-4321"
                  required
                />

                <div>
                  <label
                    htmlFor="form-conta"
                    className="block mb-2 text-sm sm:text-base font-medium"
                  >
                    Conta de Luz (PDF ou imagem)
                  </label>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="file"
                      id="form-conta"
                      className="hidden"
                      onChange={(e) => {
                        const span = document.getElementById("file-chosen");
                        if (!span) return;
                        const file = e.target.files?.[0];
                        span.textContent = file
                          ? file.name
                          : "Nenhum arquivo escolhido";
                      }}
                    />
                    <label
                      htmlFor="form-conta"
                      className="bg-lightning hover:bg-white text-power-blue font-medium px-4 sm:px-5 py-3 sm:py-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none cursor-pointer flex-shrink-0 text-sm sm:text-base text-center"
                    >
                      Escolher arquivo
                    </label>
                    <span
                      id="file-chosen"
                      className="bg-white/10 px-4 sm:px-5 py-3 sm:py-4 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none border border-t-0 sm:border-t sm:border-l-0 border-white/30 truncate text-white/80 text-sm sm:text-base"
                    >
                      Nenhum arquivo escolhido
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lightning hover:bg-white text-power-blue font-black py-4 sm:py-5 px-5 sm:px-6 rounded-lg text-base sm:text-lg transition shadow-lg hover:shadow-xl hover:shadow-lightning/40 flex items-center justify-center"
                >
                  <span className="mr-2 sm:mr-3">⚡</span>
                  ENVIAR E SIMULAR ECONOMIA
                </button>

                <p className="text-xs sm:text-sm text-center text-white/60">
                  Ao enviar, você concorda com nossos{" "}
                  <a href="#" className="text-lightning hover:underline">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-lightning hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start">
      <div className="bg-lightning/20 p-2 rounded-full mr-3 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 text-lightning"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-base sm:text-lg mb-1">{title}</h3>
        <p className="text-sm sm:text-base opacity-90">{desc}</p>
      </div>
    </div>
  );
}

function LabeledInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { id, label, className, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm sm:text-base font-medium"
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightning text-white placeholder-white/50 text-sm sm:text-base ${
          className || ""
        }`}
      />
    </div>
  );
}
