import React, { useState, useEffect } from 'react';
import { Send, User, Gamepad2, Hash, CreditCard, Tag, DollarSign } from 'lucide-react';

// Data produk dengan harga
const productData = {
  game: {
    'Mobile Legends': [
      { amount: '86 Diamonds', price: 20000 },
      { amount: '172 Diamonds', price: 40000 },
      { amount: '257 Diamonds', price: 60000 },
      { amount: '429 Diamonds', price: 100000 },
    ],
    'Free Fire': [
      { amount: '50 Diamonds', price: 7500 },
      { amount: '70 Diamonds', price: 10000 },
      { amount: '140 Diamonds', price: 20000 },
      { amount: '355 Diamonds', price: 50000 },
      { amount: '720 Diamonds', price: 100000 },
      { amount: 'Membership Mingguan', price: 29000 },
      { amount: 'Membership Bulanan', price: 87000 },
    ],
    'PUBG Mobile': [
      { amount: '60 UC', price: 15000 },
      { amount: '325 UC', price: 75000 },
      { amount: '660 UC', price: 150000 },
      { amount: '1800 UC', price: 375000 },
    ],
    'Genshin Impact': [
      { amount: '60 Genesis Crystals', price: 15000 },
      { amount: '300 Genesis Crystals', price: 75000 },
      { amount: '980 Genesis Crystals', price: 230000 },
      { amount: '1980 Genesis Crystals', price: 450000 },
    ],
    'Valorant': [
      { amount: '420 VP', price: 45000 },
      { amount: '700 VP', price: 75000 },
      { amount: '1375 VP', price: 150000 },
      { amount: '2400 VP', price: 250000 },
    ]
  },
  pulsa: {
    'Telkomsel': [
      { amount: '5.000', price: 6000 },
      { amount: '10.000', price: 11000 },
      { amount: '25.000', price: 25500 },
      { amount: '50.000', price: 50500 },
      { amount: '100.000', price: 101000 },
    ],
    'Indosat': [
      { amount: '5.000', price: 5500 },
      { amount: '10.000', price: 10500 },
      { amount: '25.000', price: 25000 },
      { amount: '50.000', price: 50000 },
      { amount: '100.000', price: 100000 },
    ],
    'XL Axiata': [
      { amount: '5.000', price: 5700 },
      { amount: '10.000', price: 10700 },
      { amount: '25.000', price: 25200 },
      { amount: '50.000', price: 50200 },
      { amount: '100.000', price: 100200 },
    ],
    'Tri': [
      { amount: '5.000', price: 5200 },
      { amount: '10.000', price: 10200 },
      { amount: '25.000', price: 24800 },
      { amount: '50.000', price: 49500 },
    ]
  },
  voucher: {
    'Google Play': [
      { amount: '10.000', price: 11000 },
      { amount: '25.000', price: 26000 },
      { amount: '50.000', price: 52000 },
      { amount: '100.000', price: 104000 },
      { amount: '150.000', price: 156000 },
    ],
    'Steam Wallet': [
      { amount: '$5', price: 75000 },
      { amount: '$10', price: 150000 },
      { amount: '$20', price: 300000 },
      { amount: '$50', price: 750000 },
    ],
    'iTunes Gift Card': [
      { amount: '$5', price: 80000 },
      { amount: '$10', price: 160000 },
      { amount: '$25', price: 400000 },
      { amount: '$50', price: 800000 },
    ],
    'Netflix': [
      { amount: 'Basic 1 Bulan', price: 65000 },
      { amount: 'Standard 1 Bulan', price: 120000 },
      { amount: 'Premium 1 Bulan', price: 186000 },
    ]
  }
};

export const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gameId: '',
    category: '',
    product: '',
    amount: '',
    price: 0,
    paymentMethod: ''
  });

  const [availableProducts, setAvailableProducts] = useState<string[]>([]);
  const [availableAmounts, setAvailableAmounts] = useState<{amount: string, price: number}[]>([]);

  // Update available products when category changes
  useEffect(() => {
    if (formData.category) {
      const products = Object.keys(productData[formData.category as keyof typeof productData] || {});
      setAvailableProducts(products);
      setFormData(prev => ({ ...prev, product: '', amount: '', price: 0 }));
    } else {
      setAvailableProducts([]);
    }
  }, [formData.category]);

  // Update available amounts when product changes
  useEffect(() => {
    if (formData.category && formData.product) {
      const amounts = productData[formData.category as keyof typeof productData]?.[formData.product] || [];
      setAvailableAmounts(amounts);
      setFormData(prev => ({ ...prev, amount: '', price: 0 }));
    } else {
      setAvailableAmounts([]);
    }
  }, [formData.category, formData.product]);

  // Update price when amount changes
  useEffect(() => {
    if (formData.amount) {
      const selectedAmount = availableAmounts.find(item => item.amount === formData.amount);
      if (selectedAmount) {
        setFormData(prev => ({ ...prev, price: selectedAmount.price }));
      }
    }
  }, [formData.amount, availableAmounts]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
*PESANAN BARU*

Nama: ${formData.name}
ID Game/No HP: ${formData.gameId}
Kategori: ${formData.category}
Produk: ${formData.product}
Jumlah: ${formData.amount}
Harga: ${formatPrice(formData.price)}
Metode Pembayaran: ${formData.paymentMethod}

Mohon diproses, terima kasih!
    `.trim();
    
    const whatsappUrl = `https://wa.me/6285173231171?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Sekarang
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Isi form di bawah ini dan pesanan Anda akan langsung dikirim ke WhatsApp kami
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Hash className="w-4 h-4 inline mr-2" />
                  ID Game / No. HP
                </label>
                <input
                  type="text"
                  required
                  value={formData.gameId}
                  onChange={(e) => setFormData({ ...formData, gameId: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Masukkan ID atau nomor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Tag className="w-4 h-4 inline mr-2" />
                Kategori Produk
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              >
                <option value="">Pilih kategori</option>
                <option value="game">Game</option>
                <option value="pulsa">Pulsa</option>
                <option value="voucher">Voucher</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Gamepad2 className="w-4 h-4 inline mr-2" />
                  Produk
                </label>
                <select
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  disabled={!formData.category}
                >
                  <option value="">Pilih produk</option>
                  {availableProducts.map((product) => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jumlah / Nominal
                </label>
                <select
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  disabled={!formData.product}
                >
                  <option value="">Pilih jumlah</option>
                  {availableAmounts.map((item, index) => (
                    <option key={index} value={item.amount}>
                      {item.amount} - {formatPrice(item.price)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <DollarSign className="w-4 h-4 inline mr-2" />
                Harga Produk
              </label>
              <div className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 font-semibold text-lg">
                {formData.price > 0 ? formatPrice(formData.price) : 'Pilih produk untuk melihat harga'}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <CreditCard className="w-4 h-4 inline mr-2" />
                Metode Pembayaran
              </label>
              <select
                required
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              >
                <option value="">Pilih metode pembayaran</option>
                <option value="Transfer Bank BCA">Transfer Bank BCA</option>
                <option value="Transfer Bank BRI">Transfer Bank BRI</option>
                <option value="Transfer Bank BNI">Transfer Bank BNI</option>
                <option value="Transfer Bank Mandiri">Transfer Bank Mandiri</option>
                <option value="DANA">DANA</option>
                <option value="OVO">OVO</option>
                <option value="GoPay">GoPay</option>
                <option value="ShopeePay">ShopeePay</option>
                <option value="QRIS">QRIS</option>
                <option value="Indomaret">Indomaret</option>
                <option value="Alfamart">Alfamart</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};