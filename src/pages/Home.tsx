import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

import MetaBalls from "../components/MetaBalls/MetaBalls";
import About from "../components/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col p-10 lg:p-20 items-center">
        <Hero />
        <MetaBalls
          color="#560ae1"
          cursorBallColor="#560ae1"
          cursorBallSize={3}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
        <About />
        <MetaBalls
          color="#560ae1"
          cursorBallColor="#560ae1"
          cursorBallSize={3}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
