import { Button } from '@/components/ui/button';
import { Truck, Clock, Shield, Star, ChevronRight, Home, Wrench, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServiceSection = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Ganti Ban",
      description: "Pemasangan ban baru dengan peralatan profesional di lokasi Anda",
      features: ["Ban original berkualitas", "Pemasangan profesional"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tambal Ban",
      description: "Perbaikan ban bocor dengan teknologi tambal vulkanisir",
      features: ["Tambal permanen", "Garansi kualitas", "Harga terjangkau"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Konsultasi",
      description: "Konsultasi gratis mengenai kondisi ban dan perawatan kendaraan",
      features: ["Konsultasi gratis", "Saran profesional", "Rekomendasi produk"]
    }
  ];

  const advantages = [
    {
      icon: <Home className="w-6 h-6 text-orange-600" />,
      title: "Datang ke Lokasi",
      description: "Kami datang ke rumah atau kantor Anda"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Hemat Waktu",
      description: "Tidak perlu antri, layanan cepat dan efisien"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Garansi Kualitas",
      description: "Jaminan kualitas untuk semua layanan"
    },
    {
      icon: <Star className="w-6 h-6 text-orange-600" />,
      title: "Teknisi Berpengalaman",
      description: "Ditangani oleh teknisi profesional dan berpengalaman"
    }
  ];

  return (
    <section id="home-service" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Truck className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-medium">Layanan Terdepan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-orange-600">Home Service</span> Barometer Ban
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati kemudahan layanan ban langsung di lokasi Anda. 
            Praktis, profesional, dan terpercaya!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Keunggulan <span className="text-orange-600">Home Service</span> Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Area */}
        <div className="bg-automotive-gradient rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Area Layanan</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Kami melayani area Jember dan sekitarnya dengan radius hingga 25 km dari pusat kota.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span>Jember Kota</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span>Sumbersari</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span>Patrang</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span>Kaliwates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span>Ajung</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span>Pakusari</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Jam Operasional</h4>
                <p className="text-blue-100">
                  Senin - Sabtu: 08:00 - 17:00<br />
                  Minggu: 08:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Siap Memesan Layanan Home Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Isi form pemesanan dan tim kami akan segera menghubungi Anda untuk konfirmasi jadwal dan estimasi biaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                <Link to="/home-service-booking">
                  Pesan Sekarang
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                onClick={() => {
                  const message = "Halo Barometer Ban! Saya ingin bertanya tentang layanan Home Service. Bisa dijelaskan lebih detail?";
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/6282228802990?text=${encodedMessage}`, '_blank');
                }}
                variant="outline"
                size="lg"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Tanya via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
