import BorderButton from "../BorderButton";
// import ScrollReveal from "./ScrollReveal/ScrollReveal";
// import DecryptedText from "./DecryptedText/DecryptedText";
import ScrollVelocity from "../ScrollVelocity";

const TrustUs = () => {
  return (
    <section id="trust" className="w-full">
      <ScrollVelocity
        texts={["Estratégia", "Personalizada"]}
        velocity={100}
        className="custom-scroll-text"
       
      />
    </section>
  );
};

export default TrustUs;
