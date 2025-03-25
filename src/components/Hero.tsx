import BorderButton from './BorderButton';

const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-4 mb-30 mt-20'>
   <BorderButton text='Disponível para trabalhar' />
    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>Desenvolvedora Front-end <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
    Criando experiências digitais
    </span></h1>
    <p className='max-w-[42rem]  text-zinc-400 sm:text-xl sm:leading-8'>Eu projeto e construo aplicações web modernas que oferecem experiências excepcionais para o usuário.</p>
   
   <div className="flex items-center w-full justify-center gap-5">
    <button className='rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 cursor-pointer  transition duration-500 ease-in-out hover:scale-110'>Entre em contato</button>
    <button className='rounded-md border-2 px-4 py-2 border-input border-zinc-800  transition duration-500 ease-in-out hover:scale-110'>Veja meu trabalho</button>
   </div>

 
    </div>
  )
}

export default Hero
