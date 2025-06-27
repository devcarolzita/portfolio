
// const NavBar = () => {
//   return (
//     <header className="border-b border-zinc-800 ">
//     <nav className="flex w-full justify-between px-6 py-4 items-center flex-col lg:flex-row">
//       <p className="text-purple-500 text-2xl font-bold"> Kroltec</p>
//       <ul className="flex w-sm justify-between text-gray-400">
//         <a href="">
//           <li>Home</li>
//         </a>
//         <a href="#about">
//           <li>Sobre</li>
//         </a>
//         <a href="#projects">
//           <li>Projetos</li>
//         </a>
//         <a href="#contact">
//           <li>Contato</li>
//         </a>
//       </ul>
//       <a href="./public/cv.pdf" target="_blank" className="rounded-md border-2 px-4 py-2 border-input border-zinc-800">
//       Download CV
//       </a>
//     </nav>
//     </header>
//   );
// };

// export default NavBar;

import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones hamburguer e fechar

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800">
      <nav className="w-full px-6 py-4 flex flex-col lg:flex-row items-center justify-between relative">
        <div className="flex w-full justify-between items-center lg:w-auto">
          <p className="text-purple-500 text-2xl font-bold">Kroltec</p>

          {/* Botão Hamburguer - aparece só no mobile */}
          <button
            className="lg:hidden text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links de navegação */}
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-8 text-gray-400 w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300 ease-in-out
            ${menuOpen ? "block" : "hidden lg:flex"}`}
        >
          <li><a href="">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        {/* Botão Download CV */}
        {/* <a
          href="./public/cv.pdf"
          target="_blank"
          className="mt-4 lg:mt-0 rounded-md border-2 px-4 py-2 border-zinc-800 text-gray-400"
        >
          Download CV
        </a> */}
      </nav>
    </header>
  );
};

export default NavBar;

