import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Başlangıç Paketi",
    price: "6.000₺",
    description: "Küçük işletmeler için ideal başlangıç paketi",
    features: [
      "Responsive Tasarım",
      "SSL Sertifikası",
      "5 Sayfa Web Sitesi",
      "İletişim Formu",
      "Sosyal Medya Entegrasyonu",
      "2 Ay Ücretsiz Destek"
    ],
    isPopular: false
  },
  {
    name: "Profesyonel Paket",
    price: "12.000₺",
    description: "Büyüyen işletmeler için profesyonel çözümler",
    features: [
      "Başlangıç Paketi Özellikleri",
      "10 Sayfa Web Sitesi",
      "E-posta Entegrasyonu",
      "Özel Admin Paneli",
      "Kusursuz Tasarım",
      "SSL Sertifikası",
      "6 Ay Ücretsiz Destek"
    ],
    isPopular: true
  },
  {
    name: "İleri Düzey Paket",
    price: "25.000₺",
    description: "Kurumsal firmalar için tam kapsamlı çözümler",
    features: [
      "Profesyonel Paket Özellikleri",
      "Sınırsız Sayfa",
      "Sosyal Medya Yönetimi",
      "Özel Yazılım Geliştirme",
      "Performans Optimizasyonu",
      "Kusursuz Tasarım",
      "SSL Sertifikası",
      "Öncelikli Destek",
      "12 Ay Ücretsiz Bakım"
    ],
    isPopular: false
  }
];

export const PricingSection = () => {
  const navigate = useNavigate();

  const handlePlanClick = (planName: string) => {
    if (planName === "Profesyonel Paket") {
      navigate('/plan/professional');
    } else if (planName === "Başlangıç Paketi") {
      navigate('/plan/baslangic');
    } else if (planName === "İleri Düzey Paket") {
      navigate('/plan/enterprise');
    } else {
      const routeName = planName.toLowerCase().replace('ı', 'i').replace('ç', 'c').replace('ş', 's').replace('ğ', 'g').replace('ü', 'u').replace('ö', 'o');
      navigate(`/plan/${routeName}`);
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Header */}
        <div className="text-center mb-12 sm:mb-16 block md:hidden">
          <h2 className="text-4xl xs:text-5xl font-bold mb-4 px-2">
            <span className="bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-flow">
              Fiyatlandırma Planları
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
            İhtiyaçlarınıza uygun çözümler ile dijital dönüşümünüzü başlatın
          </p>
        </div>

        {/* Desktop Header */}
        <div className="text-center mb-16 hidden md:block">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl section-heading mb-6">
            <span className="animate-text-flow">
              Fiyatlandırma Planları
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            İhtiyaçlarınıza uygun çözümler ile dijital dönüşümünüzü başlatın
          </p>
        </div>

        {/* Mobile Card Stack */}
        <div className="space-y-6 block md:hidden px-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-1 transition-all duration-500 hover:scale-105 ${plan.isPopular
                ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 shadow-lg shadow-purple-500/20 scale-105'
                : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-102'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg z-20">
                  En Popüler
                </div>
              )}

              <div className="bg-gray-900 rounded-lg p-4 backdrop-blur-sm relative">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs mb-3">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-xs ml-1">/ başlangıç</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 text-xs">
                  {plan.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 gap-2">
                      <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-gray-400 text-xs text-center">
                      +{plan.features.length - 4} özellik daha
                    </li>
                  )}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-2.5 rounded-lg font-medium text-xs transition-all duration-300 ${plan.isPopular
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white hover:opacity-90'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                >
                  Detayları İncele
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative hidden md:grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-1 transition-all duration-500 ${plan.isPopular
                ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 shadow-xl shadow-purple-500/20 hover:scale-105 scale-105 z-10 ring-2 ring-purple-500/50'
                : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-102'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-1.5 rounded-full text-sm font-bold whitespace-nowrap shadow-lg animate-pulse-subtle z-20">
                  En Popüler
                </div>
              )}

              <div className="bg-gray-900 rounded-xl p-6 h-full backdrop-blur-sm relative flex flex-col items-center text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-2 mt-2">/ başlangıç</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-sm w-full">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-gray-300 gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-4/5 mx-auto py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${plan.isPopular
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white hover:opacity-90'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                >
                  Planın Detaylarına Göz At
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Footer Message */}
        <div className="text-center mt-12 block md:hidden">
        </div>

        {/* Desktop Footer Message */}
        <div className="text-center mt-16 hidden md:block">
        </div>
      </div>
    </section>
  );
};