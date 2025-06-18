import React, { useState, useEffect, useRef } from 'react';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
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
    Settings,
    BarChart3,
    Globe,
    Database,
    Lock,
    Crown,
    Layers,
    Server,
    ShoppingCart,
    Award,
    TrendingUp,
    Clock
} from 'lucide-react';

const PlanEnterprise = () => {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

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
        document.title = "Valuthe Digital - Enterprise Planı";
    }, []);

    // Visibility animation and scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsVisible(true);
    }, []);

    // Main plan data (pricing table style)
    const mainPlan = {
        name: "İleri Düzey Paket",
        price: "25.000₺",
        description: "Kurumsal firmalar için tam kapsamlı dijital çözümler",
        features: [
            "Profesyonel Paket Özellikleri",
            "Sosyal Medya Yönetimi",
            "Özel Yazılım Geliştirme",
            "Özel Yazılım",
            "Öncelikli Destek",
            "12 Ay Destek"
        ],
        isPopular: false
    };

    // Feature cards
    const featureCards = [
        {
            icon: Globe,
            title: "Sınırsız Sayfa",
            description: "Tam özelleştirilebilir yapı",
            gradient: "from-amber-500 to-orange-500"
        },
        {
            icon: ShoppingCart,
            title: "E-ticaret Entegrasyonu",
            description: "Online satış sistemi",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: SearchCheck,
            title: "Premium SEO",
            description: "Gelişmiş arama optimizasyonu",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Code,
            title: "Özel Yazılım",
            description: "İhtiyaca özel çözümler",
            gradient: "from-blue-500 to-cyan-500"
        }
    ];

    // Comparison plans
    const comparisonPlans = [
        {
            name: "Başlangıç Paketi",
            price: "6.000₺",
            features: [
                "5 Sayfa Web Sitesi",
                "Temel SEO",
                "İletişim Formu",
                "3 Ay Destek"
            ],
            isActive: false,
            gradient: "from-gray-600 to-gray-700"
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
                "6 Ay Destek"
            ],
            isActive: false,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            name: "İleri Düzey Paket",
            price: "25.000₺",
            features: [
                "Profesyonel Paket Özellikleri",
                "E-ticaret Entegrasyonu",
                "Premium SEO",
                "Özel Yazılım",
                "Enterprise Güvenlik",
                "12 Ay 7/24 Destek"
            ],
            isActive: true,
            gradient: "from-amber-500 to-orange-500"
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: '01',
            title: 'İş Analizi',
            description: 'Detaylı iş süreçlerinizi analiz ederiz',
            gradient: 'from-amber-500 to-orange-500',
            icon: Eye
        },
        {
            step: '02',
            title: 'UX/UI Tasarım',
            description: 'Premium kullanıcı deneyimi tasarımı',
            gradient: 'from-emerald-500 to-teal-500',
            icon: Palette
        },
        {
            step: '03',
            title: 'Geliştirme',
            description: 'Özel yazılım ve entegrasyonlar',
            gradient: 'from-purple-500 to-pink-500',
            icon: Code
        },
        {
            step: '04',
            title: 'Optimizasyon',
            description: 'Performans ve SEO optimizasyonu',
            gradient: 'from-blue-500 to-cyan-500',
            icon: Rocket
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 page-transition overflow-x-hidden relative">
            {/* Revolutionary Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-amber-900/15 to-orange-900/20"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)`,
                    }}
                ></div>
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <Navbar />

            <main className="pt-20 sm:pt-32 pb-12 relative z-10">
                {/* Hero Section */}
                <section id="hero" className="py-12 sm:py-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-500/30 mb-6 sm:mb-8">
                            <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                            <span className="text-amber-400 text-xs sm:text-sm font-medium">Enterprise Paketi</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
                            <span className="bg-gradient-to-r from-white via-amber-400 to-orange-400 bg-clip-text text-transparent">
                                İleri Düzey Planı
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 sm:mb-16">
                            Kurumsal firmalar için tam kapsamlı dijital çözümler. En üst düzey teknoloji ve özel geliştirmeler.
                        </p>
                    </div>
                </section>

                {/* Main Plan Card */}
                <section id="paket-detaylari" className="py-12 sm:py-20 relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-white via-amber-400 to-orange-400 bg-clip-text text-transparent">
                                    Paket Detayları
                                </span>
                            </h2>
                        </div>

                        <div className="relative group rounded-2xl p-0.5 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 shadow-xl shadow-amber-500/20 hover:scale-100 scale-100 ring-2 ring-amber-500/50 transition-all duration-500">
                            <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5"></div>
                                <div className="relative">
                                    <div className="mb-6">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">{mainPlan.name}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{mainPlan.description}</p>
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl sm:text-5xl font-bold text-white">{mainPlan.price}</span>
                                            <span className="text-gray-400 text-xs sm:text-sm ml-2 mt-2">/ başlangıç</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm">
                                        {mainPlan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center justify-center text-gray-300 gap-2">
                                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full sm:w-4/5 mx-auto py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white hover:opacity-90 hover:scale-105 shadow-lg">
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
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30 mb-6 sm:mb-8">
                                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                                <span className="text-blue-400 text-xs sm:text-sm font-medium">Temel Özellikler</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Planın Avantajları
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: "Güvenlik",
                                    description: "En üst düzey güvenlik protokolleri ve sürekli izleme sistemi",
                                    gradient: "from-blue-500 to-indigo-500",
                                    iconColor: "text-blue-400"
                                },
                                {
                                    icon: Zap,
                                    title: "Performans",
                                    description: "Yüksek performanslı altyapı ve optimize edilmiş sistemler",
                                    gradient: "from-emerald-500 to-teal-500",
                                    iconColor: "text-emerald-400"
                                },
                                {
                                    icon: Users,
                                    title: "Ölçeklenebilirlik",
                                    description: "İhtiyaca göre genişletilebilir altyapı ve kaynaklar",
                                    gradient: "from-purple-500 to-pink-500",
                                    iconColor: "text-purple-400"
                                },
                                {
                                    icon: Award,
                                    title: "Kalite",
                                    description: "En yüksek kalite standartlarında hizmet ve destek",
                                    gradient: "from-orange-500 to-red-500",
                                    iconColor: "text-orange-400"
                                }
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-2xl p-0.5 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-105 transition-all duration-500"
                                >
                                    <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-700/5"></div>
                                        <div className="relative">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                                                <card.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${card.iconColor}`} />
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

                {/* Comparison Section */}
                <section id="karsilastirma" className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/3 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-amber-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-1/3 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-orange-500/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 mb-6 sm:mb-8">
                                <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                                <span className="text-emerald-400 text-xs sm:text-sm font-medium">Plan Karşılaştırması</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    Tüm Planları Karşılaştır
                                </span>
                            </h2>
                            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
                                Size en uygun planı seçin ve dijital dönüşümünüzü başlatın
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {comparisonPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative group rounded-2xl p-0.5 transition-all duration-500 ${plan.isActive
                                        ? `bg-gradient-to-br ${plan.gradient} shadow-xl shadow-amber-500/20 hover:scale-105 scale-105 ring-2 ring-amber-500/50 z-10`
                                        : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-102'
                                        }`}
                                >
                                    {plan.isActive && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg animate-pulse-subtle">
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
                                                            if (plan.name === "Başlangıç Paketi") {
                                                                navigate('/plan/baslangic');
                                                            } else if (plan.name === "Profesyonel Paket") {
                                                                navigate('/plan/professional');
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
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6 sm:mb-8">
                                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                                <span className="text-purple-400 text-xs sm:text-sm font-medium">Çalışma Sürecimiz</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Planın Süreci
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-2xl p-0.5 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:scale-105 transition-all duration-500 h-full"
                                >
                                    <div className="bg-gray-900 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden h-full flex flex-col justify-between">
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

export default PlanEnterprise;
