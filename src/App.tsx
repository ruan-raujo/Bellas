import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { VideoSection } from './components/VideoSection';
import { TransformLook } from './components/TransformLook';
import { InstagramFeed } from './components/InstagramFeed';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { NavigationDrawer } from './components/NavigationDrawer';
import { BookingModal } from './components/BookingModal';
import { ContactModal } from './components/ContactModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Alisamentos');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#1c1d20] text-white selection:bg-[#e8bf96] selection:text-[#272422] relative overflow-x-hidden">
      {/* Modals & Overlays */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* Main Page Layout matching Figma Node 4001:14 */}
      <div className="relative w-full" data-node-id="4001:14">
        {/* Header (Logo + Menu) */}
        <Header onOpenMenu={() => setIsMenuOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Gold Ticker Ribbon 1 */}
        <Ticker nodeId="4001:51" />

        {/* Services We Offer */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* About Me Section */}
        <About />

        {/* Transformation Gallery */}
        <Portfolio />

        {/* Video Showcase Section */}
        <VideoSection onOpenVideo={() => setIsVideoOpen(true)} />

        {/* Transforming Your Look Section */}
        <TransformLook onOpenContact={() => setIsContactOpen(true)} />

        {/* Follow Us On Instagram */}
        <InstagramFeed />

        {/* Call To Action: Book Your Style / Transform Your Look */}
        <CtaSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Gold Ticker Ribbon 2 */}
        <Ticker nodeId="4001:65" />

        {/* Footer */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </div>
  );
}
