import BorderButton from "./BorderButton";
import Title from "./Title";
const Contact = () => {
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    await fetch("https://formsubmit.co/contatocarolinebs@gmail.com", {
      method: "POST",
      body: formData,
    });
  
    alert("Mensagem enviada!");
  };
  return (
    <section id="contact" className="flex flex-col lg:flex-row w-full h-auto items-center gap-10 justify-between mt-20">
      <div className="w-full max-w-md h-auto flex flex-col gap-5 items-baseline">
        <BorderButton text="Contato" />
        <Title title="Vamos trabalhar" subTitle="em conjunto!" />
        <p>
          No momento, estou disponível para trabalho freelance e posições de
          tempo integral. Se você estiver interessado em trabalhar comigo ou
          tiver alguma dúvida, sinta-se à vontade para entrar em contato.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <a href="mailto:contatocarolinebs@gmail.com">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            </a>
            <a href="mailto:contatocarolinebs@gmail.com"> <span>contatocarolinebs@gmail.com</span></a>
           
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <a href="https://www.linkedin.com/in/caabeatriz/"> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg></a>
             
            </div>
            <a href="https://www.linkedin.com/in/caabeatriz/"><span>linkedin.com/in/caabeatriz/</span></a>
            
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <a href="https://github.com/devcarolzita"> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg></a>
             
            </div>
            <a href="https://github.com/devcarolzita"> <span>github.com/devcarolzita</span></a>
           
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg  h-auto">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <form className="space-y-6 max-w-lg" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none"
              >
                Name
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu email"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none"
              >
                Message
              </label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Diga!"
                required
              />
            </div>
            <button className="w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
