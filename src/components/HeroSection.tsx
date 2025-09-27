import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin, Clock, Star, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo Barometer Ban Jember! Saya ingin konsultasi tentang ban dan oli untuk kendaraan saya. Terima kasih!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282228802990?text=${encodedMessage}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-automotive-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90">
              <Award size={16} className="text-orange-400" />
              <span className="text-sm font-medium">Terpercaya Sejak Bertahun-tahun</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6 text-white">
                <span className="block">Barometer</span>
                <span className="block text-orange-400">Ban Jember</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 max-w-2xl">
                Solusi terpercaya untuk kebutuhan <span className="text-orange-400 font-semibold">ban berkualitas</span> dan 
                <span className="text-orange-400 font-semibold"> oli premium</span> di Jember, Jawa Timur
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="font-medium">Ban Premium Berkualitas</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="font-medium">Oli Mesin Terpercaya</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="font-medium">Harga Kompetitif</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="font-medium">Layanan Profesional</span>
              </div>
            </div>

            {/* Business Info Card */}
            <div className="glass-morphism rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-sm">Lokasi</p>
                    <p className="text-gray-100 text-xs">Jl. HOS Cokroaminoto No.71</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-orange-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-sm">Jam Buka</p>
                    <p className="text-gray-100 text-xs">Sen-Sab: 08:00-17:00<br />Minggu: 08:00-14:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-sm">Telepon</p>
                    <p className="text-gray-100 text-xs">+62 822 2880 2990</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} className="mr-2" />
                Konsultasi Gratis
              </Button>
              
              <Button
                onClick={() => scrollToSection('brands')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Lihat Produk
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">10+</div>
                <div className="text-sm text-gray-200">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-sm text-gray-200">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-sm text-gray-200">Brand Terpercaya</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="glass-morphism rounded-3xl p-8 mb-6">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Brand Terpercaya</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 hover-lift">
                      <h4 className="font-bold text-white text-lg mb-2">Ban Premium</h4>
                      <p className="text-gray-200 text-sm">Goodyear • Michelin • BFGoodrich</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 hover-lift">
                      <h4 className="font-bold text-white text-lg mb-2">Oli Berkualitas</h4>
                      <p className="text-gray-200 text-sm">Bardahl • Repsol • Motul • Top1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Guarantee */}
              <div className="bg-orange-400 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="text-white" size={20} />
                  <Star className="text-white" size={20} />
                  <Star className="text-white" size={20} />
                  <Star className="text-white" size={20} />
                  <Star className="text-white" size={20} />
                </div>
                <h4 className="font-bold text-white text-lg mb-1">Garansi Kualitas</h4>
                <p className="text-white/90 text-sm">Melayani Jember & Seluruh Jawa Timur</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
