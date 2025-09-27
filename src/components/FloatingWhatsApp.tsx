import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <div className="floating-whatsapp">
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl border-4 border-white"
      >
        <a
          href="https://wa.me/6282228802990"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
