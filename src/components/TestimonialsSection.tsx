import { useEffect, useRef } from "react";

const technologies = [
  { name: "React", icon: "⚛️", color: "from-blue-400 via-cyan-500 to-teal-400" },
  { name: "Next.js", icon: "▲", color: "from-gray-300 via-white to-gray-100" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-500 via-indigo-600 to-purple-500" },
  { name: "JavaScript", icon: "🟨", color: "from-yellow-400 via-amber-500 to-orange-400" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 via-emerald-500 to-teal-500" },
  { name: "Python", icon: "🐍", color: "from-yellow-500 via-blue-500 to-indigo-600" },
  { name: "HTML5", icon: "🌐", color: "from-orange-500 via-red-500 to-pink-500" },
  { name: "CSS3", icon: "🎨", color: "from-blue-400 via-purple-500 to-pink-500" },
  { name: "Tailwind", icon: "💨", color: "from-cyan-400 via-blue-500 to-indigo-600" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 via-emerald-600 to-teal-600" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 via-indigo-700 to-purple-600" },
  { name: "Docker", icon: "🐳", color: "from-blue-500 via-cyan-500 to-sky-400" }
];

const frameworks = [
  { name: "Vue.js", icon: "💚", color: "from-green-400 via-emerald-500 to-teal-500" },
  { name: "Angular", icon: "🅰️", color: "from-red-500 via-pink-600 to-purple-600" },
  { name: "Laravel", icon: "🔺", color: "from-red-500 via-orange-500 to-yellow-500" },
  { name: "Express", icon: "⚡", color: "from-gray-500 via-slate-600 to-gray-700" },
  { name: "Vite", icon: "⚡", color: "from-purple-500 via-pink-500 to-yellow-500" },
  { name: "Webpack", icon: "📦", color: "from-blue-400 via-indigo-500 to-purple-500" },
  { name: "Firebase", icon: "🔥", color: "from-orange-400 via-yellow-500 to-amber-400" },
  { name: "AWS", icon: "☁️", color: "from-orange-500 via-amber-500 to-yellow-400" },
  { name: "Git", icon: "📝", color: "from-red-500 via-orange-500 to-pink-500" },
  { name: "Figma", icon: "🎯", color: "from-purple-500 via-pink-500 to-rose-500" },
  { name: "Photoshop", icon: "🎨", color: "from-blue-600 via-purple-600 to-indigo-700" },
  { name: "WordPress", icon: "📝", color: "from-blue-700 via-indigo-700 to-slate-700" }
];

export const TestimonialsSection = () => {
  const strip1Ref = useRef<HTMLDivElement>(null);
  const strip2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth horizontal scrolling animation
    const animateStrip = (element: HTMLElement, direction: number) => {
      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += direction * 0.5;
        if (element) {
          element.style.transform = `translateX(${scrollAmount}px)`;
          // Reset position when it goes too far
          if (Math.abs(scrollAmount) >= element.scrollWidth / 2) {
            scrollAmount = 0;
          }
        }
        requestAnimationFrame(scroll);
      };
      scroll();
    };

    if (strip1Ref.current) {
      animateStrip(strip1Ref.current, -1); // Left direction
    }
    if (strip2Ref.current) {
      animateStrip(strip2Ref.current, 1); // Right direction
    }
  }, []);

  const TechItem = ({ tech, index }: { tech: typeof technologies[0], index: number }) => (
    <div
      className={`flex-shrink-0 mx-2 sm:mx-3 p-0.5 rounded-lg sm:rounded-xl bg-gradient-to-r ${tech.color} 
        shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-xl bg-gray-900/90 backdrop-blur-sm">
        <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300">
          {tech.icon}
        </span>
        <span className="text-white font-medium sm:font-semibold text-sm sm:text-lg whitespace-nowrap group-hover:text-shadow-lg">
          {tech.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-effect opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-6 sm:mb-8 shadow-lg">
            <span className="text-purple-200 text-xs sm:text-sm font-medium">⚡ Kullandığımız Teknolojiler</span>
          </div>

          <h2 className="text-4xl xs:text-5xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 animate-text-flow">
              Modern Teknolojiler
            </span>
            <br />
            <span className="text-white">ile Güçlendiriyoruz</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            En güncel ve performanslı teknolojileri kullanarak projelerinizi hayata geçiriyoruz
          </p>
        </div>

        {/* Technology Strips */}
        <div className="space-y-6 sm:space-y-8">
          {/* First Strip - Technologies (Left direction) */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

            <div
              ref={strip1Ref}
              className="flex items-center gap-2 sm:gap-4 animate-scroll-left"
              style={{ width: 'calc(200% + 100px)' }}
            >
              {/* Duplicate for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <TechItem key={`tech1-${index}`} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Second Strip - Frameworks (Right direction) */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

            <div
              ref={strip2Ref}
              className="flex items-center gap-2 sm:gap-4 animate-scroll-right"
              style={{ width: 'calc(200% + 100px)' }}
            >
              {/* Duplicate for seamless loop */}
              {[...frameworks, ...frameworks].map((framework, index) => (
                <TechItem key={`framework1-${index}`} tech={framework} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="group sm:p-0 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none sm:border-none">
              <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-1 sm:mb-2">
                20+
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-base">
                Farklı Teknoloji
              </p>
            </div>
            <div className="group sm:p-0 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none sm:border-none">
              <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-1 sm:mb-2">
                100%
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-base">
                Modern Çözümler
              </p>
            </div>
            <div className="group sm:p-0 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none sm:border-none">
              <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-1 sm:mb-2">
                24/7
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-base">
                Güncel Teknoloji Takibi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};