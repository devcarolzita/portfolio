import BorderButton from "./BorderButton";
// import ScrollReveal from "./ScrollReveal/ScrollReveal";
// import DecryptedText from "./DecryptedText/DecryptedText";
import Me from "../assets/image.png";
const About = () => {
  return (
    <div className="w-full mb-20">
      <div className="flex w-full gap-x-16 items-center">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <img
            className="object-cover max-w-150 h-auto"
            src={Me}
            alt="Minha imagem com cabelos pretos e camisa verde ao lado de uma tela codando"
          />
        </div>
        <div className="max-w-md flex flex-col gap-4">
          <div className="max-w-30">
            <BorderButton text="Sobre mim" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Passionate about creating <span className="text-purple-700">impactful solutions</span></h2>
          <p className="text-zinc-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            consequuntur perspiciatis nemo, delectus dolore mollitia? Veritatis
            tenetur quo dolor hic rem dolores quasi, numquam, minus iste ipsam
            aliquam voluptatibus perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
