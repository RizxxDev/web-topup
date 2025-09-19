import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

const pricingData = {
  game: [
    { name: 'Mobile Legends', items: [
      { amount: '86 Diamonds', price: 'Rp 20,000' },
      { amount: '172 Diamonds', price: 'Rp 40,000' },
      { amount: '257 Diamonds', price: 'Rp 60,000' },
      { amount: '429 Diamonds', price: 'Rp 100,000' },
    ]},
    { name: 'Free Fire', items: [
      { amount: '50 Diamonds', price: 'Rp 7,500' },
      { amount: '70 Diamonds', price: 'Rp 10,000' },
      { amount: '140 Diamonds', price: 'Rp 20,000' },
      { amount: '355 Diamonds', price: 'Rp 50,000' },
      { amount: '720 Diamonds', price: 'Rp 100,000' },
      { amount: 'Membership Mingguan', price: 'Rp 29,000' },
      { amount: 'Membership Bulanan', price: 'Rp 87,000' },
    ]},
    { name: 'PUBG Mobile', items: [
      { amount: '60 UC', price: 'Rp 15,000' },
      { amount: '325 UC', price: 'Rp 75,000' },
      { amount: '660 UC', price: 'Rp 150,000' },
      { amount: '1800 UC', price: 'Rp 375,000' },
    ]},
  ],
  pulsa: [
    { name: 'Telkomsel', items: [
      { amount: '5.000', price: 'Rp 6,000' },
      { amount: '10.000', price: 'Rp 11,000' },
      { amount: '25.000', price: 'Rp 25,500' },
      { amount: '50.000', price: 'Rp 50,500' },
    ]},
    { name: 'Indosat', items: [
      { amount: '5.000', price: 'Rp 5,500' },
      { amount: '10.000', price: 'Rp 10,500' },
      { amount: '25.000', price: 'Rp 25,000' },
      { amount: '50.000', price: 'Rp 50,000' },
    ]},
    { name: 'XL Axiata', items: [
      { amount: '5.000', price: 'Rp 5,700' },
      { amount: '10.000', price: 'Rp 10,700' },
      { amount: '25.000', price: 'Rp 25,200' },
      { amount: '50.000', price: 'Rp 50,200' },
    ]},
  ],
  voucher: [
    { name: 'Google Play', items: [
      { amount: '10.000', price: 'Rp 11,000' },
      { amount: '25.000', price: 'Rp 26,000' },
      { amount: '50.000', price: 'Rp 52,000' },
      { amount: '100.000', price: 'Rp 104,000' },
    ]},
    { name: 'Steam Wallet', items: [
      { amount: '$5', price: 'Rp 75,000' },
      { amount: '$10', price: 'Rp 150,000' },
      { amount: '$20', price: 'Rp 300,000' },
      { amount: '$50', price: 'Rp 750,000' },
    ]},
    { name: 'iTunes Gift Card', items: [
      { amount: '$5', price: 'Rp 80,000' },
      { amount: '$10', price: 'Rp 160,000' },
      { amount: '$25', price: 'Rp 400,000' },
      { amount: '$50', price: 'Rp 800,000' },
    ]},
  ]
};

type CategoryType = 'game' | 'pulsa' | 'voucher';

export const Pricing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('game');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = pricingData[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryLabels = {
    game: 'Game',
    pulsa: 'Pulsa',
    voucher: 'Voucher'
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Daftar Harga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harga transparan dan kompetitif untuk semua kebutuhan top up Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as CategoryType)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {product.name}
              </h3>
              
              <div className="space-y-4">
                {product.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{item.amount}</span>
                      <span className="text-blue-600 font-bold">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
