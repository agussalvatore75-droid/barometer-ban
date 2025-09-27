import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Droplets } from 'lucide-react';

interface BrandCardProps {
  name: string;
  description: string;
  category: 'tire' | 'oil';
  logo?: string;
}

const BrandCard = ({ name, description, category, logo }: BrandCardProps) => {
  const isOilBrand = category === 'oil';
  
  return (
    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-2 hover:border-blue-200">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          {logo ? (
            <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-xl p-2">
              <img 
                src={logo} 
                alt={`${name} logo`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallbackIcon = target.nextElementSibling as HTMLElement;
                  if (fallbackIcon) {
                    fallbackIcon.style.display = 'block';
                  }
                }}
              />
              <div 
                className="hidden"
                style={{ display: 'none' }}
              >
                {isOilBrand ? (
                  <Droplets className="text-yellow-600" size={40} />
                ) : (
                  <Wrench className="text-blue-600" size={40} />
                )}
              </div>
            </div>
          ) : (
            <div className={`p-4 rounded-full ${isOilBrand ? 'bg-yellow-100' : 'bg-blue-100'}`}>
              {isOilBrand ? (
                <Droplets className="text-yellow-600" size={40} />
              ) : (
                <Wrench className="text-blue-600" size={40} />
              )}
            </div>
          )}
        </div>
        <CardTitle className={`text-xl font-bold ${isOilBrand ? 'text-yellow-700' : 'text-blue-700'}`}>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default BrandCard;
