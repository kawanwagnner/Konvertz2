export default function LeiSection() {
  return (
    <section id="lei" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-power-blue mb-4">
            Como o desconto chega na{" "}
            <span className="text-thunder">sua conta</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Entenda o processo simples que gera economia direto na sua fatura
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <Card
            icon="🏭"
            title="Geração nas usinas Safira"
            text="A Safira produz energia renovável em suas usinas solares e injeta essa energia no sistema elétrico nacional. Cada kWh gerado se transforma em créditos de energia limpa."
            quote="Uma usina de grande porte gera créditos para centenas de empresas simultaneamente."
            theme="power"
          />
          <Card
            icon="📊"
            title="Compensação na sua conta"
            text="Seus créditos são automaticamente abatidos na fatura da distribuidora. Você continua recebendo a mesma energia, mas paga menos pelo que consumiu."
            quote="Na prática: se você consumiu 1000 kWh e tem 200 kWh em créditos, paga apenas por 800 kWh."
            theme="thunder"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
  quote,
  theme,
}: {
  icon: string;
  title: string;
  text: string;
  quote: string;
  theme: "power" | "thunder";
}) {
  const themeClasses =
    theme === "power"
      ? "bg-power-blue/10 border-lightning text-power-blue"
      : "bg-thunder/10 border-thunder text-thunder";
  return (
    <div
      className="bg-white p-8 rounded-2xl shadow-xl"
      data-aos={theme === "power" ? "fade-right" : "fade-left"}
    >
      <div className="flex items-center mb-6">
        <div className="bg-lightning/20 text-power-blue p-3 rounded-full mr-4 text-2xl">
          {icon}
        </div>
        <h3 className="text-2xl font-black text-power-blue">{title}</h3>
      </div>
      <p className="text-gray-700 mb-6">{text}</p>
      <div className={`${themeClasses} border-l-4 p-4 rounded-r-lg`}>
        <p
          className={`font-medium ${
            theme === "power" ? "text-power-blue" : "text-thunder"
          }`}
        >
          “{quote}”
        </p>
      </div>
    </div>
  );
}
