import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandSections from '@/components/BrandSections';
import HomeServiceSection from '@/components/HomeServiceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEOHead from '@/components/SEOHead';

export default function Index() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section with proper heading structure */}
          <section id="home" aria-label="Beranda">
            <HeroSection />
          </section>

          {/* Brand Section */}
          <section id="brands" aria-label="Brand Terpercaya">
            <BrandSections />
          </section>

          {/* Home Service Section */}
          <section id="home-service" aria-label="Layanan Home Service">
            <HomeServiceSection />
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" aria-label="Testimoni Pelanggan">
            <TestimonialsSection />
          </section>

          {/* Contact Section */}
          <section id="contact" aria-label="Hubungi Kami">
            <ContactSection />
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
