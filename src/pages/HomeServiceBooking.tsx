import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, MapPin, Clock, Wrench, Car, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { supabase } from '@/lib/supabase';

const HomeServiceBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    vehicleType: '',
    serviceType: [] as string[],
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const serviceTypes = [
    { id: 'tire-change', label: 'Ganti Ban', icon: <Car size={16} /> },
    { id: 'tire-repair', label: 'Tambal Ban', icon: <Car size={16} /> },
    { id: 'consultation', label: 'Konsultasi', icon: <Phone size={16} /> }
  ];

  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '13:00 - 15:00',
    '15:00 - 17:00'
  ];

  const handleServiceTypeChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      serviceType: checked 
        ? [...prev.serviceType, serviceId]
        : prev.serviceType.filter(id => id !== serviceId)
    }));
  };

  const saveToDatabase = async () => {
    try {
      const bookingData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        vehicle_type: formData.vehicleType,
        service_types: formData.serviceType,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        notes: formData.notes || null,
        status: 'pending'
      };

      const { data, error } = await supabase
        .from('home_service_bookings')
        .insert([bookingData])
        .select();

      if (error) {
        console.error('Database error:', error);
        toast.error('Gagal menyimpan data ke database, tapi pesan WhatsApp tetap terkirim');
        return false;
      }

      console.log('Booking saved successfully:', data);
      toast.success('Data berhasil disimpan ke database');
      return true;
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Terjadi kesalahan saat menyimpan data');
      return false;
    }
  };

  const sendWhatsAppMessage = () => {
    const message = `*LAYANAN HOME SERVICE BAROMETER BAN*

📋 *Detail Pelanggan:*
Nama: ${formData.name}
Telepon: ${formData.phone}
Alamat: ${formData.address}

🚗 *Detail Kendaraan:*
Jenis Kendaraan: ${formData.vehicleType}

🔧 *Layanan yang Dibutuhkan:*
${formData.serviceType.map(service => {
  const serviceLabel = serviceTypes.find(s => s.id === service)?.label;
  return `• ${serviceLabel}`;
}).join('\n')}

📅 *Jadwal Preferensi:*
Tanggal: ${formData.preferredDate}
Waktu: ${formData.preferredTime}

📝 *Catatan Tambahan:*
${formData.notes || 'Tidak ada catatan tambahan'}

Mohon konfirmasi ketersediaan jadwal dan estimasi biaya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282228802990?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save to database first
      const dbSaved = await saveToDatabase();
      
      // Send WhatsApp message regardless of database result
      sendWhatsAppMessage();
      
      // Show success message
      if (dbSaved) {
        toast.success('Permintaan berhasil dikirim via WhatsApp dan disimpan ke database!');
      } else {
        toast.success('Permintaan berhasil dikirim via WhatsApp!');
      }
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 8000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Permintaan Berhasil Dikirim!</h1>
                  <p className="text-lg text-gray-600 mb-4">
                    Permintaan layanan home service Anda telah dikirim melalui WhatsApp dan disimpan ke database kami.
                  </p>
                  <p className="text-md text-gray-600 mb-8">
                    Tim kami akan segera menghubungi Anda untuk konfirmasi jadwal dan estimasi biaya.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">Waktu Respons</span>
                    </div>
                    <p className="text-blue-700 text-sm mt-1">
                      Kami akan merespons dalam 1-2 jam pada jam kerja (08:00-17:00)
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Kembali ke Beranda
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Buat Booking Lagi
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              to="/#home-service" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Home Service
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Form Booking <span className="text-blue-600">Home Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Isi form di bawah ini untuk memesan layanan home service. 
              Tim kami akan menghubungi Anda untuk konfirmasi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-automotive-gradient text-white rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench size={20} />
                    <span>Keunggulan Home Service</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Praktis & Hemat Waktu</h4>
                        <p className="text-gray-600 text-sm">Tidak perlu repot datang ke bengkel</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Teknisi Berpengalaman</h4>
                        <p className="text-gray-600 text-sm">Tim ahli dengan pengalaman bertahun-tahun</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Harga Transparan</h4>
                        <p className="text-gray-600 text-sm">Tidak ada biaya tersembunyi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Area */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-800">
                    <MapPin size={18} />
                    <span>Area Layanan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    <div>• Jember Kota</div>
                    <div>• Patrang</div>
                    <div>• Sumbersari</div>
                    <div>• Kaliwates</div>
                    <div>• Ajung</div>
                    <div>• Pakusari</div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    *Area lain dapat dikonsultasikan terlebih dahulu
                  </p>
                </CardContent>
              </Card>

              {/* Data Security Notice */}
              <Card className="border-0 shadow-lg border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 text-green-800 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold text-sm">Data Aman</span>
                  </div>
                  <p className="text-green-700 text-xs">
                    Data Anda disimpan dengan aman di database terenkripsi dan hanya digunakan untuk keperluan layanan.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-white">
                  <CardTitle className="text-2xl text-gray-800">Detail Pemesanan</CardTitle>
                  <CardDescription>
                    Lengkapi informasi di bawah ini untuk pemesanan layanan home service
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Info */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">Informasi Pribadi</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap *
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Masukkan nama lengkap"
                            required
                            disabled={isLoading}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nomor Telepon *
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="08xxxxxxxxxx"
                            required
                            disabled={isLoading}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alamat Lengkap *
                        </label>
                        <Textarea
                          value={formData.address}
                          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="Masukkan alamat lengkap termasuk patokan"
                          required
                          disabled={isLoading}
                          className="w-full"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">Informasi Kendaraan</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenis Kendaraan *
                        </label>
                        <Input
                          type="text"
                          value={formData.vehicleType}
                          onChange={(e) => setFormData(prev => ({ ...prev, vehicleType: e.target.value }))}
                          placeholder="Contoh: Honda Jazz, Yamaha NMAX, Toyota Avanza, dll"
                          required
                          disabled={isLoading}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">Jenis Layanan *</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {serviceTypes.map((service) => (
                          <div key={service.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <Checkbox
                              id={service.id}
                              checked={formData.serviceType.includes(service.id)}
                              onCheckedChange={(checked) => handleServiceTypeChange(service.id, checked as boolean)}
                              disabled={isLoading}
                            />
                            <label
                              htmlFor={service.id}
                              className="flex items-center space-x-2 text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              {service.icon}
                              <span>{service.label}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">Jadwal Preferensi</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal *
                          </label>
                          <Input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                            required
                            disabled={isLoading}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Waktu *
                          </label>
                          <Select 
                            value={formData.preferredTime} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
                            disabled={isLoading}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih waktu" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">Catatan Tambahan</h3>
                      <Textarea
                        value={formData.notes}
                        onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="Informasi tambahan yang perlu kami ketahui..."
                        disabled={isLoading}
                        className="w-full"
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        disabled={isLoading || !formData.name || !formData.phone || !formData.address || !formData.vehicleType || formData.serviceType.length === 0 || !formData.preferredDate || !formData.preferredTime}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 size={20} className="mr-2 animate-spin" />
                            Mengirim Permintaan...
                          </>
                        ) : (
                          <>
                            <Phone size={20} className="mr-2" />
                            Kirim Permintaan via WhatsApp
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        Dengan mengirim form ini, data Anda akan disimpan ke database kami dan Anda akan diarahkan ke WhatsApp untuk konfirmasi lebih lanjut
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default HomeServiceBooking;
