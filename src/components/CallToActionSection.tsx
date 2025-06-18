import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CallToActionSection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-t from-yellow-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Animated particles */}
                <div className="particles-container">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 animate-float-particles"
                            style={{
                                width: `${Math.random() * 8 + 3}px`,
                                height: `${Math.random() * 8 + 3}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${Math.random() * 8 + 8}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Main Content */}
                <div className="animate-fade-in-up">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm mb-8 shadow-lg">
                        <Sparkles className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
                        <span className="text-yellow-200 text-sm font-medium">✨ Dijital Başarının Anahtarı</span>
                    </div>

                </div>
            </div>
        </section>
    );
}; 