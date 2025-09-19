import React from 'react';
import { Zap, Shield, Headphones, CreditCard, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Proses Instan',
    description: 'Transaksi diproses dalam hitungan detik, langsung masuk ke akun game Anda',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Sistem enkripsi tingkat bank untuk melindungi data dan transaksi Anda',
    color: 'from-green-400 to-blue-500'
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Tim customer service siap membantu Anda kapan saja melalui berbagai channel',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: CreditCard,
    title: 'Pembayaran Fleksibel',
    description: 'Tersedia berbagai metode pembayaran: Bank, E-wallet, QRIS, dan lainnya',
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: Users,
    title: 'Jutaan Pengguna',
    description: 'Dipercaya oleh jutaan gamer di seluruh Indonesia sejak 2018',
    color: 'from-indigo-400 to-cyan-500'
  },
  {
    icon: Award,
    title: 'Harga Terbaik',
    description: 'Harga kompetitif dengan bonus dan promo menarik setiap harinya',
    color: 'from-red-400 to-pink-500'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pengalaman terbaik dalam layanan top up digital dengan komitmen pada kepuasan pelanggan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};