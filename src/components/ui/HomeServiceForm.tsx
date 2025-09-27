import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, MapPin, Clock, Wrench, Car, Truck } from 'lucide-react';

const HomeServiceForm = () => {
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

  const serviceTypes = [
    { id: 'tire-change', label: 'Ganti Ban', icon: <Car size={16} /> },
    { id: 'oil-change', label: 'Ganti Oli', icon: <Wrench size={16} /> },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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

  return (
    <section id="home-service" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Layanan <span className="text-blue-600">Home Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati kemudahan layanan ban dan oli langsung di lokasi Anda. 
            Kami datang ke rumah, kantor, atau di mana pun Anda berada di Jember dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Service Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-automotive-gradient text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Wrench size={24} />
                  <span>Keunggulan Home Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Praktis & Hemat Waktu</h4>
                      <p className="text-gray-600 text-sm">Tidak perlu repot datang ke bengkel, kami yang datang ke Anda</p>
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
                      <p className="text-gray-600 text-sm">Tidak ada biaya tersembunyi, harga sesuai kesepakatan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Area */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <MapPin size={20} />
                  <span>Area Layanan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
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
          </div>

          {/* Booking Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-white">
              <CardTitle className="text-2xl text-gray-800">Form Booking Home Service</CardTitle>
              <CardDescription>
                Isi form di bawah ini untuk memesan layanan home service
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 border-b pb-2">Informasi Pribadi</h4>
                  
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
                      className="w-full"
                    />
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
                      className="w-full"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 border-b pb-2">Informasi Kendaraan</h4>
                  
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
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 border-b pb-2">Jenis Layanan *</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {serviceTypes.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={formData.serviceType.includes(service.id)}
                          onCheckedChange={(checked) => handleServiceTypeChange(service.id, checked as boolean)}
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
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 border-b pb-2">Jadwal Preferensi</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal *
                      </label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Waktu *
                      </label>
                      <Select value={formData.preferredTime} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catatan Tambahan
                  </label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Informasi tambahan yang perlu kami ketahui..."
                    className="w-full"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  disabled={!formData.name || !formData.phone || !formData.address || !formData.vehicleType || formData.serviceType.length === 0 || !formData.preferredDate || !formData.preferredTime}
                >
                  <Phone size={20} className="mr-2" />
                  Kirim via WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp untuk konfirmasi lebih lanjut
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceForm;
