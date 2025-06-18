
import { ArrowRight, Code, Palette, Zap, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const navigate = useNavigate();
  const robotRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [robotHover, setRobotHover] = useState(0); // 0: robot-1, 1: robot-2, 2: robot-3

  // Simple scroll effect only
  useEffect(() => {
    // Set visible for animations
    setIsVisible(true);

    // Handle scroll position
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // Scroll pozisyonunu kontrol et, ancak robot değişimini devre dışı bırak
      // Sadece robot-1.png (normal durumda) görünsün

      if (robotRef.current) {
        robotRef.current.style.transform = `translateY(${newScrollY * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6 sm:mb-8">
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 animate-pulse" />
          <span className="text-purple-400 text-xs sm:text-sm font-medium">Dijital Mükemmelliğe Hoş Geldiniz</span>
        </div>

        <h1 className="text-5xl xs:text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-flow block leading-[1.3]">
            Dijital Dünyada
          </span>
          <span className="bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent block leading-[1.3] -mt-1">
            Öne Çıkın
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
          Valuthe Digital, modern web tasarım ve geliştirme çözümleriyle işletmenizi dijital dünyada başarıya taşır.
          <span className="hidden sm:inline"> Performans ve kullanıcı deneyimini maksimize eden projeler üretiyoruz.</span>
        </p>

        {/* Floating Category Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-16 px-2">
          {['Web Tasarım', 'Web Geliştirme', 'SEO', 'Sosyal Medya Yönetimi', 'Özel Yazılım'].map((category, i) => (
            <div
              key={category}
              className="px-3 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/80 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-fade-in-up text-sm sm:text-base"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Modern Hero Visual - Mobile: Above buttons, Desktop: Below buttons */}
        <div className="relative mt-12 mb-12 sm:hidden animate-fade-in-up px-2" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-full sm:max-w-5xl mx-auto">
              <div className="relative group overflow-hidden"
                onMouseEnter={() => setRobotHover(1)}
                onMouseLeave={() => setRobotHover(0)}>
                <img
                  ref={robotRef}
                  src="/assets/0_fyr1pj-XIXkPvAOo.png"
                  alt="Digital Innovation"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105 max-h-[50vh] sm:max-h-none object-cover z-10 relative"
                  style={{ position: "relative", zIndex: "5" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl sm:rounded-3xl" style={{ zIndex: "1" }}></div>

                {/* Robot Images - Mobile */}
                <div className="absolute -top-8 -right-4 w-48 h-48 z-20 overflow-visible">
                  <img
                    src="/assets/robot-1.png"
                    alt="Robot 1"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 transform ${robotHover === 0
                      ? "translate-y-0 opacity-100 rotate-3"
                      : robotHover === 1
                        ? "translate-y-full opacity-0 rotate-6"
                        : "translate-y-full opacity-0 rotate-6"
                      }`}
                    style={{ clipPath: "none", position: "absolute" }}
                  />
                  <img
                    src="/assets/robot-2.png"
                    alt="Robot 2"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 transform ${robotHover === 1
                      ? "translate-y-0 opacity-100 rotate-3"
                      : robotHover === 0
                        ? "translate-y-full opacity-0 rotate-6"
                        : "translate-y-full opacity-0 rotate-6"
                      }`}
                    style={{ clipPath: "none", position: "absolute" }}
                  />
                  <img
                    src="/assets/robot-3.png"
                    alt="Robot 3"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 transform ${robotHover === 2
                      ? "translate-y-0 opacity-100 rotate-3"
                      : robotHover === 1
                        ? "translate-y-full opacity-0 rotate-6"
                        : "translate-y-full opacity-0 rotate-6"
                      }`}
                    style={{ clipPath: "none", position: "absolute" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons - Mobile: Below image, Desktop: Above image */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-5 sm:mb-16 px-4 mt-24 sm:mt-0">
          <button
            onClick={() => navigate('/projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl animate-fade-in-up text-base sm:text-lg"
            style={{ animationDelay: '0.8s' }}
          >
            <Palette className="w-4 sm:w-5 h-4 sm:h-5" />
            Projelerimizi İncele
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-fade-in-up text-base sm:text-lg"
            style={{ animationDelay: '0.9s' }}
          >
            <Code className="w-4 sm:w-5 h-4 sm:h-5" />
            Hizmetlerimiz
          </button>
        </div>

        {/* Modern Hero Visual - Desktop: Below buttons */}
        <div className="relative mt-8 sm:mt-16 hidden sm:block animate-fade-in-up px-2" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-full sm:max-w-5xl mx-auto">
              <div className="relative group overflow-hidden"
                onMouseEnter={() => setRobotHover(1)}
                onMouseLeave={() => setRobotHover(0)}>
                <img
                  src="/assets/0_fyr1pj-XIXkPvAOo.png"
                  alt="Digital Innovation"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105 max-h-[50vh] sm:max-h-none object-cover z-10 relative"
                  style={{ position: "relative", zIndex: "5" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl sm:rounded-3xl" style={{ zIndex: "1" }}></div>

                {/* Robot Images - Desktop */}
                <div className="absolute -top-16 -right-8 w-80 h-80 z-20 overflow-visible">
                  <img
                    src="/assets/robot-1.png"
                    alt="Robot 1"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 transform ${robotHover === 0
                      ? "translate-y-0 opacity-100 rotate-3"
                      : robotHover === 1
                        ? "translate-y-full opacity-0 rotate-6"
                        : "translate-y-full opacity-0 rotate-6"
                      }`}
                    style={{ clipPath: "none", position: "absolute" }}
                  />
                  <img
                    src="/assets/robot-2.png"
                    alt="Robot 2"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 transform ${robotHover === 1
                      ? "translate-y-0 opacity-100 rotate-3"
                      : robotHover === 0
                        ? "translate-y-full opacity-0 rotate-6"
                        : "translate-y-full opacity-0 rotate-6"
                      }`}
                    style={{ clipPath: "none", position: "absolute" }}
                  />
                  <img
                    src="/assets/robot-3.png"
                    alt="Robot 3"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 transform ${robotHover === 2
                      ? "translate-y-0 opacity-100 rotate-3"
                      : robotHover === 1
                        ? "translate-y-full opacity-0 rotate-6"
                        : "translate-y-full opacity-0 rotate-6"
                      }`}
                    style={{ clipPath: "none", position: "absolute" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

