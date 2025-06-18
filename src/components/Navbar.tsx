import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ValutheDigital1 from "../assets/ValutheDigital-1.png";
import Valuthe2 from "../assets/Valuthe-2.png";

const floatAnimation = `
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
`;

const mobileMenuAnimation = `
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
  to {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
}

@keyframes glowPulse {
  0% {
    box-shadow: 0 0 5px rgba(139, 92, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(139, 92, 246, 0.3);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

.mobile-menu-backdrop {
  animation: fadeIn 0.4s ease-out forwards;
}

.mobile-menu-backdrop.closing {
  animation: fadeOut 0.3s ease-out forwards;
}

.mobile-menu-content {
  animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.mobile-menu-content.closing {
  animation: slideOut 0.3s ease-out forwards;
}

.menu-header-glow {
  animation: glowPulse 3s infinite;
}

.hover-shadow-glow:hover {
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
}

.menu-item-animation {
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
}

.menu-item-delay-1 {
  animation-delay: 0.1s;
}

.menu-item-delay-2 {
  animation-delay: 0.2s;
}

.menu-item-delay-3 {
  animation-delay: 0.3s;
}

.menu-item-delay-4 {
  animation-delay: 0.4s;
}

.menu-item-delay-5 {
  animation-delay: 0.5s;
}
`;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const [menuAnimationClass, setMenuAnimationClass] = useState("");
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the About, Projects, or Plan pages
  const isAboutPage = location.pathname === '/about';
  const isProjectsPage = location.pathname === '/projects';
  const isPlanBaslangicPage = location.pathname === '/plan/baslangic';
  const isPlanProfessionalPage = location.pathname === '/plan/professional';
  const isPlanEnterprisePage = location.pathname === '/plan/enterprise';
  const isPlanPage = isPlanBaslangicPage || isPlanProfessionalPage || isPlanEnterprisePage;

  // Track scroll position to change navbar appearance and detect active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Detect which section is currently in view
      const sections = isAboutPage
        ? ["hero", "biz-kimiz", "misyon-vizyon", "neden-biz", "calisma-sureci", "iletisim"]
        : isProjectsPage
          ? ["hero", "proje-istatistikleri", "one-cikan-projeler", "tum-projeler"]
          : isPlanPage
            ? ["hero", "paket-detaylari", "ozellikler", "karsilastirma", "calisma-sureci"]
            : ["home", "services", "about", "contact"];

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ana sayfa, hakkımızda, hizmetler ve iletişim bölümlerinde seçili kısım olsun
          if (section === "home" || section === "about" || section === "services" || section === "contact") {
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, isAboutPage, isProjectsPage, isPlanPage]);

  // Different nav items based on current page
  const homeNavItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "İletişim", href: "#contact" },
  ];

  const aboutNavItems = [
    { name: "Biz Kimiz", href: "#story" },
    { name: "Misyon & Vizyon", href: "#misyon-vizyon" },
    { name: "Neden Biz", href: "#neden-biz" },
    { name: "Çalışma Süreci", href: "#calisma-sureci" }
  ];

  const projectsNavItems = [
    { name: "Proje İstatistikleri", href: "#proje-istatistikleri" },
    { name: "Öne Çıkan Projeler", href: "#one-cikan-projeler" },
    { name: "Tüm Projeler", href: "#tum-projeler" }
  ];

  const planNavItems = [
    { name: "Detaylar", href: "#paket-detaylari" },
    { name: "Özellikler", href: "#ozellikler" },
    { name: "Karşılaştırma", href: "#karsilastirma" },
    { name: "Süreç", href: "#calisma-sureci" }
  ];

  const navItems = isAboutPage ? aboutNavItems : isProjectsPage ? projectsNavItems : isPlanPage ? planNavItems : homeNavItems;

  // Mobil menü için yeni nav items
  const mobileNavItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Projelerimiz", href: "/projects" },
    {
      name: "Planlarımız",
      href: "#plans",
      subItems: [
        { name: "Başlangıç", href: "/plan/baslangic" },
        { name: "Professional", href: "/plan/professional" },
        { name: "Enterprise", href: "/plan/enterprise" }
      ]
    }
  ];

  const handleLogoClick = () => {
    // Önce scroll'u en üste al
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Navigate et
    navigate('/');

    // Navigate işleminden sonra da garantilemek için tekrar scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);
  };

  const handleNavClick = (href: string) => {
    if ((isAboutPage || isProjectsPage || isPlanPage) && href.startsWith('#')) {
      // If we're on About, Projects, or Plan page and clicking an anchor link, smooth scroll
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 100; // Navbar yüksekliği için offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (!isAboutPage && !isProjectsPage && !isPlanPage && href.startsWith('#')) {
      // If we're on home page and clicking anchor link, let default behavior work
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 100; // Navbar yüksekliği için offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Menü durumunu sıfırlama
  const resetMenuState = () => {
    if (isMenuAnimating) return;

    setMenuAnimationClass("closing");
    setIsMenuAnimating(true);

    setTimeout(() => {
      setIsMenuOpen(false);
      setIsPlansOpen(false);
      setMenuAnimationClass("");
      setIsMenuAnimating(false);
    }, 300); // Animasyon süresi kadar bekle
  };

  // Menüyü açma
  const openMenu = () => {
    if (isMenuAnimating) return;

    setIsMenuOpen(true);
    setMenuAnimationClass("opening");
    setIsMenuAnimating(true);

    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 400);
  };

  // ESC tuşu ile menüyü kapatma
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        resetMenuState();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  // Menü dışına tıklandığında kapatma
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-content') && !target.closest('.menu-button')) {
        resetMenuState();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[99999] ${scrolled || isAboutPage || isProjectsPage || isPlanPage
      ? "bg-transparent py-0.5"
      : "bg-transparent py-1"
      }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Mobile Logo - Centered */}
          <div className="md:hidden w-full flex justify-center">
            <button onClick={handleLogoClick} className="flex items-center justify-center group relative cursor-pointer bg-transparent border-none p-0">
              <img
                src={ValutheDigital1}
                alt="Valuthe Digital Logo"
                className={`h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] active:scale-95 ${scrolled ? 'logo-scrolled' : ''} filter-none`}
                style={{
                  imageRendering: 'crisp-edges',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              />
            </button>
          </div>

          {/* Desktop Logo - Left aligned */}
          <div className="hidden md:block">
            <button onClick={handleLogoClick} className="flex items-center justify-center group relative cursor-pointer bg-transparent border-none p-0">
              <img
                src={ValutheDigital1}
                alt="Valuthe Digital Logo"
                className={`h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] active:scale-95 ${scrolled ? 'logo-scrolled' : ''} filter-none`}
                style={{
                  imageRendering: 'crisp-edges',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              />
            </button>
          </div>

          {/* Desktop Menu - Center aligned */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex items-baseline ${isPlanPage ? 'space-x-6' : 'space-x-8'}`}>
              {navItems.map((item) => {
                const isActive = (isAboutPage || isProjectsPage || isPlanPage)
                  ? `#${activeSection}` === item.href
                  : `#${activeSection}` === item.href;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-gray-300 hover:text-white ${isPlanPage ? 'px-2' : 'px-3'} py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group bg-transparent border-none cursor-pointer ${isActive ? "text-white" : ""
                      } ${isPlanPage ? "whitespace-nowrap" : ""}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-900 transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Planları İncele Button - Only on desktop */}
          <div className="hidden md:block mr-8">
            <button
              onClick={() => {
                // Önce ana sayfaya yönlendir, sonra pricing section'a kaydır
                if (location.pathname !== '/') {
                  navigate('/');
                  // Sayfanın yüklenmesi için kısa bir bekleme süresi
                  setTimeout(() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
            >
              Planları İncele
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => isMenuOpen ? resetMenuState() : openMenu()}
            className="md:hidden relative z-50 p-2 focus:outline-none"
            aria-label="Menü"
          >
            <Menu className={`w-6 h-6 text-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <X className={`w-6 h-6 text-white absolute top-2 left-2 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* Backdrop - Removing dark background */}
          <div
            className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 md:hidden mobile-menu-backdrop ${menuAnimationClass}`}
            onClick={() => resetMenuState()}
          />

          {/* Menu Content - Making it shorter and more attractive */}
          <div className={`fixed top-0 right-0 w-[90%] max-w-sm h-auto rounded-l-xl bg-gradient-to-br from-purple-900/90 via-gray-900/95 to-gray-950/90 z-50 md:hidden transform shadow-xl border-l border-purple-500/20 mobile-menu-content ${menuAnimationClass} flex flex-col backdrop-blur-md`}>
            {/* Menu Header - More attractive */}
            <div className="relative h-14 flex items-center justify-center border-b border-purple-500/20 bg-gradient-to-r from-purple-900/40 to-blue-900/30 overflow-hidden rounded-tl-xl">
              {/* Gradient Background with animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-purple-600/10 animate-gradient-x"></div>

              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={ValutheDigital1}
                  alt="Valuthe Digital Logo"
                  className="h-7 w-auto object-contain filter-none"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => resetMenuState()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-800/50 hover:bg-purple-800/50 transition-all duration-200 focus:outline-none"
                aria-label="Menüyü Kapat"
              >
                <X className="w-4 h-4 text-gray-300 hover:text-white" />
              </button>
            </div>

            {/* Menu Items - Clean vertical layout */}
            <div className="py-4 px-4 flex flex-col">
              {/* Main Navigation Items */}
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                        resetMenuState();
                      }, 100);
                    } else {
                      document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                      resetMenuState();
                    }
                  }}
                  className="flex items-center justify-center w-full bg-purple-900/20 hover:bg-purple-800/30 px-4 py-3 rounded-lg transition-all duration-200 group border border-purple-500/20 hover:border-purple-400/30 menu-item-animation menu-item-delay-1"
                >
                  <span className="text-base font-medium text-white group-hover:text-purple-200">Ana Sayfa</span>
                </button>

                <button
                  onClick={() => {
                    navigate('/about');
                    resetMenuState();
                  }}
                  className="flex items-center justify-center w-full bg-blue-900/20 hover:bg-blue-800/30 px-4 py-3 rounded-lg transition-all duration-200 group border border-blue-500/20 hover:border-blue-400/30 menu-item-animation menu-item-delay-2"
                >
                  <span className="text-base font-medium text-white group-hover:text-blue-200">Hakkımızda</span>
                </button>

                <button
                  onClick={() => {
                    navigate('/projects');
                    resetMenuState();
                  }}
                  className="flex items-center justify-center w-full bg-indigo-900/20 hover:bg-indigo-800/30 px-4 py-3 rounded-lg transition-all duration-200 group border border-indigo-500/20 hover:border-indigo-400/30 menu-item-animation menu-item-delay-3"
                >
                  <span className="text-base font-medium text-white group-hover:text-indigo-200">Projelerimiz</span>
                </button>

                <div className="relative menu-item-animation menu-item-delay-4">
                  <button
                    onClick={() => setIsPlansOpen(!isPlansOpen)}
                    className="flex items-center justify-between w-full bg-pink-900/20 hover:bg-pink-800/30 px-4 py-3 rounded-lg transition-all duration-200 group border border-pink-500/20 hover:border-pink-400/30"
                  >
                    <span className="text-base font-medium text-white group-hover:text-pink-200">Planlarımız</span>
                    <svg className={`w-4 h-4 text-gray-400 group-hover:text-pink-200 transition-transform duration-200 ${isPlansOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Plans Dropdown */}
                  {isPlansOpen && (
                    <div className="mt-2 p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-pink-500/20 space-y-2">
                      <button
                        onClick={() => {
                          navigate('/plan/baslangic');
                          resetMenuState();
                        }}
                        className="block w-full text-center text-sm text-gray-300 hover:text-white px-3 py-2 hover:bg-pink-900/30 rounded transition-colors border border-transparent hover:border-pink-500/20"
                      >
                        Başlangıç Planı
                      </button>
                      <button
                        onClick={() => {
                          navigate('/plan/professional');
                          resetMenuState();
                        }}
                        className="block w-full text-center text-sm text-gray-300 hover:text-white px-3 py-2 hover:bg-pink-900/30 rounded transition-colors border border-transparent hover:border-pink-500/20"
                      >
                        Professional Plan
                      </button>
                      <button
                        onClick={() => {
                          navigate('/plan/enterprise');
                          resetMenuState();
                        }}
                        className="block w-full text-center text-sm text-gray-300 hover:text-white px-3 py-2 hover:bg-pink-900/30 rounded transition-colors border border-transparent hover:border-pink-500/20"
                      >
                        Enterprise Plan
                      </button>
                    </div>
                  )}
                </div>
              </nav>

              {/* Contact Button */}
              <div className="mt-4">
                <button
                  onClick={() => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        resetMenuState();
                      }, 100);
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      resetMenuState();
                    }
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-base font-medium rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-glow border border-purple-500/30 hover:border-purple-400/50 menu-item-animation menu-item-delay-5"
                >
                  <span>İletişime Geç</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{floatAnimation}</style>
      <style>{mobileMenuAnimation}</style>
    </nav>
  );
};
