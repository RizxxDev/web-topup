import React from 'react';
import { ParticleBackground } from './ParticleBackground';
import { Zap, Shield, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Top Up Game
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Instan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Platform terpercaya untuk top up game, pulsa, dan voucher digital dengan proses cepat dan aman
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-blue-200 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5" />
              <span>Proses Instan</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5" />
              <span>100% Aman</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Mulai Top Up Sekarang
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};