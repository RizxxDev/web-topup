import React, { useState } from 'react';
import { Send, User, Gamepad2, Hash, CreditCard } from 'lucide-react';

export const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gameId: '',
    product: '',
    amount: '',
    paymentMethod: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
*PESANAN BARU*

Nama: ${formData.name}
ID Game: ${formData.gameId}
Produk: ${formData.product}
Jumlah: ${formData.amount}
Metode Pembayaran: ${formData.paymentMethod}

Mohon diproses, terima kasih!
    `.trim();
    
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
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
                >
                  <option value="">Pilih produk</option>
                  <option value="Mobile Legends">Mobile Legends</option>
                  <option value="Free Fire">Free Fire</option>
                  <option value="PUBG Mobile">PUBG Mobile</option>
                  <option value="Telkomsel">Pulsa Telkomsel</option>
                  <option value="Indosat">Pulsa Indosat</option>
                  <option value="XL">Pulsa XL</option>
                  <option value="Google Play">Google Play</option>
                  <option value="Steam">Steam Wallet</option>
                  <option value="iTunes">iTunes Gift Card</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jumlah / Nominal
                </label>
                <input
                  type="text"
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Contoh: 86 Diamonds, 10.000"
                />
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
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="E-wallet (Dana/OVO/GoPay)">E-wallet (Dana/OVO/GoPay)</option>
                <option value="QRIS">QRIS</option>
                <option value="Indomaret/Alfamart">Indomaret/Alfamart</option>
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