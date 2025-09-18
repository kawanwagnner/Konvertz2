export default function ProvasSection() {
  return (
    <section id="provas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-power-blue mb-4">
            Transformação <span className="text-thunder">Real</span>
          </h2>
          <p className="text-xl text-gray-600">
            Veja como mudamos a realidade financeira de empresas como a sua:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Stat value="R$ 1 bi" label="Faturamento em 2022 (Safira)" />
          <Stat
            value="10%+"
            label="Meta mínima de economia declarada pelo CEO"
            delay={100}
          />
          <Stat
            value="200+"
            label="Clientes com contratos de longo prazo"
            delay={200}
          />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Testimonial
            initials="JS"
            name="João Silva"
            role="Restaurante - SP"
            text="Economizei R$ 1.200 no primeiro mês! Processo simples e transparente. Recomendo para todos os empresários."
          />
          <Testimonial
            initials="MC"
            name="Maria Costa"
            role="Comércio - RJ"
            text="Atendimento excelente e migração rápida. Há 6 meses economizando em média 28% na conta de luz."
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <div
      className="bg-gray-50 p-8 rounded-xl shadow-md text-center"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="text-5xl font-black text-power-blue mb-3">{value}</div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

function Testimonial({
  initials,
  name,
  role,
  text,
  delay = 0,
}: {
  initials: string;
  name: string;
  role: string;
  text: string;
  delay?: number;
}) {
  return (
    <div
      className="bg-gray-50 p-6 rounded-xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-power-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
          {initials}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">“{text}”</p>
    </div>
  );
}
