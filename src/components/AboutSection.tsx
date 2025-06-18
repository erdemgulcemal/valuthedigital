import { Users, Target, Award, Lightbulb, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const AboutSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Animation for counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = statsRef.current?.querySelectorAll('.animate-counter');
            counters?.forEach((counter) => {
              const element = counter as HTMLElement;
              const value = parseInt(element.getAttribute('data-value') || '0');
              let start = 0;
              const duration = 2000;
              const startTime = performance.now();

              const updateCounter = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < duration) {
                  const progress = elapsedTime / duration;
                  const currentValue = Math.floor(progress * value);
                  element.textContent = currentValue + (element.getAttribute('data-suffix') || '');
                  requestAnimationFrame(updateCounter);
                } else {
                  element.textContent = value + (element.getAttribute('data-suffix') || '');
                }
              };

              requestAnimationFrame(updateCounter);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Optimized Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 mb-6 sm:mb-8">
            <Lightbulb className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs sm:text-sm font-medium">Kısa Tanıtım</span>
          </div>

          <h2 className="text-4xl xs:text-5xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Biz Kimiz?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Dijital dünyanın öncü teknoloji şirketi olarak, müşterilerimizin başarısı için
            yenilikçi çözümler üretiyoruz.
          </p>
        </div>

        {/* Mobile Optimized Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 px-2 sm:px-0">
          <div className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-counter" data-value="5" data-suffix="+">0</h3>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Mutlu Müşteri</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-counter" data-value="10" data-suffix="+">0</h3>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Tamamlanan Proje</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-counter" data-value="3" data-suffix="+">0</h3>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Yıllık Deneyim</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-counter" data-value="100" data-suffix="%">0</h3>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>

        {/* Mobile Optimized Main Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Başlık - Sadece mobilde görünür */}
          <h3 className="text-3xl xs:text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center md:hidden">
            <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vizyonumuz ve Misyonumuz
            </span>
          </h3>

          {/* İçerik Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="relative group order-1 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative z-10">
                <img
                  src="/src/assets/-a-young-male-web-designer-with-glasses--wearing-j.png"
                  alt="About Us"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl sm:rounded-3xl"></div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-2 md:order-2 px-4 sm:px-0">
              {/* Başlık - Sadece web sürümünde görünür */}
              <h3 className="hidden md:block text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Vizyonumuz ve Misyonumuz
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Valuthe Digital olarak, işletmelerin dijital dönüşüm yolculuğunda güvenilir bir teknoloji ortağı olmayı hedefliyoruz. Modern web teknolojileri ve yenilikçi çözümlerle, müşterilerimizin online varlığını güçlendiriyor ve rekabet avantajı sağlıyoruz.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Ekibimiz, her projede en son teknolojileri kullanarak, performans ve kullanıcı deneyimini optimize eden çözümler üretiyor. Müşteri odaklı yaklaşımımız ve uzman kadromuzla, dijital başarı hikayelerine imza atıyoruz.
              </p>
              <div className="pt-4 sm:pt-6">
                <button
                  onClick={() => navigate('/about')}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  Daha Fazla Bilgi
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};