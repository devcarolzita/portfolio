import BorderButton from "../BorderButton";
// import ScrollReveal from "./ScrollReveal/ScrollReveal";
// import DecryptedText from "./DecryptedText/DecryptedText";
import BlurText from "../BlurText";
import ScrollVelocity from "../ScrollVelocity";
import SpotlightCard from "../SpotlightCard";
import { FaMoneyBillAlt } from "react-icons/fa";

import Title from "../Title";
const OurServices = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section id="about" className="w-full mb-20">
      <div className="flex w-full flex-col gap-10 items-baseline lg:gap-x-16  lg:items-center  lg:flex-row">
        <div className="">
          {/* <div className="max-w-30">
            <BorderButton text="Sobre nós" />
          </div> */}
          {/* <Title title="Não existe “Ctrl+C + Ctrl+V” " subTitle="por aqui" /> */}
          <BlurText
            text="🎯 Você escolhe o destino. A gente traça o caminho certo."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl mb-8"
          />
          <div id="grid-services" className="flex flex-wrap gap-2 justify-center ">
            <SpotlightCard
              className="custom-spotlight-card max-w-md h-auto"
              spotlightColor="rgba(130, 0, 219, 1)"
            >
              <div className="service">
               
                <h3 className="font-bold text-2xl">Tráfego Pago</h3>
                <p>
                  Campanhas criadas do zero para gerar resultado real, com foco
                  em retorno e escalabilidade. Cada anúncio reflete seu público,
                  seu posicionamento e seu produto.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card  max-w-md h-auto"
              spotlightColor="rgba(130, 0, 219, 1)"
            >
              <div className="service">
                
                <h3 className="font-bold text-2xl">Social Media Estratégico</h3>
                <p>
                  Postagens planejadas com estratégia. Nada de posts por postar
                  aqui, cada conteúdo tem um porquê e uma função no funil.
                </p>
              </div>
            </SpotlightCard>
             <SpotlightCard
              className="custom-spotlight-card  max-w-md"
              spotlightColor="rgba(130, 0, 219, 1)"
            >
              <div className="service">
               
                <h3 className="font-bold text-2xl">Branding e Posicionamento</h3>
                <p>
                Refinamos sua comunicação para que ela seja única, reconhecível e memorável. Sua marca com presença forte e coerente.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card  max-w-md"
              spotlightColor="rgba(130, 0, 219, 1)"
            >
              <div className="service">
                
                <h3 className="font-bold text-2xl">Acompanhamento e Otimização</h3>
                <p>
                Análises frequentes, relatórios inteligentes e testes constantes. Sua estratégia evolui com o seu negócio.

                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
