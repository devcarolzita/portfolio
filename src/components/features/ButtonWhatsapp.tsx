import { BsWhatsapp } from "react-icons/bs";



export default function WhatsButton() {
  const whatsUrl = `https://wa.me/551151997967?text=Quero%20saber%20mais%20da%kroltec`;

  return (
    <a
      href={whatsUrl}
      target="_blank"
      rel="noreferrer"
      className={
          "fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      }
      aria-label="Fale conosco pelo WhatsApp"
    >
      <BsWhatsapp className="w-6 h-6" />
    </a>
  );
}