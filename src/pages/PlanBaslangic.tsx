import React, { useState, useEffect, useRef } from 'react';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
    Check,
    ArrowRight,
    Phone,
    Mail,
    Users,
    Code,
    Palette,
    Eye,
    Rocket,
    Star,
    Shield,
    Zap,
    Monitor,
    Smartphone,
    SearchCheck,
    MessageCircle,
    Share2,
    Headphones,
    BarChart3
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const PlanBaslangic = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    // Mouse tracking effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Set page title
    useEffect(() => {
        document.title = "Valuthe Digital - Başlangıç Planı";
    }, []);

    // Visibility animation and scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsVisible(true);
    }, []);

    // Main plan data (pricing table style)
    const mainPlan = {
        name: "Başlangıç Paketi",
        price: "6.000₺",
        description: "Küçük işletmeler için ideal web sitesi çözümü",
        features: [
            "Responsive Tasarım",
            "SSL Sertifikası",
            "5 Sayfa Web Sitesi",
            "İletişim Formu",
            "Sosyal Medya Entegrasyonu",
            "2 Ay Ücretsiz Destek"
        ],
        isPopular: false
    };

    // Feature cards
    const featureCards = [
        {
            icon: Monitor,
            title: "5 Sayfa Web Sitesi",
            description: "Temel sayfa yapısı",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: SearchCheck,
            title: "Temel SEO",
            description: "Arama motoru optimizasyonu",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: MessageCircle,
            title: "İletişim Formu",
            description: "Müşteri mesaj sistemi",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Headphones,
            title: "2 Ay Ücretsiz Destek",
            description: "Teknik destek hizmeti",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    // Comparison plans
    const comparisonPlans = [
        {
            name: "Başlangıç Paketi",
            price: "6.000₺",
            features: [
                "Responsive Tasarım",
                "SSL Sertifikası",
                "5 Sayfa Web Sitesi",
                "İletişim Formu",
                "Sosyal Medya Entegrasyonu",
                "2 Ay Ücretsiz Destek"
            ],
            isActive: true,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            name: "Profesyonel Paket",
            price: "12.000₺",
            features: [
                "Başlangıç Paketi Özellikleri",
                "10 Sayfa Web Sitesi",
                "E-posta Entegrasyonu",
                "Özel Admin Paneli",
                "Kusursuz Tasarım",
                "6 Ay Ücretsiz Destek"
            ],
            isActive: false,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            name: "İleri Düzey Paket",
            price: "25.000₺",
            features: [
                "Profesyonel Paket Özellikleri",
                "Sınırsız Sayfa",
                "Sosyal Medya Yönetimi",
                "Özel Yazılım Geliştirme",
                "Özel Yazılım",
                "Öncelikli Destek",
                "12 Ay Destek"
            ],
            isActive: false,
            gradient: "from-amber-500 to-orange-500"
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: '01',
            title: 'Keşif & Analiz',
            description: 'İşletmenizi ve hedef kitlenizi analiz ederiz',
            gradient: 'from-amber-500 to-orange-500',
            icon: Eye
        },
        {
            step: '02',
            title: 'Tasarım',
            description: 'Modern ve kullanıcı dostu tasarım oluştururuz',
            gradient: 'from-emerald-500 to-teal-500',
            icon: Palette
        },
        {
            step: '03',
            title: 'Geliştirme',
            description: 'Responsive ve hızlı web sitesi kodlarız',
            gradient: 'from-purple-500 to-pink-500',
            icon: Code
        },
        {
            step: '04',
            title: 'Test & Teslim',
            description: 'Testleri tamamlayıp sitenizi yayına alırız',
            gradient: 'from-blue-500 to-cyan-500',
            icon: Rocket
        }
    ];

    const plans = [
        {
            name: "Başlangıç",
            price: "4.999₺",
            isActive: true,
            features: [
                "5 Sayfa Web Sitesi",
                "Temel SEO",
                "İletişim Formu",
                "3 Ay Destek"
            ]
        },
        {
            name: "Professional",
            price: "9.999₺",
            isActive: false,
            features: [
                "10 Sayfa Web Sitesi",
                "Gelişmiş SEO",
                "Blog Yönetimi",
                "Admin Paneli",
                "6 Ay Destek"
            ]
        },
        {
            name: "Enterprise",
            price: "19.999₺",
            isActive: false,
            features: [
                "Sınırsız Sayfa",
                "E-ticaret Entegrasyonu",
                "Premium SEO",
                "Özel Yazılım",
                "Enterprise Güvenlik",
                "12 Ay 7/24 Destek"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 page-transition overflow-x-hidden relative">
            {/* Revolutionary Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/15 to-cyan-900/20"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)`,
                    }}
                ></div>
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <Navbar />

            <main className="pt-32 pb-12 relative z-10">
                {/* Hero Section */}
                <section id="hero" className="py-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-8">
                            <Star className="w-4 h-4 text-blue-400 animate-pulse" />
                            <span className="text-blue-400 text-sm font-medium">Başlangıç Paketi</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Başlangıç Planı
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
                            Küçük işletmeler için ideal web sitesi çözümü. Modern tasarım ve temel özelliklerle dijital varlığınızı güçlendirin.
                        </p>
                    </div>
                </section>

                {/* Main Plan Card */}
                <section id="paket-detaylari" className="py-20 relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Paket Detayları
                                </span>
                            </h2>
                        </div>

                        <div className="relative group rounded-2xl p-1 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-500">
                            <div className="bg-gray-900 rounded-xl p-8 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
                                <div className="relative">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-white mb-3">{mainPlan.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{mainPlan.description}</p>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-5xl font-bold text-white">{mainPlan.price}</span>
                                            <span className="text-gray-400 text-sm ml-2 mt-2">/ başlangıç</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8 text-sm">
                                        {mainPlan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center justify-center text-gray-300 gap-2">
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-4/5 mx-auto py-3 rounded-lg font-medium text-sm transition-all duration-300 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white hover:opacity-90 hover:scale-105 shadow-lg">
                                        Projeye Başla
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Cards */}
                <section id="ozellikler" className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 mb-6 sm:mb-8">
                                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                                <span className="text-emerald-400 text-xs sm:text-sm font-medium">Temel Özellikler</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    Planın Avantajları
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {featureCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-2xl p-0.5 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-105 transition-all duration-500"
                                >
                                    <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-700/5"></div>
                                        <div className="relative">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                                                <card.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${card.gradient.split('-')[1]}-400`} />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{card.title}</h3>
                                            <p className="text-sm text-gray-400">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Plan Comparison */}
                <section id="karsilastirma" className="py-20 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-1/3 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-8">
                                <BarChart3 className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-400 text-sm font-medium">Plan Karşılaştırması</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                                <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Tüm Planları Karşılaştır
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Size en uygun planı seçin ve dijital dönüşümünüzü başlatın
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {comparisonPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative group rounded-2xl p-1 transition-all duration-500 ${plan.isActive
                                        ? `bg-gradient-to-br ${plan.gradient} shadow-xl shadow-blue-500/20 hover:scale-105 scale-105 ring-2 ring-blue-500/50`
                                        : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-102'
                                        }`}
                                >
                                    {plan.isActive && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-1.5 rounded-full text-sm font-bold whitespace-nowrap shadow-lg animate-pulse-subtle z-50">
                                            Seçili Plan
                                        </div>
                                    )}

                                    <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden h-full flex flex-col">
                                        {(plan.name === "Başlangıç") && <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-700/5"></div>}
                                        <div className="relative flex-1 flex flex-col">
                                            <div className="flex-none">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{plan.name}</h3>
                                                <div className="flex items-baseline justify-center mb-4 sm:mb-6">
                                                    <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                                                    <span className="text-gray-400 text-xs sm:text-sm ml-2 mt-2">/ başlangıç</span>
                                                </div>
                                            </div>

                                            <div className="flex-1 flex items-center">
                                                <ul className="w-full space-y-2 sm:space-y-3 text-xs sm:text-sm">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center justify-center text-gray-300 gap-2">
                                                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex-none mt-4">
                                                <button
                                                    className={`w-full py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${plan.isActive
                                                        ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white cursor-default'
                                                        : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
                                                        }`}
                                                    onClick={() => {
                                                        if (!plan.isActive) {
                                                            if (plan.name === "Profesyonel Paket") {
                                                                navigate('/plan/professional');
                                                            } else if (plan.name === "İleri Düzey Paket") {
                                                                navigate('/plan/enterprise');
                                                            }
                                                        }
                                                    }}
                                                    disabled={plan.isActive}
                                                >
                                                    {plan.isActive ? 'Mevcut Plan' : 'Plan Detayları'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section id="calisma-sureci" className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6 sm:mb-8">
                                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                                <span className="text-orange-400 text-xs sm:text-sm font-medium">Çalışma Sürecimiz</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-orange-400 to-red-400 bg-clip-text text-transparent">
                                    Planın Süreci
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-2xl p-0.5 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-105 transition-all duration-500"
                                >
                                    <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-700/5"></div>
                                        <div className="relative">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                                                <step.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${step.gradient.split('-')[1]}-400`} />
                                            </div>
                                            <div className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                                                {step.step}
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                                            <p className="text-sm text-gray-400">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PlanBaslangic;