export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-power-blue mb-4">
            Seja qual for o setor da sua empresa
          </h2>
          <p className="text-xl text-gray-600">
            Com a assinatura de energia da Safira, você recebe energia limpa sem
            precisar instalar painéis solares
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-gray-50 p-8 rounded-xl text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-power-blue text-5xl mb-4">📝</div>
            <h3 className="font-bold text-xl mb-3">Você assina</h3>
            <p className="text-gray-600">
              Contrate uma cota de nossas usinas, com base no seu consumo médio
              de KWh/mês.
            </p>
          </div>
          <div
            className="bg-gray-50 p-8 rounded-xl text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-power-blue text-5xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-3">Nós entregamos</h3>
            <p className="text-gray-600">
              A energia que geramos em nossas fazendas solares é injetada na
              rede de distribuição do seu negócio.
            </p>
          </div>
          <div
            className="bg-gray-50 p-8 rounded-xl text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-power-blue text-5xl mb-4">🌍</div>
            <h3 className="font-bold text-xl mb-3">Todos ganham</h3>
            <p className="text-gray-600">
              Seu negócio economiza todo mês e ainda ajuda o planeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
