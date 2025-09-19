import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle,
  Gamepad2,
  Shield,
  CreditCard
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">TopUpPro</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Platform terpercaya untuk top up game, pulsa, dan voucher digital dengan layanan terbaik sejak 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Link Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"><Gamepad2 className="w-4 h-4" />Top Up Game</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"><Phone className="w-4 h-4" />Pulsa & Data</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"><CreditCard className="w-4 h-4" />Voucher Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"><Shield className="w-4 h-4" />Cek Transaksi</a></li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Game Populer</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile Legends</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Free Fire</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">PUBG Mobile</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Genshin Impact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Valorant</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>support@topuppro.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>24/7 Online</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} TopUpPro. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};