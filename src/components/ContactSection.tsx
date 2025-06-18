import { Mail, MapPin, Send, ArrowRight, MessageCircle, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useState, useCallback, useEffect } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Email validation states
  const [emailValidation, setEmailValidation] = useState({
    isValidating: false,
    isValid: null as boolean | null,
    message: ""
  });

  // Phone validation states
  const [phoneValidation, setPhoneValidation] = useState({
    isValid: null as boolean | null,
    message: ""
  });

  // Email validation function
  const validateEmail = useCallback(async (email: string) => {
    if (!email) {
      setEmailValidation({ isValidating: false, isValid: null, message: "" });
      return;
    }

    // Basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValidation({
        isValidating: false,
        isValid: false,
        message: "Geçersiz email formatı"
      });
      return;
    }

    setEmailValidation({ isValidating: true, isValid: null, message: "Kontrol ediliyor..." });

    try {
      // Extract domain from email
      const domain = email.split('@')[1];

      // Check for common invalid domains
      const invalidDomains = ['test.com', 'example.com', 'fake.com', 'invalid.com', 'temp.com'];
      if (invalidDomains.includes(domain.toLowerCase())) {
        setEmailValidation({
          isValidating: false,
          isValid: false,
          message: "Geçersiz email adresi"
        });
        return;
      }

      // Check for common typos in popular email providers
      const commonDomains = {
        'gmail.com': ['gmai.com', 'gmial.com', 'gmail.co', 'gmaol.com'],
        'hotmail.com': ['hotmial.com', 'hotmai.com', 'hotmil.com'],
        'yahoo.com': ['yaho.com', 'yahooo.com', 'yahoo.co'],
        'outlook.com': ['outlok.com', 'outlook.co', 'outlok.com']
      };

      let suggestedDomain = null;
      for (const [correct, typos] of Object.entries(commonDomains)) {
        if (typos.includes(domain.toLowerCase())) {
          suggestedDomain = correct;
          break;
        }
      }

      if (suggestedDomain) {
        setEmailValidation({
          isValidating: false,
          isValid: false,
          message: `Şunu mu demek istediniz: ${email.split('@')[0]}@${suggestedDomain}?`
        });
        return;
      }

      // Try multiple validation approaches
      // First, try a simple email validation API
      try {
        const response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=demo`);

        if (response.ok) {
          const result = await response.json();
          if (result.data && result.data.result === 'deliverable') {
            setEmailValidation({
              isValidating: false,
              isValid: true,
              message: "Email adresi doğrulandı ✓"
            });
            return;
          } else if (result.data && result.data.result === 'undeliverable') {
            setEmailValidation({
              isValidating: false,
              isValid: false,
              message: "Bu email adresi geçersiz"
            });
            return;
          }
        }
      } catch (error) {
        console.log('Hunter.io validation failed, trying alternative...');
      }

      // Fallback to domain check and advanced validation
      await checkDomainExists(domain);
    } catch (error) {
      console.error('Email validation error:', error);
      // Fallback to domain check
      const domain = email.split('@')[1];
      await checkDomainExists(domain);
    }
  }, []);

  // Fallback domain existence check
  const checkDomainExists = async (domain: string) => {
    try {
      // Check if it's a well-known email provider
      const knownProviders = [
        'gmail.com', 'googlemail.com', 'hotmail.com', 'outlook.com', 'live.com',
        'yahoo.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com',
        'msn.com', 'yandex.com', 'mail.ru', 'protonmail.com', 'tutanota.com'
      ];

      if (knownProviders.includes(domain.toLowerCase())) {
        setEmailValidation({
          isValidating: false,
          isValid: true,
          message: "Email adresi doğrulandı ✓"
        });
        return;
      }

      // Try multiple approaches to validate domain
      const validationPromises = [
        // DNS lookup simulation via public DNS APIs
        fetch(`https://dns.google/resolve?name=${domain}&type=MX`).then(res => res.json()),
        fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`, {
          headers: { 'Accept': 'application/dns-json' }
        }).then(res => res.json()),
      ];

      const results = await Promise.allSettled(validationPromises);

      // Check if any DNS query succeeded and found MX records
      let hasMXRecord = false;
      for (const result of results) {
        if (result.status === 'fulfilled' && result.value.Answer) {
          const mxRecords = result.value.Answer.filter((record: { type: number }) => record.type === 15);
          if (mxRecords.length > 0) {
            hasMXRecord = true;
            break;
          }
        }
      }

      if (hasMXRecord) {
        setEmailValidation({
          isValidating: false,
          isValid: true,
          message: "Email adresi doğrulandı ✓"
        });
      } else {
        // Final fallback - try simple connectivity test
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);

          await fetch(`https://${domain}`, {
            method: 'HEAD',
            mode: 'no-cors',
            signal: controller.signal
          });

          clearTimeout(timeoutId);

          setEmailValidation({
            isValidating: false,
            isValid: true,
            message: "Domain doğrulandı ✓"
          });
        } catch {
          setEmailValidation({
            isValidating: false,
            isValid: false,
            message: "Bu email adresi doğrulanamadı"
          });
        }
      }
    } catch (error) {
      console.error('Domain check error:', error);
      setEmailValidation({
        isValidating: false,
        isValid: false,
        message: "Email adresi doğrulanamadı"
      });
    }
  };

  // Debounced email validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.email) {
        validateEmail(formData.email);
      }
    }, 1000); // Wait 1 second after user stops typing

    return () => clearTimeout(timer);
  }, [formData.email, validateEmail]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Phone number formatting and validation
    if (name === 'phone') {
      // Remove all non-numeric characters
      const numericValue = value.replace(/\D/g, '');

      // Limit to 11 digits (Turkey format: 05xxxxxxxxx)
      const limitedValue = numericValue.slice(0, 11);

      // Format the phone number
      let formattedValue = limitedValue;
      if (limitedValue.length > 0) {
        if (limitedValue.length <= 3) {
          formattedValue = limitedValue;
        } else if (limitedValue.length <= 6) {
          formattedValue = `${limitedValue.slice(0, 3)} ${limitedValue.slice(3)}`;
        } else if (limitedValue.length <= 8) {
          formattedValue = `${limitedValue.slice(0, 3)} ${limitedValue.slice(3, 6)} ${limitedValue.slice(6)}`;
        } else {
          formattedValue = `${limitedValue.slice(0, 3)} ${limitedValue.slice(3, 6)} ${limitedValue.slice(6, 8)} ${limitedValue.slice(8)}`;
        }
      }

      // Validate phone number
      if (limitedValue.length === 0) {
        setPhoneValidation({ isValid: null, message: "" });
      } else if (limitedValue.length < 10) {
        setPhoneValidation({ isValid: false, message: "Telefon numarası çok kısa" });
      } else if (limitedValue.length === 10) {
        // 10 digit format (5xxxxxxxxx)
        if (limitedValue.startsWith('5')) {
          setPhoneValidation({ isValid: true, message: "Geçerli telefon numarası ✓" });
        } else {
          setPhoneValidation({ isValid: false, message: "Cep telefonu 5 ile başlamalı" });
        }
      } else if (limitedValue.length === 11) {
        // 11 digit format (05xxxxxxxxx)
        if (limitedValue.startsWith('05')) {
          setPhoneValidation({ isValid: true, message: "Geçerli telefon numarası ✓" });
        } else {
          setPhoneValidation({ isValid: false, message: "Telefon numarası 05 ile başlamalı" });
        }
      } else {
        setPhoneValidation({ isValid: false, message: "Telefon numarası çok uzun" });
      }

      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Reset email validation when email changes
    if (name === 'email') {
      setEmailValidation({ isValidating: false, isValid: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email is valid before submitting
    if (emailValidation.isValid === false) {
      setSubmitError('Lütfen geçerli bir email adresi girin.');
      return;
    }

    if (emailValidation.isValid === null && formData.email) {
      setSubmitError('Email adresi doğrulanması bekleniyor...');
      return;
    }

    // Check if phone is valid before submitting
    if (phoneValidation.isValid === false) {
      setSubmitError('Lütfen geçerli bir telefon numarası girin.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // EmailJS configurasyonu
      const serviceId = 'service_on9r0cn';
      const templateId = 'template_7dqy89q';
      const publicKey = 'mlYazK2eOwWWh8occ';

      // Email template parametreleri
      const templateParams = {
        to_email: 'valuthedigital@outlook.com',
        name: formData.name,           // {{name}} için
        email: formData.email,         // {{email}} için  
        phone: formData.phone,         // {{phone}} için
        from_name: formData.name,      // {{from_name}} için
        from_email: formData.email,    // {{from_email}} için
        subject: formData.subject,     // {{subject}} için
        message: formData.message,     // {{message}} için
        reply_to: formData.email,
      };

      // EmailJS ile email gönder
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email başarıyla gönderildi!', response.status, response.text);
      setIsSubmitted(true);

      // Form verilerini temizle
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      // Reset email validation
      setEmailValidation({ isValidating: false, isValid: null, message: "" });

      // Reset phone validation
      setPhoneValidation({ isValid: null, message: "" });

    } catch (error: unknown) {
      console.error('Email gönderilirken hata oluştu:', error);
      setSubmitError('Email gönderilemedi. Lütfen tekrar deneyin veya doğrudan valuthedigital@outlook.com adresine yazın.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get email input styling based on validation state
  const getEmailInputStyling = () => {
    if (emailValidation.isValid === true) {
      return "border-emerald-400/60 focus:border-emerald-400/60 focus:ring-emerald-400/20";
    } else if (emailValidation.isValid === false) {
      return "border-red-400/60 focus:border-red-400/60 focus:ring-red-400/20";
    } else if (emailValidation.isValidating) {
      return "border-yellow-400/60 focus:border-yellow-400/60 focus:ring-yellow-400/20";
    } else {
      return "border-white/20 focus:border-purple-400/60 focus:ring-purple-400/20";
    }
  };

  // Helper function to get validation icon
  const getValidationIcon = () => {
    if (emailValidation.isValidating) {
      return <AlertCircle className="w-4 h-4 text-yellow-400 animate-pulse" />;
    } else if (emailValidation.isValid === true) {
      return <CheckCircle className="w-4 h-4 text-emerald-400" />;
    } else if (emailValidation.isValid === false) {
      return <XCircle className="w-4 h-4 text-red-400" />;
    }
    return null;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "valuthedigital@outlook.com",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: MapPin,
      label: "Lokasyon",
      value: "İstanbul, Türkiye",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800/10 via-purple-900/5 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-effect opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Header */}
        <div className="text-center mb-12 sm:mb-16 block md:hidden">
          <h2 className="text-4xl xs:text-5xl font-bold mb-4 px-2">
            <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-flow">
              İletişime Geçin
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Hayalinizdeki dijital projeyi gerçeğe dönüştürmek için
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> tek bir mesaj </span>
            yeterli.
          </p>
        </div>

        {/* Desktop Header */}
        <div className="text-center mb-16 hidden md:block">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl section-heading mb-6">
            <span className="animate-text-flow">
              İletişime Geçin
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-glow animate-fade-in-up">
            Hayalinizdeki dijital projeyi gerçeğe dönüştürmek için
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> tek bir mesaj </span>
            yeterli.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6 px-2">
          {/* Mobile Contact Form */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-xl"></div>

            {isSubmitted ? (
              <div className="relative z-10 text-center py-8">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  🎉 Mesajınız Ulaştı!
                </h3>
                <p className="text-gray-300 text-sm">
                  24 saat içinde dönüş yapacağız.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError(null);
                  }}
                  className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : submitError ? (
              <div className="relative z-10 text-center py-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  ⚠️ Hata Oluştu
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {submitError}
                </p>
                <button
                  onClick={() => setSubmitError(null)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                >
                  Tekrar Dene
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                      Hadi Başlayalım
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Birkaç detay paylaşın, gerisi bizde! ✨
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div className="group">
                      <label htmlFor="name" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                        Ad Soyad *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm"
                          placeholder="Adınız ve soyadınız"
                          required
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                        Email Adresiniz *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 border ${getEmailInputStyling()} rounded-lg px-3 py-2.5 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm`}
                          placeholder="ornek@email.com"
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          {getValidationIcon()}
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      {emailValidation.message && (
                        <p className={`text-xs mt-1 transition-all duration-300 ${emailValidation.isValid === true ? 'text-emerald-400' :
                          emailValidation.isValid === false ? 'text-red-400' : 'text-yellow-400'
                          }`}>
                          {emailValidation.message}
                        </p>
                      )}
                    </div>

                    <div className="group">
                      <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                        Telefon Numaranız *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          inputMode="numeric"
                          pattern="[0-9\s]*"
                          maxLength={13}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm"
                          placeholder="0555 123 45 67"
                          required
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      {phoneValidation.message && (
                        <p className={`text-xs mt-1 transition-all duration-300 ${phoneValidation.isValid === true ? 'text-emerald-400' : 'text-red-400'
                          }`}>
                          {phoneValidation.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                      Proje Türü *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm"
                        placeholder="Web sitesi, Web Geliştirme, Özel Yazılım..."
                        required
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                      Proje Detayları *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm text-sm"
                        placeholder="Projeniz hakkında detayları paylaşın..."
                        required
                      ></textarea>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 p-[2px] transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:opacity-70"
                  >
                    <div className="relative flex items-center justify-center gap-2 rounded-lg bg-gray-900/80 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-900/60">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="font-bold text-sm">Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          <span className="font-bold text-sm">Projeyi Başlat</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 group-hover:translate-x-full"></div>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Mobile Contact Info */}
          <div className="grid grid-cols-2 gap-3">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-lg p-3 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>

                <div className="relative z-10 text-center">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-300 text-xs font-medium break-all group-hover:text-gray-200 transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Social Media */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:border-white/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center justify-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <MessageCircle className="w-2.5 h-2.5 text-white" />
                </div>
                Sosyal Medya
              </h3>
              <div className="flex justify-center space-x-4">
                <a href="https://tr.linkedin.com/in/valuthe-web-140ba1299" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaLinkedin className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a href="https://www.instagram.com/valuthedigital/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaInstagram className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 hidden md:grid">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {info.label}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium break-all group-hover:text-gray-200 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  Sosyal Medya
                </h3>

                <div className="flex space-x-3">
                  <a href="https://tr.linkedin.com/in/valuthe-web-140ba1299" target="_blank" rel="noopener noreferrer" className="group/social relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <FaLinkedin className="w-5 h-5" />
                    </div>
                  </a>

                  <a href="https://www.instagram.com/valuthedigital/" target="_blank" rel="noopener noreferrer" className="group/social relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <FaInstagram className="w-5 h-5" />
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8 shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>

              {isSubmitted ? (
                <div className="relative z-10 text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🎉 Harika! Mesajınız Ulaştı
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Ekibimiz 24 saat içinde size dönüş yapacak.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : submitError ? (
                <div className="relative z-10 text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    ⚠️ Hata Oluştu
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {submitError}
                  </p>
                  <button
                    onClick={() => setSubmitError(null)}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                  >
                    Tekrar Dene
                  </button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                        Hadi Başlayalım
                      </span>
                    </h3>
                    <p className="text-gray-300">
                      Birkaç detay paylaşın, gerisi bizde! ✨
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="name" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                          Ad Soyad *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                            placeholder="Adınız ve soyadınız"
                            required
                          />
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                          Email Adresiniz *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full bg-white/5 border ${getEmailInputStyling()} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                            placeholder="ornek@email.com"
                            required
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            {getValidationIcon()}
                          </div>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                        {emailValidation.message && (
                          <p className={`text-sm mt-2 transition-all duration-300 ${emailValidation.isValid === true ? 'text-emerald-400' :
                            emailValidation.isValid === false ? 'text-red-400' : 'text-yellow-400'
                            }`}>
                            {emailValidation.message}
                          </p>
                        )}
                      </div>

                      <div className="group sm:col-span-2">
                        <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                          Telefon Numaranız *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            inputMode="numeric"
                            pattern="[0-9\s]*"
                            maxLength={13}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                            placeholder="0555 123 45 67"
                            required
                          />
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                        {phoneValidation.message && (
                          <p className={`text-sm mt-2 transition-all duration-300 ${phoneValidation.isValid === true ? 'text-emerald-400' : 'text-red-400'
                            }`}>
                            {phoneValidation.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                        Proje Türü *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                          placeholder="Web sitesi, Web Geliştirme, Özel Yazılım..."
                          required
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-white text-sm font-semibold mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                        Proje Detayları *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                          placeholder="Projeniz hakkında detayları paylaşın..."
                          required
                        ></textarea>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 p-[2px] transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:opacity-70"
                    >
                      <div className="relative flex items-center justify-center gap-3 rounded-lg bg-gray-900/80 px-6 py-4 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-900/60">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span className="font-bold">Gönderiliyor...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="font-bold">Projeyi Başlat</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </>
                        )}
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 group-hover:translate-x-full"></div>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
