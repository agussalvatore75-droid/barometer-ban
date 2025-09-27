import BrandCard from './BrandCard';

const BrandSections = () => {
  const tireBrands = [
    { 
      name: 'Goodyear', 
      description: 'Ban premium dengan teknologi terdepan untuk performa maksimal',
      logo: 'https://logos-world.net/wp-content/uploads/2023/03/Goodyear-Logo.png'
    },
    { 
      name: 'BFGoodrich', 
      description: 'Ban off-road dan on-road berkualitas tinggi untuk segala medan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/BFGoodrich_logo.svg/1200px-BFGoodrich_logo.svg.png'
    },
    { 
      name: 'Michelin', 
      description: 'Ban Prancis terpercaya dengan daya tahan dan keamanan superior',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Michelin-Logo.png'
    },
    { 
      name: 'GT Radial', 
      description: 'Ban berkualitas dengan harga terjangkau untuk kendaraan harian',
      logo: 'https://www.gtradial.co.id/Content/images/gtradial-logo-border.png'
    },
    { 
      name: 'Dunlop', 
      description: 'Ban sport dan touring dengan grip dan handling terbaik',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Dunlop_brand_logo.svg/1280px-Dunlop_brand_logo.svg.png'
    },
    { 
      name: 'Accelera', 
      description: 'Ban Indonesia dengan kualitas internasional dan harga kompetitif',
      logo: 'https://accelera-radial.com/assets/img/logo-accelera-sns-black.png'
    },
  ];

  const oilBrands = [
    { 
      name: 'Top1', 
      description: 'Oli mesin berkualitas tinggi untuk perlindungan optimal',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA5NWiQBraPQkr0I-b5-XSrFOhIFHpZRnmA&s'
    },
    { 
      name: 'Repsol', 
      description: 'Oli premium dari Spanyol dengan teknologi Formula 1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Repsol_logo.svg/2560px-Repsol_logo.svg.png'
    },
    { 
      name: 'Bardahl', 
      description: 'Oli aditif terbaik untuk performa mesin maksimal',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Bardahl.svg/1200px-Bardahl.svg.png'
    },
    { 
      name: 'Motul', 
      description: 'Oli sintetik premium untuk mesin berperforma tinggi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Motul_logo.svg/1280px-Motul_logo.svg.png'
    },
    { 
      name: 'Shell', 
      description: 'Oli global terpercaya dengan teknologi PurePlus',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Shell-Logo-1971-1995.png'
    },
    { 
      name: 'Deltalube', 
      description: 'Oli Indonesia berkualitas untuk segala jenis kendaraan',
      logo: 'https://www.deltalube.com/wp-content/uploads/2017/05/Deltalube-logo-font-putih.png'
    },
    { 
      name: 'Mesran', 
      description: 'Oli lokal terpercaya dengan kualitas internasional',
      logo: 'https://www.static-src.com/wcsstore/Indraprastha/images/brandlogo//BRD-37852/mesran-logo.png'
    },
    { 
      name: 'Fastron', 
      description: 'Oli sintetik dengan perlindungan mesin terdepan',
      logo: 'https://vectorseek.com/wp-content/uploads/2023/08/Fastron-Oil-Logo-Vector.svg-.png'
    },
  ];

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Brand <span className="text-blue-600">Terpercaya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan produk original dari brand-brand ternama dunia dengan kualitas terjamin dan harga kompetitif
          </p>
        </div>

        {/* Tire Brands Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Brand <span className="text-blue-600">Ban</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tireBrands.map((brand, index) => (
              <BrandCard
                key={index}
                name={brand.name}
                description={brand.description}
                category="tire"
                logo={brand.logo}
              />
            ))}
          </div>
        </div>

        {/* Oil Brands Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Brand <span className="text-accent-yellow">Oli</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {oilBrands.map((brand, index) => (
              <BrandCard
                key={index}
                name={brand.name}
                description={brand.description}
                category="oil"
                logo={brand.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSections;
