import BorderButton from "./BorderButton";
// import ScrollReveal from "./ScrollReveal/ScrollReveal";
// import DecryptedText from "./DecryptedText/DecryptedText";
import Me from "../assets/image.png";
import Title from "./Title";
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
            <BorderButton text="Sobre mim" />
          </div>
          <Title title="Apaixonada por resolver"  subTitle="problemas"/>
          <p className="text-zinc-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            consequuntur perspiciatis nemo, delectus dolore mollitia? Veritatis
            tenetur quo dolor hic rem dolores quasi, numquam, minus iste ipsam
            aliquam voluptatibus perspiciatis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
