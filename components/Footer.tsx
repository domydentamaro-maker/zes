import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
               <span className="text-2xl font-bold text-white tracking-tight">2D <span className="text-blue-500">Sviluppo Immobiliare</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Siamo specializzati nello sviluppo immobiliare a 360 gradi. Dalla ricerca delle aree edificabili alla progettazione, fino alla consulenza strategica per l'accesso ai fondi ZES e PNRR. Costruiamo valore per il tuo business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Contatti */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contatti Diretti</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:info@2dsviluppoimmobiliare.it" className="hover:text-white transition-colors">
                  info@2dsviluppoimmobiliare.it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <a href="tel:+393408039322" className="hover:text-white transition-colors">
                  340 803 9322
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Link Utili */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Esplora</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Chi Siamo</a></li>
              <li><a href="#focus" onClick={(e) => handleScroll(e, '#focus')} className="hover:text-blue-500 transition-colors">Terziario & ZES</a></li>
              <li><a href="#steps" onClick={(e) => handleScroll(e, '#steps')} className="hover:text-blue-500 transition-colors">Come Operiamo</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} 2D Sviluppo Immobiliare. P.IVA / C.F. inclusi nei termini legali.</p>
          <p className="mt-2 md:mt-0">Realizzato con professionalità per il business.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;