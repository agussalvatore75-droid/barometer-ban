import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, Search } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo Barometer Ban Jember! Saya ingin bertanya tentang produk dan layanan Anda. Terima kasih!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282228802990?text=${encodedMessage}`, '_blank');
  };

  const handleTireAvailabilityClick = () => {
    window.open('https://form.jotform.com/251390488042457', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Barometer/@-8.1734678,113.6884677,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd69423a8bfc805:0x4f16c19c875aa83b!8m2!3d-8.1734731!4d113.6910426!16s%2Fg%2F11bw77y52s?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Hubungi Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kontak <span className="text-blue-600">Barometer Ban</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap melayani Anda dengan berbagai cara komunikasi yang mudah dan cepat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Alamat Toko</h3>
                    <p className="text-gray-600 mb-4">
                      Jl. HOS Cokroaminoto No.71<br />
                      Jember, Jawa Timur 68131
                    </p>
                    <Button
                      onClick={handleLocationClick}
                      variant="outline"
                      size="sm"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Lihat di Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Telepon & WhatsApp</h3>
                    <p className="text-gray-600 mb-4">
                      +62 822 2880 2990<br />
                      <span className="text-sm text-gray-500">Aktif 24/7 untuk konsultasi</span>
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700 text-white"
                      size="sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Chat WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Jam Operasional</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Senin - Sabtu: 08:00 - 17:00</p>
                      <p>Minggu: 08:00 - 14:00</p>
                      <p className="text-sm text-green-600 font-medium mt-2">
                        ✓ Konsultasi WhatsApp 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Forms */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Cek Ketersediaan Ban</h3>
                    <p className="text-gray-600">
                      Cek stok dan ketersediaan ban sesuai ukuran dan merek yang Anda butuhkan
                    </p>
                  </div>
                  <div className="space-y-4">
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Cek stok ban berdasarkan ukuran</span>
                      </li>
                      <li className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Informasi harga dan ketersediaan</span>
                      </li>
                      <li className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Rekomendasi ban sesuai kendaraan</span>
                      </li>
                    </ul>
                    <Button
                      onClick={handleTireAvailabilityClick}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Cek Ketersediaan Ban
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Chat Langsung</h3>
                    <p className="text-gray-600">
                      Butuh jawaban cepat? Chat langsung dengan tim customer service kami
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Respons rata-rata:</p>
                      <p className="text-2xl font-bold text-green-600">Kurang dari 5 menit</p>
                      <p className="text-xs text-gray-500">pada jam kerja</p>
                    </div>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Mulai Chat WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Aksi Cepat</h3>
            <p className="text-gray-600">Pilih layanan yang Anda butuhkan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button
              onClick={handleTireAvailabilityClick}
              variant="outline"
              className="h-auto p-6 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 flex flex-col items-center space-y-2"
            >
              <Search className="w-8 h-8" />
              <span className="font-semibold">Cek Ketersediaan Ban</span>
              <span className="text-sm opacity-75">Lihat stok dan harga ban</span>
            </Button>
            
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="h-auto p-6 border-2 border-green-600 text-green-600 hover:bg-green-50 flex flex-col items-center space-y-2"
            >
              <Phone className="w-8 h-8" />
              <span className="font-semibold">Konsultasi Produk</span>
              <span className="text-sm opacity-75">Tanya tentang ban & oli</span>
            </Button>
            
            <Button
              onClick={handleLocationClick}
              variant="outline"
              className="h-auto p-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 flex flex-col items-center space-y-2"
            >
              <MapPin className="w-8 h-8" />
              <span className="font-semibold">Kunjungi Toko</span>
              <span className="text-sm opacity-75">Lihat lokasi di maps</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
