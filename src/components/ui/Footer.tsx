import { Phone, MapPin, Clock, Instagram, Music, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo Barometer Ban! Saya ingin bertanya tentang produk dan layanan Anda. Terima kasih!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282228802990?text=${encodedMessage}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/barometerban1', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@barometerbanjember', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding bg-automotive-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center">
                  <div className="text-white font-bold text-xl">B</div>
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold">
                    Barometer <span className="text-orange-400">Ban</span>
                  </h3>
                  <p className="text-blue-200 text-sm">Jember • Jawa Timur</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
                Solusi terpercaya untuk kebutuhan ban dan oli kendaraan Anda. Melayani dengan kualitas terbaik 
                dan harga kompetitif sejak bertahun-tahun di Jember dan seluruh Jawa Timur.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </button>
                <button
                  onClick={handleInstagramClick}
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </button>
                <button
                  onClick={handleTikTokClick}
                  className="bg-gray-800 hover:bg-black text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="TikTok"
                >
                  <Music size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-400">Menu Utama</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-200"
                  >
                    Beranda
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('brands')}
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-200"
                  >
                    Brand Produk
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-200"
                  >
                    Testimoni
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-200"
                  >
                    Kontak Kami
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-400">Kontak & Lokasi</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Jl. HOS Cokroaminoto No.71<br />
                      Jember, Jawa Timur 68131
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-orange-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-blue-100 text-sm">+62 822 2880 2990</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="text-orange-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-blue-100 text-sm">
                      Senin - Sabtu: 08:00 - 17:00<br />
                      Minggu: 08:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-6 border-t border-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Barometer Ban Jember. Semua hak dilindungi.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dipercaya sebagai toko ban dan oli terpercaya di Jawa Timur
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Globe size={14} />
                <span>Melayani Seluruh Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>Konsultasi Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
