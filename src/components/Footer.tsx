import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Entre em Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-golden" />
                <a 
                  href="mailto:elena@elenasantos.com"
                  className="hover:text-golden transition-colors duration-300"
                >
                  elena@elenasantos.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-golden" />
                <a 
                  href="tel:+5511999999999"
                  className="hover:text-golden transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-golden" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="hover:text-golden transition-colors duration-300 cursor-pointer">
                  Casamentos
                </span>
              </li>
              <li>
                <span className="hover:text-golden transition-colors duration-300 cursor-pointer">
                  Ensaios de Casal
                </span>
              </li>
              <li>
                <span className="hover:text-golden transition-colors duration-300 cursor-pointer">
                  Retratos Corporativos
                </span>
              </li>
              <li>
                <span className="hover:text-golden transition-colors duration-300 cursor-pointer">
                  Ensaios Lifestyle
                </span>
              </li>
              <li>
                <span className="hover:text-golden transition-colors duration-300 cursor-pointer">
                  Fotografia de Família
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://instagram.com/elenasantosfoto"
                className="w-10 h-10 bg-golden text-primary rounded-full flex items-center justify-center hover:bg-golden/90 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Receba dicas de fotografia e atualizações dos meus trabalhos
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-background text-foreground rounded-l-sm focus:outline-none focus:ring-2 focus:ring-golden"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-golden text-primary font-medium rounded-r-sm hover:bg-golden/90 transition-colors duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Elena Santos Fotografia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;