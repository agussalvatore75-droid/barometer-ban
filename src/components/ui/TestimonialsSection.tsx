import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Jember",
      rating: 5,
      text: "Pelayanan di Barometer Ban sangat memuaskan. Ban yang saya beli berkualitas tinggi dan harga sangat kompetitif. Tim mereka juga sangat membantu dalam memberikan saran yang tepat.",
      vehicle: "Toyota Avanza"
    },
    {
      name: "Sari Wulandari", 
      location: "Bondowoso",
      rating: 5,
      text: "Sudah beberapa kali beli oli di sini, kualitasnya terjamin dan ori. Lokasi strategis dan pelayanannya ramah. Pasti akan kembali lagi untuk kebutuhan ban dan oli selanjutnya.",
      vehicle: "Honda Brio"
    },
    {
      name: "Ahmad Fauzi",
      location: "Lumajang", 
      rating: 5,
      text: "Recommended banget! Ban yang dibeli di Barometer Ban awet dan berkualitas. Harga juga bersaing dengan toko lain. Pelayanan cepat dan profesional.",
      vehicle: "Daihatsu Xenia"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Star className="text-orange-600" size={16} />
            <span className="text-orange-600 font-medium text-sm">Testimoni Pelanggan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-orange-500">Pelanggan Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Simak pengalaman mereka yang telah mempercayai 
            Barometer Ban untuk kebutuhan kendaraan mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Quote className="text-orange-600" size={24} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-orange-400 fill-current" size={18} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-600 font-medium text-sm">{testimonial.vehicle}</p>
                      <p className="text-gray-400 text-xs">Pelanggan Setia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Rating Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Brand Terpercaya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
