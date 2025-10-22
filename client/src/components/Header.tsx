import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Sustentabilidade", href: "#sustentabilidade" },
    { label: "Serviços", href: "#servicos" },
    { label: "Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-jv-clean.png"
              alt="JV Embalagens"
              className="h-16 w-16 flex-shrink-0 rounded-full"
              style={{ aspectRatio: '1' }}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#1B5E3F]">JV Embalagens</h1>
              <p className="text-xs text-[#999999]">Plásticos Sustentáveis</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#2C3E50] hover:text-[#1B5E3F] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contato"
              className="btn-primary inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#1B5E3F]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1B5E3F]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#E0E0E0]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-[#2C3E50] hover:text-[#1B5E3F] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-primary inline-block mt-4 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

