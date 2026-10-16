import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { OwnerChecklistModal } from './components/OwnerChecklistModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { InsurancePage } from './pages/InsurancePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BUSINESS_INFO, SERVICES } from './data/wellnessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [ownerChecklistOpen, setOwnerChecklistOpen] = useState(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync with browser hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      
      // Check for service deep link e.g. services/deep-tissue or services/shirodhara
      if (hash.startsWith('services/')) {
        const servicePart = hash.replace('services/', '');
        const matched = SERVICES.find(s => s.id === servicePart || s.slug === servicePart);
        if (matched) {
          setCurrentPage('services');
          setActiveServiceId(matched.id);
          return;
        }
      }

      if (['home', 'about', 'services', 'insurance', 'faq', 'contact', 'blog'].includes(hash)) {
        setCurrentPage(hash);
        if (hash !== 'services') {
          setActiveServiceId(undefined);
        }
      } else if (!hash) {
        setCurrentPage('home');
        setActiveServiceId(undefined);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, serviceId?: string) => {
    setCurrentPage(page);
    setActiveServiceId(serviceId);
    if (page === 'services' && serviceId) {
      window.location.hash = `#/services/${serviceId}`;
    } else {
      window.location.hash = page === 'home' ? '' : `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setPreSelectedServiceId(serviceId);
    navigateTo('contact', serviceId);
  };

  const handleOpenGeneralBooking = () => {
    setPreSelectedServiceId(undefined);
    navigateTo('contact');
  };

  // Update dynamic document title based on page
  useEffect(() => {
    if (currentPage === 'services' && activeServiceId) {
      const service = SERVICES.find(s => s.id === activeServiceId);
      if (service) {
        document.title = `${service.name} | Rise to Wellness Calgary`;
        return;
      }
    }

    const pageTitles: { [key: string]: string } = {
      home: 'Rise to Wellness Ayurvedic Massage Centre | Cornerstone NE, Calgary',
      about: 'About Us & Dr. Hargeet Kaur | Rise to Wellness Ayurvedic Massage',
      services: 'Massage & Ayurvedic Services Menu | Rise to Wellness',
      insurance: 'Insurance & Direct Billing Options | Rise to Wellness Calgary',
      faq: 'Frequently Asked Questions | Rise to Wellness Ayurvedic Massage',
      contact: 'Contact & Booking Enquiry | Cornerstone NE, Calgary, AB',
      blog: 'Wellness & Ayurvedic Insights Blog | Rise to Wellness'
    };
    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage, activeServiceId]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF9] text-[#1C1F1D] overflow-x-hidden w-full">
      {/* Persistent Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(p, sId) => navigateTo(p, sId)}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenOwnerChecklist={() => setOwnerChecklistOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(p, sId) => navigateTo(p, sId)}
            onOpenBooking={handleOpenGeneralBooking}
            onSelectServiceForBooking={handleOpenBookingWithService}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={(p) => navigateTo(p)}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={(p) => navigateTo(p)}
            onOpenBooking={handleOpenGeneralBooking}
            onSelectServiceForBooking={handleOpenBookingWithService}
            initialServiceId={activeServiceId}
          />
        )}
        {currentPage === 'insurance' && (
          <InsurancePage
            onNavigate={(p) => navigateTo(p)}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}
        {currentPage === 'faq' && (
          <FaqPage
            onNavigate={(p) => navigateTo(p)}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={(p) => navigateTo(p)}
            onOpenBooking={handleOpenGeneralBooking}
            onOpenOwnerChecklist={() => setOwnerChecklistOpen(true)}
            initialServiceId={activeServiceId || preSelectedServiceId}
          />
        )}
        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={(p) => navigateTo(p)}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={(p) => navigateTo(p)}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenOwnerChecklist={() => setOwnerChecklistOpen(true)}
      />

      {/* Booking Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedServiceId={preSelectedServiceId}
      />

      {/* Owner Pre-Launch Checklist Modal */}
      <OwnerChecklistModal
        isOpen={ownerChecklistOpen}
        onClose={() => setOwnerChecklistOpen(false)}
      />
    </div>
  );
}
