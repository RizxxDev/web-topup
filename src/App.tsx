import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;