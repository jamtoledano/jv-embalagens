import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B5E3F] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#C0FF00]">JV Embalagens</h3>
            <p className="text-sm text-gray-200 mb-4">
              Indústria de embalagens plásticas com foco em sustentabilidade e inovação.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-[#C0FF00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-[#C0FF00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C0FF00]">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#C0FF00] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#C0FF00] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C0FF00] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#C0FF00] transition-colors">
                  Produtos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C0FF00]">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#C0FF00] transition-colors">
                  Design de Embalagens
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0FF00] transition-colors">
                  Sopro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0FF00] transition-colors">
                  Injeção
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0FF00] transition-colors">
                  Ferramentaria
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="border-t border-[#0F3A26] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {currentYear} JV Embalagens. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#C0FF00] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#C0FF00] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

