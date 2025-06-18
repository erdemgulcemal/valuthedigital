import { Mail, MapPin, Phone, ArrowUpRight, Code, Palette, Smartphone, FolderCheck, CheckCircle2, Clock, Sparkles, Send } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ValutheDigital2 from "../assets/ValutheDigital-2.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Revolutionary Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/15 to-purple-900/20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        {/* Subtle mesh pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-8 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-6 max-w-6xl mx-auto lg:ml-24">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center md:items-start">
                <Link to="/" onClick={() => {
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }} className="flex items-center gap-2">
                  <img
                    src={ValutheDigital2}
                    alt="Valuthe Digital"
                    className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] active:scale-95 filter-none"
                    style={{
                      imageRendering: 'crisp-edges',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </Link>
                <p className="text-gray-300 mb-4 md:mb-6 max-w-sm leading-relaxed text-sm text-center md:text-left">
                  Modern web tasarım ve geliştirme çözümleriyle işletmenizi dijital dünyada başarıya taşıyoruz.
                </p>
              </div>
            </div>

            {/* Services, Quick Links, Quick Contact Container */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-4 lg:gap-6 lg:ml-12">
                {/* Services */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                  <h3 className="text-white font-semibold mb-2 md:mb-3 text-lg md:text-base flex items-center justify-center md:justify-start gap-2 text-sm">
                    <Code className="w-4 h-4 md:w-4 md:h-4 w-3.5 h-3.5 text-emerald-400" />
                    Projelerimiz
                  </h3>
                  <ul className="flex flex-row md:flex-col lg:flex-col gap-2 md:gap-0 lg:gap-0 md:space-y-2 lg:space-y-3 justify-center md:justify-start">
                    <li>
                      <button
                        onClick={() => navigate('/projects?filter=completed')}
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-left"
                      >
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500 mr-2 group-hover:text-white transition-colors duration-300" />
                        <span className="text-[15px] md:text-base group-hover:translate-x-1 transition-transform duration-300">Tamamlananlar</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('/projects?filter=ongoing')}
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-left"
                      >
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-orange-500 mr-2 group-hover:text-white transition-colors duration-300" />
                        <span className="text-[15px] md:text-base group-hover:translate-x-1 transition-transform duration-300">Devam Edilenler</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('/projects?filter=upcoming')}
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-left"
                      >
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-500 mr-2 group-hover:text-white transition-colors duration-300" />
                        <span className="text-[15px] md:text-base group-hover:translate-x-1 transition-transform duration-300">Çok Yakında</span>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold mb-2 md:mb-3 text-lg md:text-base flex items-center justify-center md:justify-start gap-2 text-sm">
                    <ArrowUpRight className="w-4 h-4 md:w-4 md:h-4 w-3.5 h-3.5 text-blue-400" />
                    Hızlı Linkler
                  </h3>
                  <ul className="flex flex-row md:flex-col justify-center md:justify-start gap-3 md:gap-1.5 md:space-y-1.5">
                    <li>
                      <button
                        onClick={() => navigate('/about')}
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-left"
                      >
                        <span className="w-2 h-2 md:w-2 md:h-2 w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="text-[15px] md:text-base group-hover:translate-x-1 transition-transform duration-300">Hakkımızda</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          if (location.pathname === '/') {
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            navigate('/#services');
                          }
                        }}
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-left"
                      >
                        <span className="w-2 h-2 md:w-2 md:h-2 w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="text-[15px] md:text-base group-hover:translate-x-1 transition-transform duration-300">Hizmetlerimiz</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          if (location.pathname === '/') {
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            navigate('/#pricing');
                          }
                        }}
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-left"
                      >
                        <span className="w-2 h-2 md:w-2 md:h-2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="text-[15px] md:text-base group-hover:translate-x-1 transition-transform duration-300">Planlarımız</span>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="lg:ml-[-12px]">
                  <h3 className="text-white font-semibold mb-2 md:mb-3 text-lg md:text-base flex items-center justify-center md:justify-start gap-2 text-sm">
                    <Phone className="w-4 h-4 md:w-4 md:h-4 w-3.5 h-3.5 text-blue-400" />
                    Hızlı İletişim
                  </h3>
                  <p className="text-gray-400 text-[15px] md:text-sm mb-3 md:mb-4 leading-relaxed text-xs text-center md:text-left">
                    Projeniz için hemen<br className="hidden md:block" /> iletişime geçin
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    <button
                      onClick={() => {
                        if (location.pathname === '/') {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate('/#contact');
                        }
                      }}
                      className="w-full md:w-[120px] px-3 py-2.5 bg-gradient-to-r from-purple-500/90 to-pink-500/90 rounded-lg text-white text-sm md:text-xs font-medium hover:scale-105 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4 md:w-4 md:h-4 w-3.5 h-3.5 flex-shrink-0" />
                      <span>Mesaj Gönder</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-700/50 lg:mr-24 lg:ml-12">
            <div className="lg:ml-20">
              <p className="text-center text-gray-400 text-sm md:text-base">
                © {currentYear} Valuthe Digital. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
