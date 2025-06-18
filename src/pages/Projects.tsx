import React, { useState, useEffect, useRef } from 'react';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  Code,
  Smartphone,
  Globe,
  Star,
  Eye,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Rocket,
  Palette,
  Zap,
  Award,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Projects = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set page title
  useEffect(() => {
    document.title = "Valuthe Digital - Projelerimiz";
  }, []);

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

  // Intersection observer for animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Finans Takip Sitesi',
      category: 'Web Uygulama',
      description: 'Modern web sitesi ile kullanıcı dostu finans takip deneyimi.',
      image: '/assets/finanstakip.png',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      features: ['Responsive Design', 'API Entegrasyonu', 'Kusursuz Tasarım'],
      client: 'FinansTakip',
      year: '2025',
      status: 'Tamamlandı',
      gradient: 'from-emerald-500 to-teal-500',
      liveUrl: 'https://finanstakip.vercel.app/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      category: 'Kurumsal',
      description: 'Profesyonel kurumsal kimlik ve modern tasarımla şirket prestijini artıran web sitesi çözümü.',
      image: '/assets/0_fyr1pj-XIXkPvAOo.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: ['Modern UI/UX', 'Animation Effects', 'Contact Forms', 'Fast Loading'],
      client: 'CorpSolutions',
      year: '2024',
      status: 'Tamamlandı',
      gradient: 'from-blue-500 to-purple-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Websitesi',
      category: 'Kişisel',
      description: 'Yaratıcı profesyonel kişiler için özel tasarlanmış, interaktif portföy web sitesi.',
      image: '/assets/portfolioweb.png',
      technologies: ['Next.js', 'TypeScript', 'GSAP', 'Sanity CMS'],
      features: ['Interactive Animations', 'CMS Integration', 'Dark/Light Mode', 'Blog System'],
      client: 'Erdem Gülcemal',
      year: '2025',
      status: 'Tamamlandı',
      gradient: 'from-purple-500 to-pink-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Mobil Uygulama',
      category: 'Mobil & Web',
      description: 'Kullanıcı dostu mobil deneyim için responsive ve performanslı mobil uygulama çözümü.',
      image: '/assets/DarkBlueMinimalistSimpleInspirationalDEsktopWallpaper.png',
      technologies: ['React Native', 'React', 'Firebase', 'Stripe'],
      features: ['Cross Platform', 'Push Notifications', 'Offline Support', 'Real-time Sync'],
      client: 'EzanVakti',
      year: '2025',
      status: 'Devam Ediyor',
      gradient: 'from-orange-500 to-red-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Web Sitesi',
      category: 'Web Uygulama',
      description: 'Web sitesi ile kullanıcı dostu ve modern tasarımla kullanıcıların ihtiyaçlarına cevap veren web sitesi.',
      image: '/assets/sahabesite.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: ['Modern UI/UX', 'Animation Effects', 'Contact Forms', 'Fast Loading'],
      client: 'Digital Agency',
      year: '2024',
      status: 'Geliştirme',
      gradient: 'from-cyan-500 to-blue-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Dijital Davetiye Sitesi',
      category: 'Web Sitesi',
      description: 'Davetiye sitesi ile kullanıcı dostu ve modern tasarımla kullanıcıların ihtiyaçlarına cevap veren web sitesi.',
      image: '/assets/dijivite.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: ['Modern UI/UX', 'Animation Effects', 'Contact Forms', 'Fast Loading'],
      client: 'Davetiye Sitesi',
      year: '2025',
      status: 'Planlama',
      gradient: 'from-indigo-500 to-purple-500',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const projectStats = [
    { icon: Rocket, value: 10, suffix: '+', label: 'Tamamlanan Proje', color: 'from-emerald-500 to-teal-500' },
    { icon: Users, value: 5, suffix: '+', label: 'Mutlu Müşteri', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: 100, suffix: '%', label: 'Başarı Oranı', color: 'from-purple-500 to-pink-500' },
    { icon: Calendar, value: 3, suffix: '+', label: 'Yıllık Deneyim', color: 'from-orange-500 to-red-500' },
  ];

  // Filter projects based on URL parameter
  const filteredProjects = projects.filter(project => {
    if (filter === 'completed') {
      return project.status === 'Tamamlandı';
    }
    if (filter === 'ongoing') {
      return project.status === 'Devam Ediyor';
    }
    if (filter === 'upcoming') {
      return project.status === 'Geliştirme' || project.status === 'Planlama';
    }
    return true;
  });

  // Update currentProject when filter changes
  useEffect(() => {
    setCurrentProject(0);
    // Sayfanın en üstüne animasyonlu kaydırma
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [filter]);

  const scrollToProject = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentProject(prev => prev > 0 ? prev - 1 : filteredProjects.length - 1);
    } else {
      setCurrentProject(prev => prev < filteredProjects.length - 1 ? prev + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 page-transition overflow-x-hidden relative">
      {/* Revolutionary Background */}
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
            <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>

          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6 sm:mb-8">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-400 text-xs sm:text-sm font-medium">Portföyümüz</span>
            </div>

            <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-flow">
                Projelerimiz
              </span>
              <br />
              <span className="text-gray-300 text-3xl sm:text-3xl lg:text-5xl font-normal">
                Dijital Başarı Hikayeleri
              </span>
            </h1>

            <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
              Modern teknolojiler ve yaratıcı tasarımlarla hayata geçirdiğimiz projeler.
              Her biri, müşterilerimizin dijital dönüşüm yolculuğunda attığımız önemli adımlar.
            </p>

            {/* Floating Category Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
              {['Web Uygulaması', 'Mobil App', 'SEO & Marketing', 'Yapay Zeka'].map((category, i) => (
                <div
                  key={category}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-sm sm:text-base hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary Project Stats */}
        <section id="proje-istatistikleri" className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
              {projectStats.map((stat, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl -m-2 from-white/10 to-white/5"></div>
                  <div className="relative bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 hover:scale-[1.03] hover:border-white/30 group-hover:shadow-xl hover:bg-white/10">
                    <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1 sm:mb-2">{stat.value}{stat.suffix}</h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium text-xs sm:text-sm">{stat.label}</p>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary Project Showcase */}
        <section id="one-cikan-projeler" className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 mb-6 sm:mb-8">
                <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 text-xs sm:text-sm font-medium">Öne Çıkan Projeler</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Öne Çıkan Projeler
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                En son teknolojiler ve yaratıcı çözümlerle hayata geçirdiğimiz projeler
              </p>
            </div>

            {/* Project Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                  {filteredProjects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0 px-4 sm:px-0">
                      <div className="bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
                          {/* Project Image */}
                          <div className="relative overflow-hidden rounded-2xl h-80 sm:h-96 bg-gray-800/50">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain object-center transform transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                            {/* Project Status Badge */}
                            <div className="absolute top-4 right-4">
                              <span className={`px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full ${project.status === 'Tamamlandı' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                                project.status === 'Devam Ediyor' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                  project.status === 'Geliştirme' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                }`}>
                                {project.status}
                              </span>
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                            <div>
                              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 mb-4">
                                <span className="text-white/80 text-xs sm:text-sm">{project.category}</span>
                              </div>

                              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                                <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                  {project.title}
                                </span>
                              </h3>

                              <p className="text-gray-300 leading-relaxed text-sm sm:text-lg mb-4 sm:mb-6">
                                {project.description}
                              </p>

                              {/* Project Info */}
                              <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
                                <div>
                                  <span className="text-gray-400 text-xs sm:text-sm">Müşteri</span>
                                  <p className="text-white font-medium text-sm sm:text-base">{project.client}</p>
                                </div>
                                <div>
                                  <span className="text-gray-400 text-xs sm:text-sm">Yıl</span>
                                  <p className="text-white font-medium text-sm sm:text-base">{project.year}</p>
                                </div>
                              </div>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Teknolojiler</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <span key={i} className={`px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white/80 rounded-full border border-white/10`}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Özellikler</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {project.features.map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                                    <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                              <a
                                href={project.liveUrl}
                                className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${project.gradient} rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                              >
                                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Canlı Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => scrollToProject('left')}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-10"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToProject('right')}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-10"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>

              {/* Project Indicators */}
              <div className="flex justify-center mt-6 sm:mt-8 gap-1.5 sm:gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentProject
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section id="tum-projeler" className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6 sm:mb-8">
                <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-orange-400 text-xs sm:text-sm font-medium">
                  {filter === 'completed' ? 'Tamamlanan Projeler' :
                    filter === 'ongoing' ? 'Devam Eden Projeler' :
                      filter === 'upcoming' ? 'Çok Yakında' :
                        'Tüm Projeler'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white via-orange-400 to-red-400 bg-clip-text text-transparent">
                  {filter === 'completed' ? 'Tamamlanan Projeler' :
                    filter === 'ongoing' ? 'Devam Eden Projeler' :
                      filter === 'upcoming' ? 'Çok Yakında' :
                        'Tüm Projeler'}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl blur-xl`}></div>
                  <div className="relative bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-[1.02] group-hover:shadow-xl hover:bg-white/10">
                    <div className="aspect-video overflow-hidden bg-gray-800/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs text-gray-400">{project.category}</span>
                        <span className={`px-2 py-1 text-[10px] sm:text-xs rounded-full ${project.status === 'Tamamlandı' ? 'bg-emerald-500/20 text-emerald-400' :
                          project.status === 'Devam Ediyor' ? 'bg-orange-500/20 text-orange-400' :
                            project.status === 'Geliştirme' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-white/5 text-white/70 rounded-md">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-white/5 text-white/70 rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 relative z-10">
                        <button
                          onClick={() => {
                            if (project.liveUrl && project.liveUrl !== '#') {
                              window.open(project.liveUrl, '_blank');
                            }
                          }}
                          className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${project.gradient} rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl relative z-10`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Canlı Demo
                        </button>
                      </div>
                    </div>
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

export default Projects;
