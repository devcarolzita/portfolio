import React from "react";
import ProfileCard from '../ProfileCard/ProfileCard';
import PerfilImg from '../../assets/perfil.png';
import ButtonCall from "../ButtonCall";

export default function AboutSection() {
  return (
    <section id="sobre-mim" className="py-16 px-4  text-white-800">
      <h2 className="text-4xl font-bold text-center mb-4">Sobre Mim</h2>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Conheça a pessoa por trás dos resultados que transformam negócios em marcas de sucesso.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Imagem */}
        <div className="flex-shrink-0">
        
          <ProfileCard
  name="Caról Sìlva"
  title="Estrategista Digital"
  handle="kroltec"
  status="Online"
  contactText="Entre em contato"
  avatarUrl={PerfilImg}
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  iconUrl={PerfilImg}
  behindGradient="red"
/>
        </div>

        {/* Conteúdo */}
        <div className="max-w-xl">
          <h3 className="text-2xl font-semibold mb-4">Olá, eu sou a Caról Sílva</h3>

          <p className="mb-4">
            Com mais de <span className="text-pink-500 font-semibold">10 anos de experiência</span> no mercado digital,
            dedico minha carreira a transformar negócios através de estratégias autênticas e resultados mensuráveis.
          </p>

          <p className="mb-4">
            Minha paixão é <span className="text-pink-500 font-semibold">conectar marcas com suas audiências</span> de forma genuína,
            criando não apenas campanhas, mas verdadeiras experiências que geram impacto real no faturamento dos meus
            clientes.
          </p>

          <p className="mb-6">
            Acredito que cada negócio tem uma história única para contar, e meu papel é ajudar você a
            <span className="text-pink-500 font-semibold"> encontrar sua voz</span> e amplificá-la no mundo digital.
          </p>

          {/* Estatísticas */}
          <div className="flex gap-8 mb-6">
            <div>
              <span className="text-3xl font-bold text-indigo-600">50+</span>
              <div className="text-sm text-gray-600">Projetos Realizados</div>
            </div>
            <div>
              <span className="text-3xl font-bold text-indigo-600">+10</span>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-wrap gap-4">
            {/* <a
              href="https://wa.me/551151997967"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              💬 Vamos Conversar
            </a> */}
            <ButtonCall link="https://wa.me/551151997967" text="Vamos conversar ?"/>
            <a
              href="https://www.linkedin.com/in/caabeatriz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              📈 Ver Meus Resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
