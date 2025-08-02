import BorderButton from "./BorderButton";
// import ScrollReveal from "./ScrollReveal/ScrollReveal";
// import DecryptedText from "./DecryptedText/DecryptedText";
import Me from "../assets/image.png";
import Title from "./Title";
import ScrollVelocity from "./ScrollVelocity";
const About = () => {
  return (
    <section id="about" className="w-full mb-20">
      <div className="flex w-full flex-col gap-10 items-baseline lg:gap-x-16  lg:items-center  lg:flex-row">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <img
            className="object-cover max-w-80 lg:max-w-150 h-auto"
            src={Me}
            alt="Minha imagem com cabelos pretos e camisa verde ao lado de uma tela codando"
          />
        </div>
        <div className="max-w-md flex flex-col gap-4">
          <div className="max-w-30">
            <BorderButton text="Sobre nós" />
          </div>
          <Title title="Não existe “Ctrl+C + Ctrl+V” " subTitle="por aqui" />
          <p className="text-zinc-400 leading-relaxed">
            Trabalhar com a gente é diferente. Antes de qualquer ação, a gente
            ouve, investiga, analisa e mergulha no seu negócio. Só depois disso
            criamos uma estratégia pensada exclusivamente para você, baseada em
            dados, comportamento do seu público e objetivos reais.
          </p>
          <div>
            Estratégias baseadas em diagnóstico individual Comunicação adaptada
            ao seu nicho e tom de voz Ajustes constantes com base em performance
            real Sem fórmulas prontas, sem promessas vazias
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
