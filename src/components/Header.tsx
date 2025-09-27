import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo Barometer Ban Jember! Saya ingin bertanya tentang produk dan layanan Anda. Terima kasih!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282228802990?text=${encodedMessage}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-automotive-gradient rounded-xl flex items-center justify-center">
              <div className="text-white font-bold text-xl">B</div>
            </div>
            <div>
              <h1 className="text-2xl font-poppins font-bold text-gray-900">
                Barometer <span className="text-automotive-gradient">Ban</span>
              </h1>
              <p className="text-xs text-gray-600 font-medium">Jember • Jawa Timur</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Brand
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('home-service')}
              className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Home Service
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Kontak
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin size={16} className="text-gray-800" />
              <span className="font-medium">Jl. HOS Cokroaminoto No.71</span>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Phone size={16} className="mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 animate-fade-in-up">
            <nav className="py-6 px-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-gray-800 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-gray-800 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
              >
                Brand
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-gray-800 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
              >
                Testimoni
              </button>
              <button 
                onClick={() => scrollToSection('home-service')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-gray-800 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
              >
                Home Service
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-gray-800 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
              >
                Kontak
              </button>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4 px-4">
                  <MapPin size={16} className="text-gray-800" />
                  <span className="font-medium">Jl. HOS Cokroaminoto No.71, Jember</span>
                </div>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <Phone size={16} className="mr-2" />
                  Hubungi via WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
