import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo e Direitos Autorais */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Aulas Online de TI e IA</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contato
          </a>
          <a href="/privacidade" className="text-gray-400 hover:text-white">
            Privacidade
          </a>
          <a href="/sobre" className="text-gray-400 hover:text-white">
            Sobre
          </a>
        </div>

        {/* Ícones sociais */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
