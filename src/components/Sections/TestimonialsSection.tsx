import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-12 px-4">
      <h2 className="text-center text-white text-3xl font-bold mb-10">
        💬 O que nossos clientes dizem sobre


      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <TestimonialCard
          name="Pedro Avelar"
          role="CEO @criatipica"
          message="Trabalhar com a KrolTec na Criatípica tem sido transformador! Em apenas 2 meses, já colhemos frutos incríveis – desde a evolução do site até a potência das redes sociais. Cada entrega vai além do esperado: profissionalismo afiado, criatividade estratégica e um compromisso que enxerga nosso propósito."
          avatar="https://media.licdn.com/dms/image/v2/D4D03AQFXP4ssdeLIsw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716234979079?e=1756944000&v=beta&t=8nCicf7MULQpfubbIUVdM6sWsJ1gmLxM9NnwdG2nmHk"
        />
        <TestimonialCard
          name="Hermano"
          role="CEO @domconsultoria"
          message="Eles não apenas entregaram o que foi solicitado superaram todas as expectativas, surpreendendo em cada entrega com ideias inteligentes, visuais marcantes e estratégias eficientes. A gestão de tráfego pago, em especial, tem se mostrado um grande diferencial, gerando leads qualificados e reais oportunidades de negócio para nossa equipe comercial."
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNezy-RIJZAm9gjtvQABjtWKITDQke5-RSg&s"
        />
      </div>
    </section>
  );
}
