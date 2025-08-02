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
