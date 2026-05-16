/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

