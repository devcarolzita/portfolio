
const NavBar = () => {
  return (
    <header className="border-b border-zinc-800 ">
    <nav className="flex w-full justify-between px-6 py-4 items-center flex-col lg:flex-row">
      <p className="text-purple-500 text-2xl font-bold"> Portfólio</p>
      <ul className="flex w-sm justify-between text-gray-400">
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>Sobre</li>
        </a>
        <a href="">
          <li>Skills</li>
        </a>
        <a href="">
          <li>Projetos</li>
        </a>
        <a href="">
          <li>Contato</li>
        </a>
      </ul>
      <button className="rounded-md border-2 px-4 py-2 border-input border-zinc-800">Download CV</button>
    </nav>
    </header>
  );
};

export default NavBar;
