import { Users, Target, Award, Lightbulb, Calendar, MapPin, Mail, Phone, Globe, Code, Palette, Heart, Shield, Zap, Star, Rocket, Eye, Sparkles, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    // Set page title
    useEffect(() => {
        document.title = "Valuthe Digital - Hakkımızda";
    }, []);

    // Sayfa açılışında scroll'u en üste al
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsVisible(true);
    }, []);

    // Mouse tracking for interactive effects
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

    const teamMembers = [
        {
            name: "Furkan Değirmenci",
            role: "Kurucu & Geliştirici",
            experience: "2+ yıl deneyim",
            expertise: ["Full-Stack Development", "React/TypeScript", "UI/UX Design"],
            image: "/assets/-a-young-male-web-designer-with-glasses--wearing-j.png"
        },
        {
            name: "Takım Üyeleri",
            role: "Freelance Uzmanlar",
            experience: "Proje Bazlı",
            expertise: ["Grafik Tasarım", "İçerik Yazımı", "SEO Optimizasyonu"],
            image: "/assets/-a-young-male-web-designer-with-glasses--wearing-j.png"
        },
        {
            name: "Danışmanlar",
            role: "Sektör Uzmanları",
            experience: "5+ yıl deneyim",
            expertise: ["İş Geliştirme", "Proje Yönetimi", "Müşteri İlişkileri"],
            image: "/assets/-a-young-male-web-designer-with-glasses--wearing-j.png"
        }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Müşteri Memnuniyeti",
            description: "Her projede müşteri beklentilerini aşmayı hedefler, sürekli iletişim halinde kalırız."
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-500" />,
            title: "Kalite Odaklı",
            description: "Kodun her satırında kaliteyi önceleyerek, uzun vadede sürdürülebilir çözümler geliştiririz."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Modern Teknolojiler",
            description: "React, TypeScript, Node.js gibi güncel teknolojilerle performanslı çözümler sunuyoruz."
        },
        {
            icon: <Star className="w-8 h-8 text-purple-500" />,
            title: "Yaratıcı Tasarım",
            description: "Kullanıcı deneyimini merkeze alan, modern ve etkileyici tasarımlar oluşturuyoruz."
        }
    ];

    const milestones = [
        {
            year: "2023",
            title: "Şirket Kuruluşu",
            description: "Valuthe Digital, modern web teknolojileri ve UX/UI tasarım alanında uzman ekiple kuruldu."
        },
        {
            year: "Q1 2023",
            title: "İlk Projeler",
            description: "İlk müşteri projelerimizi başarıyla teslim ettik ve portföyümüzü oluşturmaya başladık."
        },
        {
            year: "Q2 2023",
            title: "Müşteri Portföyü",
            description: "10+ müşteri ile çalışmaya başladık ve farklı sektörlerde deneyim kazandık."
        },
        {
            year: "Q3 2023",
            title: "Teknoloji Stack",
            description: "React, TypeScript, Tailwind CSS gibi modern teknolojilerde uzmanlaştık."
        },
        {
            year: "Q4 2023",
            title: "Büyüme",
            description: "25+ müşteri ve 50+ proje kilometre taşına ulaştık."
        },
        {
            year: "2024",
            title: "Gelecek Hedefleri",
            description: "E-ticaret çözümleri ve mobil uygulama geliştirme alanında genişleme planlıyoruz."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 page-transition overflow-x-hidden relative">
            {/* Elegant Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/15 to-purple-900/20"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)`,
                    }}
                ></div>
                {/* Subtle mesh pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <Navbar />

            <main className="pt-20 sm:pt-32 pb-12 relative z-10">
                {/* Revolutionary Hero Section */}
                <section id="hero" className="py-12 sm:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                    </div>

                    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 mb-6 sm:mb-8">
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-xs sm:text-sm font-medium">2025'ten Beri Dijital Mükemmellik</span>
                        </div>

                        <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
                            <span className="bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-text-flow">
                                Dijital Dönüşümün
                            </span>
                            <br />
                            <span className="text-gray-300 text-3xl sm:text-3xl lg:text-5xl font-normal">
                                Öncü Teknoloji Ortağınız
                            </span>
                        </h1>

                        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
                            Modern teknolojiler ve yaratıcı çözümlerle işletmenizi dijital dünyada öne çıkarıyoruz.
                            Her projede müşteri memnuniyetini ön planda tutarak, sürdürülebilir başarı hikayeleri yazıyoruz.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
                            {[
                                { icon: Users, value: 5, suffix: '+', label: 'Mutlu Müşteri', color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/25' },
                                { icon: Target, value: 10, suffix: '+', label: 'Tamamlanan Proje', color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/25' },
                                { icon: Award, value: 3, suffix: '+', label: 'Yıllık Deneyim', color: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-500/25' },
                                { icon: Lightbulb, value: 98, suffix: '%', label: 'Müşteri Memnuniyeti', color: 'from-orange-500 to-red-500', shadow: 'shadow-orange-500/25' },
                            ].map((stat, i) => (
                                <div key={i} className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl sm:rounded-3xl blur-xl -m-2 from-white/10 to-white/5"></div>
                                    <div className="relative bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 hover:scale-[1.03] hover:border-white/30 group-hover:shadow-xl hover:bg-white/10">
                                        <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.shadow} shadow-lg`}>
                                            <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1 sm:mb-2 animate-counter" data-value={stat.value} data-suffix={stat.suffix}>0</h3>
                                        <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium text-xs sm:text-sm">{stat.label}</p>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section id="story" className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                            {/* Interactive Image */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                                    <img
                                        src="/assets/-a-young-male-web-designer-with-glasses--wearing-j.png"
                                        alt="Valuthe Digital Team"
                                        className="w-full h-auto transform transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {/* Floating tech icons */}
                                    <div className="absolute inset-0">
                                        {[
                                            { icon: Code, top: '20%', left: '10%' },
                                            { icon: Cpu, top: '60%', right: '15%' },
                                            { icon: Rocket, top: '40%', left: '80%' },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className={`absolute w-8 h-8 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-particles`}
                                                style={{ top: item.top, left: item.left, right: item.right as any, animationDelay: `${i * 0.5}s` }}
                                            >
                                                <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-4 sm:mb-6">
                                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                                        <span className="text-purple-400 text-xs sm:text-sm font-medium">Detaylı Hikayemiz</span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                                        <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            Müşteri Odaklı
                                        </span>
                                        <br />
                                        <span className="text-white">
                                            Yaklaşımımız
                                        </span>
                                    </h2>

                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                                        Ana sayfada bahsettiğimiz gibi, <span className="text-emerald-400 font-semibold">müşteri odaklı yaklaşımımız</span> ve
                                        uzman kadromuzla dijital başarı hikayelerine imza atıyoruz. Her projede en son teknolojileri kullanarak,
                                        performans ve kullanıcı deneyimini optimize eden çözümler üretiyoruz.
                                    </p>

                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                                        İşletmelerin dijital dönüşüm yolculuğunda <span className="text-blue-400 font-semibold">güvenilir bir teknoloji ortağı</span>
                                        <br /> olmayı hedeflediğimizi söylemiştik. İşte bu hedefimizi nasıl gerçekleştirdiğimiz ve
                                        <span className="text-purple-400 font-semibold"> rekabet avantajı</span> sağladığımız hakkında detaylar...
                                    </p>

                                    {/* Feature highlights */}
                                    <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6">
                                        {[
                                            { icon: Zap, label: 'AI-Powered Solutions', color: 'text-yellow-400' },
                                            { icon: Shield, label: 'Enterprise Security', color: 'text-blue-400' },
                                            { icon: Rocket, label: 'Lightning Fast', color: 'text-purple-400' },
                                            { icon: Star, label: 'Premium Quality', color: 'text-emerald-400' },
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors duration-300">
                                                <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                                                <span className="text-gray-300 text-xs sm:text-sm">{feature.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section id="misyon-vizyon" className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 mb-6 sm:mb-8">
                                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                                <span className="text-emerald-400 text-xs sm:text-sm font-medium">Amacımız</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                                    Vizyonumuz ve Misyonumuz
                                </span>
                            </h2>
                            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                                Ana sayfada kısaca bahsettiğimiz vizyonumuz ve misyonumuzun detaylı açıklaması
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: Rocket,
                                    title: 'Misyonumuz',
                                    subtitle: 'Güvenilir Teknoloji Ortağı',
                                    content: 'Ana sayfada belirttiğimiz gibi, işletmelerin dijital dönüşüm yolculuğunda güvenilir bir teknoloji ortağı olmak. Modern web teknolojileri ve yenilikçi çözümlerle müşterilerimizin online varlığını güçlendirmek.',
                                    gradient: 'from-emerald-500 to-teal-500',
                                    shadow: 'shadow-emerald-500/20'
                                },
                                {
                                    icon: Star,
                                    title: 'Vizyonumuz',
                                    subtitle: 'Rekabet Avantajı Sağlamak',
                                    content: 'Ekibimizin her projede en son teknolojileri kullanarak performans ve kullanıcı deneyimini optimize etmesi ile müşterilerimize rekabet avantajı sağlamak ve dijital başarı hikayelerine imza atmak.',
                                    gradient: 'from-blue-500 to-purple-500',
                                    shadow: 'shadow-blue-500/20'
                                }
                            ].map((item, i) => (
                                <div key={i} className="group relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl sm:rounded-3xl blur-xl`}></div>
                                    <div className={`relative bg-gradient-to-br from-white/12 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] ${item.shadow} hover:shadow-xl hover:bg-white/10`}>
                                        <div className="flex items-center mb-4 sm:mb-6">
                                            <div className={`bg-gradient-to-r ${item.gradient} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mr-3 sm:mr-4`}>
                                                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.title}</h3>
                                                <p className={`text-xs bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-medium`}>{item.subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                            {item.content}
                                        </p>
                                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section id="neden-biz" className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6 sm:mb-8">
                                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                                <span className="text-purple-400 text-xs sm:text-sm font-medium">Temel Değerlerimiz</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Neden Valuthe Digital?
                                </span>
                            </h2>
                            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                                Bizi farklı kılan değerler ve yaklaşımımız
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {[
                                { icon: Heart, title: 'Müşteri Memnuniyeti', desc: 'Her projede müşteri beklentilerini aşmayı hedefler, sürekli iletişim halinde kalırız', gradient: 'from-red-500 to-pink-500' },
                                { icon: Shield, title: 'Kalite Odaklı', desc: 'Kodun her satırında kaliteyi önceleyerek, uzun vadede sürdürülebilir çözümler geliştiririz', gradient: 'from-blue-500 to-cyan-500' },
                                { icon: Zap, title: 'Modern Teknolojiler', desc: 'React, TypeScript, Node.js gibi güncel teknolojilerle performanslı çözümler sunuyoruz', gradient: 'from-yellow-500 to-orange-500' },
                                { icon: Code, title: 'Yaratıcı Tasarım', desc: 'Kullanıcı deneyimini merkeze alan, modern ve etkileyici tasarımlar oluşturuyoruz', gradient: 'from-emerald-500 to-teal-500' },
                                { icon: Award, title: 'Hızlı Teslimat', desc: 'Belirlenen sürelerde kaliteli çözümler teslim ederek zaman hedeflerimizi tutarız', gradient: 'from-purple-500 to-indigo-500' },
                                { icon: Globe, title: 'Responsive Tasarım', desc: 'Tüm cihazlarda mükemmel görünüm ve performans sağlayan responsive tasarımlar', gradient: 'from-indigo-500 to-purple-500' },
                            ].map((value, i) => (
                                <div key={i} className="group relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl blur-xl`}></div>
                                    <div className="relative bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group-hover:shadow-xl hover:bg-white/10">
                                        <div className={`bg-gradient-to-r ${value.gradient} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                                            <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{value.title}</h3>
                                        <p className="text-gray-300 text-sm sm:text-base">{value.desc}</p>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="calisma-sureci" className="py-12 sm:py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6 sm:mb-8">
                                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                                <span className="text-orange-400 text-xs sm:text-sm font-medium">Sürecimiz</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
                                <span className="bg-gradient-to-r from-white via-orange-400 to-red-400 bg-clip-text text-transparent">
                                    Çalışma Sürecimiz
                                </span>
                            </h2>
                            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                                Projelerinizi hayata geçiren devrimsel süreç
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { step: '01', title: 'Keşif & Planlama', desc: 'Projenizi detaylı analiz eder ve teknik çözümler planlarız', gradient: 'from-emerald-500 to-teal-500', icon: Eye },
                                { step: '02', title: 'Tasarım & Prototip', desc: 'Kullanıcı dostu arayüzler tasarlar ve interaktif prototipler oluştururuz', gradient: 'from-blue-500 to-cyan-500', icon: Palette },
                                { step: '03', title: 'Geliştirme', desc: 'Modern teknolojiler kullanarak temiz ve performanslı kod yazarız', gradient: 'from-purple-500 to-pink-500', icon: Code },
                                { step: '04', title: 'Test & Yayın', desc: 'Kapsamlı testler yaparak projenizi canlıya alır ve destek sağlarız', gradient: 'from-orange-500 to-red-500', icon: Rocket },
                            ].map((process, i) => (
                                <div key={i} className="group relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${process.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl blur-xl`}></div>
                                    <div className="relative bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group-hover:shadow-xl hover:bg-white/10">
                                        <div className={`bg-gradient-to-r ${process.gradient} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <process.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                        <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${process.gradient} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                                            {process.step}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{process.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">{process.desc}</p>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

export default About; 
