import { Code, Palette, Smartphone, Search, Shield, Zap, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      image: "/assets/-a-young-male-web-designer-with-glasses--wearing-j.png",
      title: "Web Tasarım",
      description: "Modern, kullanıcı dostu ve responsive web tasarımları ile markanızı dijital dünyada öne çıkarın.",
      features: ["Profesyonel Tasarım", "Kusursuz Kullanıcı Deneyimi", "Marka Kimliği"],
      icon: <Palette className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500 to-blue-900",
      link: "/projects",
      isExternal: false
    },
    {
      image: "/assets/software.png",
      title: "Web Geliştirme",
      description: "Modern teknolojilerle hızlı, güvenli ve ölçeklenebilir web uygulamaları geliştiriyoruz.",
      features: ["Hızlı Çözüm", "Güvenli Yönetim", "Cross-Platform"],
      icon: <Code className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500 to-blue-900",
      link: "/projects",
      isExternal: false
    },
    {
      image: "/assets/cep-telefonun-i-inde-bir-web-sitesi-.png",
      title: "Mobil Uyumluluk",
      description: "Tüm cihazlarda mükemmel görünen ve çalışan mobil-öncelikli web siteleri geliştiriyoruz.",
      features: ["Mobil Optimizasyon", "Cross-Platform Uyumluluk", "Progressive Web App"],
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500 to-blue-900",
      link: "/projects",
      isExternal: false
    },
    {
      image: "/assets/seo.png",
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almanız için teknik SEO ve içerik optimizasyonu.",
      features: ["Teknik SEO", "İçerik Stratejisi", "Analytics Kurulumu"],
      icon: <Search className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500 to-blue-900",
      link: "/projects",
      isExternal: false
    }

  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        } else {
          entry.target.classList.remove('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.2
    });

    document.querySelectorAll('.service-animate').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800/10 via-purple-900/5 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-effect opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Optimized Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl xs:text-5xl sm:text-4xl lg:text-5xl section-heading mb-6 sm:mb-8">
            <span className="animate-text-flow whitespace-nowrap">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-glow animate-fade-in-up px-4 sm:px-0">
            Dijital dünyada başarılı olmak için ihtiyaç duyduğunuz tüm hizmetleri tek çatı altında sunuyoruz.
          </p>
        </div>

        {/* Mobile Optimized Service showcase */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 lg:gap-20`}
            >
              {/* Mobile Optimized Image Container */}
              <div className={`w-full lg:w-1/2 opacity-0 service-animate px-4 sm:px-0 ${index === 0 ? 'delay-300' :
                index === 1 ? 'delay-500' :
                  index === 2 ? 'delay-700' :
                    'delay-900'
                }`}>
                <div className="relative group perspective-1000">
                  <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-br ${service.color}/20 rounded-xl blur-lg group-hover:opacity-100 opacity-70 transition duration-500`}></div>
                  <div className="relative transform-style-3d group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-2xl image-3d"
                    />

                    {/* Mobile Optimized Floating icon */}
                    <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 rounded-full flex items-center justify-center backdrop-blur-md border border-gray-700/50 shadow-lg animate-float">
                      <div className="scale-75 sm:scale-100">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Optimized Content Container */}
              <div className={`w-full lg:w-1/2 opacity-0 service-animate px-4 sm:px-0 ${index === 0 ? 'delay-400' :
                index === 1 ? 'delay-600' :
                  index === 2 ? 'delay-800' :
                    'delay-1000'
                }`}>
                {/* Mobile Optimized Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl section-heading mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg mr-3 sm:mr-4`}>
                      <div className="scale-75 sm:scale-100">
                        {service.icon}
                      </div>
                    </div>
                    <span className="animate-text-flow">
                      {service.title}
                    </span>
                  </div>
                </h3>

                {/* Mobile Optimized Description */}
                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed delay-200">
                  {service.description}
                </p>

                {/* Mobile Optimized Feature List */}
                <ul className="space-y-3 sm:space-y-4 delay-300 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-300 group">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 sm:mr-3 group-hover:scale-150 transition-transform duration-300`}></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
