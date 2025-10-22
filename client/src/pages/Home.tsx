
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Leaf,
  Truck,
  Palette,
  Package,
  Wrench,
  Droplet,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

function QuotationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    packagingType: "",
    estimatedQuantity: "",
    message: "",
  });

  const createQuotation = trpc.quotation.create.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createQuotation.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        packagingType: formData.packagingType,
        estimatedQuantity: parseInt(formData.estimatedQuantity),
        message: formData.message,
      });

      toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        packagingType: "",
        estimatedQuantity: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar orçamento. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#F5F5F5] p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
            placeholder="seu@email.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
            Telefone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
            placeholder="(11) 98938-8156"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
            Empresa
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
            placeholder="Nome da empresa"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
          Tipo de Embalagem
        </label>
        <select 
          name="packagingType"
          value={formData.packagingType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
        >
          <option value="">Selecione um tipo (opcional)</option>
          <option value="Bisnaga">Bisnaga</option>
          <option value="Linha Pet">Linha Pet</option>
          <option value="Linha Pote">Linha Pote</option>
          <option value="Roll-On">Roll-On</option>
          <option value="Frasco">Frasco</option>
          <option value="Tampa">Tampa</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
          Quantidade Estimada
        </label>
        <input
          type="number"
          name="estimatedQuantity"
          value={formData.estimatedQuantity}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
          placeholder="Quantidade de unidades"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1B5E3F] mb-2">
          Mensagem
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0FF00]"
          placeholder="Descreva suas necessidades e especificações"
        ></textarea>
      </div>

      <Button 
        type="submit" 
        className="btn-primary w-full"
        disabled={createQuotation.isPending}
      >
        {createQuotation.isPending ? "Enviando..." : "Enviar Orçamento"}
      </Button>
    </form>
  );
}

export default function Home() {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="inicio"
        className="hero-bg py-20 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                JV Embalagens
              </h1>
              <p className="text-xl md:text-2xl text-[#C0FF00] font-semibold mb-4">
                Inovação e Sustentabilidade em Plásticos
              </p>
              <p className="text-lg text-gray-100 mb-8">
                Mais de 5 anos no mercado, impactando com qualidade, eficiência
                e soluções eco-friendly para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#produtos" className="btn-primary inline-block text-center">
                  Conheça Nossos Produtos
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <img
                  src="/embalagem-cosmetico-1.png"
                  alt="Embalagem de Cosmético"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Sobre a JV Embalagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="card-accent">
              <Zap className="w-12 h-12 text-[#C0FF00] mb-4" />
              <h3 className="text-xl font-bold text-[#1B5E3F] mb-3">Inovação</h3>
              <p className="text-[#2C3E50]">
                Soluções criativas e modernas para embalagens que diferenciam sua marca.
              </p>
            </Card>
            <Card className="card-accent">
              <Leaf className="w-12 h-12 text-[#C0FF00] mb-4" />
              <h3 className="text-xl font-bold text-[#1B5E3F] mb-3">Sustentabilidade</h3>
              <p className="text-[#2C3E50]">
                Compromisso com soluções eco-friendly que minimizam impactos ambientais.
              </p>
            </Card>
            <Card className="card-accent">
              <Truck className="w-12 h-12 text-[#C0FF00] mb-4" />
              <h3 className="text-xl font-bold text-[#1B5E3F] mb-3">Qualidade</h3>
              <p className="text-[#2C3E50]">
                Cuidado e excelência em cada detalhe do processo de produção.
              </p>
            </Card>
          </div>

          <div className="bg-[#F5F5F5] rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#1B5E3F] mb-4">
              A Embalagem Vende!
            </h3>
            <p className="text-[#2C3E50] text-lg mb-4">
              A identidade visual é imprescindível para qualquer produto que busca
              diferenciação competitiva no mercado. Uma embalagem exclusiva e bem
              projetada é fundamental para o sucesso comercial.
            </p>
            <p className="text-[#2C3E50] text-lg">
              Na JV Embalagens, sugerimos aos nossos clientes optarem por embalagens
              com design único e diferenciado para que seus produtos tenham alta
              competitividade de mercado e complexidade de falsificação.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustentabilidade" className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Sustentabilidade</h2>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B5E3F] mb-6 text-center">
              Compromisso Ambiental
            </h3>
            <p className="text-[#2C3E50] mb-8 text-center max-w-3xl mx-auto">
              Nos preocupamos em minimizar os impactos do plástico no meio
              ambiente. Todas as nossas embalagens podem ser biodegradáveis,
              oferecendo soluções sustentáveis para sua empresa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-bombona-5l.png" alt="Bombona 5L" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Bombona 5L</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-cosmetico-1.png" alt="Cosméticos" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Cosméticos</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-oleo.png" alt="Óleos" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Óleos</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-frasco-spray.png" alt="Spray" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Spray</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-pote-alimento.png" alt="Alimentos" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Alimentos</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-garrafa-agua.png" alt="Garrafa Água" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Garrafas</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-pote-grande.png" alt="Pote Grande" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Potes</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-frasco-pequeno.png" alt="Frasco Pequeno" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Frascos</p>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/embalagem-balde-plastico.png" alt="Balde Plástico" className="w-full h-48 object-cover" />
                <p className="font-semibold text-[#1B5E3F] text-center p-4">Baldes</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#C0FF00] flex-shrink-0" />
                <span className="text-[#2C3E50]">Materiais eco-friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#C0FF00] flex-shrink-0" />
                <span className="text-[#2C3E50]">Processos sustentáveis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#C0FF00] flex-shrink-0" />
                <span className="text-[#2C3E50]">Redução de resíduos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Soluções 360°</h2>
          <p className="text-center text-[#2C3E50] text-lg mb-12 max-w-2xl mx-auto">
            Somos cinco empresas em uma. Atuamos em todas as etapas da fabricação
            de uma embalagem, desde o desenvolvimento do molde até a rotulagem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="card-accent text-center">
              <Palette className="w-12 h-12 text-[#C0FF00] mx-auto mb-4" />
              <h3 className="font-bold text-[#1B5E3F] mb-2">Design de Embalagens</h3>
              <p className="text-sm text-[#2C3E50]">
                Desenhamos e desenvolvemos embalagens de acordo com suas especificações.
              </p>
            </Card>

            <Card className="card-accent text-center">
              <Droplet className="w-12 h-12 text-[#C0FF00] mx-auto mb-4" />
              <h3 className="font-bold text-[#1B5E3F] mb-2">Sopro</h3>
              <p className="text-sm text-[#2C3E50]">
                Transformamos matéria-prima através do processo de sopro para diferentes nichos.
              </p>
            </Card>

            <Card className="card-accent text-center">
              <Package className="w-12 h-12 text-[#C0FF00] mx-auto mb-4" />
              <h3 className="font-bold text-[#1B5E3F] mb-2">Injeção</h3>
              <p className="text-sm text-[#2C3E50]">
                Fabricamos tampas e potes variados com design exclusivo.
              </p>
            </Card>

            <Card className="card-accent text-center">
              <Wrench className="w-12 h-12 text-[#C0FF00] mx-auto mb-4" />
              <h3 className="font-bold text-[#1B5E3F] mb-2">Ferramentaria</h3>
              <p className="text-sm text-[#2C3E50]">
                Confeccionamos moldes personalizados de forma rápida e única.
              </p>
            </Card>


          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 md:py-32 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Catálogo de Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg overflow-hidden border-t-4 border-[#C0FF00] shadow-sm hover:shadow-md transition-shadow">
              <img src="/embalagem-cosmetico-1.png" alt="Cosméticos" className="w-full h-48 object-cover" />
              <p className="font-semibold text-[#1B5E3F] text-center p-4">Cosméticos</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-t-4 border-[#C0FF00] shadow-sm hover:shadow-md transition-shadow">
              <img src="/embalagem-bombona-5l.png" alt="Bombona 5L" className="w-full h-48 object-cover" />
              <p className="font-semibold text-[#1B5E3F] text-center p-4">Bombona 5L</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-t-4 border-[#C0FF00] shadow-sm hover:shadow-md transition-shadow">
              <img src="/embalagem-oleo.png" alt="Óleos" className="w-full h-48 object-cover" />
              <p className="font-semibold text-[#1B5E3F] text-center p-4">Óleos e Líquidos</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-t-4 border-[#C0FF00] shadow-sm hover:shadow-md transition-shadow">
              <img src="/embalagem-frasco-spray.png" alt="Spray" className="w-full h-48 object-cover" />
              <p className="font-semibold text-[#1B5E3F] text-center p-4">Spray e Limpeza</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-t-4 border-[#C0FF00] shadow-sm hover:shadow-md transition-shadow">
              <img src="/embalagem-pote-alimento.png" alt="Alimentos" className="w-full h-48 object-cover" />
              <p className="font-semibold text-[#1B5E3F] text-center p-4">Alimentos</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-t-4 border-[#C0FF00] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center">
              <Package className="w-12 h-12 text-[#C0FF00] mb-3" />
              <p className="font-semibold text-[#1B5E3F] text-center">Personalizados</p>
            </div>
          </div>
          <div className="text-center">
            <a href="#contato" className="btn-primary inline-block">
              Baixe Nosso Catálogo
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 md:py-16 bg-[#1B5E3F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="https://wa.me/5511989388156"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-[#C0FF00] flex-shrink-0" />
              <div className="text-left">
                <p className="text-white font-semibold">Contato via WhatsApp</p>
                <p className="text-[#C0FF00] text-sm">(11) 98938-8156</p>
              </div>
            </a>
            <a
              href="mailto:comercial@jvembalagens.ind.br"
              className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors"
            >
              <Mail className="w-8 h-8 text-[#C0FF00] flex-shrink-0" />
              <div className="text-left">
                <p className="text-white font-semibold">Email Comercial</p>
                <p className="text-[#C0FF00] text-sm">comercial@jvembalagens.ind.br</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Solicite um Orçamento</h2>
          <div className="max-w-2xl mx-auto">
            <QuotationForm />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="w-8 h-8 text-[#C0FF00] mx-auto mb-3" />
                <h4 className="font-semibold text-[#1B5E3F] mb-2">Telefone</h4>
                <p className="text-[#2C3E50]">(11) 98938-8156</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-[#C0FF00] mx-auto mb-3" />
                <h4 className="font-semibold text-[#1B5E3F] mb-2">Email Comercial</h4>
                <p className="text-[#2C3E50]">comercial@jvembalagens.ind.br</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-[#C0FF00] mx-auto mb-3" />
                <h4 className="font-semibold text-[#1B5E3F] mb-2">Localização</h4>
                <a href="https://maps.app.goo.gl/VywnhHsefHi6oRWx5" target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:text-[#C0FF00] transition-colors">
                  Rua Delicio Alves de Souza, 122<br />Jd Monte Alegre<br />São Paulo, SP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

