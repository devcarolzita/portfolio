import BorderButton from "../BorderButton";
import AnimatedList from "../AnimatedList";

import Title from "../Title";
const FeaturesSection = () => {
  const items = [
    "Planejamento estratégico individual",
    "Comunicação adaptada ao seu nicho",
    "Feedbacks com plano de ação",
    "Relatórios quinzenais",
    "Análise de dados das campanhas",
    "Treinamento sob medida para equipe",
  ];

  return (
    <section id="about" className="w-full mb-20">
      <div className="max-w-30 mb-5">
        <BorderButton text="Diferencial" />
      </div>
      <Title
        title="Nosso método é flexível. Nosso compromisso é com o que funciona"
        subTitle=" pra você."
      />
      <div className="flex mt-10">
       

        <div className="max-w-md">
          <p className="text-zinc-400 leading-relaxed">
            Você não entra em um "pacote". Você entra em uma estratégia viva,
            adaptável e feita com foco total em resultado.
          </p>
          
        </div>
         <div className="max-w-md">
          <AnimatedList
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
