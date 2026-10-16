import React, { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/wellnessData';
import { RiseToWellnessLogo } from './RiseToWellnessLogo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenBooking: () => void;
  onOpenOwnerChecklist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenOwnerChecklist
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page: string, serviceId?: string) => {
    onNavigate(page, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200/90">
      {/* Main Navigation Bar matching reference screenshot layout with centered logo grid on big screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between h-24 w-full">
          
          {/* Left Nav Links (Desktop) - Exactly 3 items: HOME, ABOUT US, SERVICES */}
          <nav className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 text-[12px] uppercase tracking-[0.14em] font-semibold text-[#333333] pr-6 xl:pr-10">
            <button
              onClick={() => handleNav('home')}
              className={`hover:text-[#9c6a46] transition-colors cursor-pointer flex items-center gap-1 ${
                currentPage === 'home' ? 'text-[#9c6a46] font-bold' : ''
              }`}
            >
              <span>HOME</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`hover:text-[#9c6a46] transition-colors cursor-pointer flex items-center gap-1 ${
                currentPage === 'about' ? 'text-[#9c6a46] font-bold' : ''
              }`}
            >
              <span>ABOUT US</span>
            </button>

            {/* Services with rich interactive dropdown menu */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen(prev => !prev);
                }}
                className={`hover:text-[#9c6a46] transition-colors cursor-pointer flex items-center gap-1.5 py-4 ${
                  currentPage === 'services' ? 'text-[#9c6a46] font-bold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#9c6a46]' : 'opacity-60'}`} />
              </button>

              {/* Dropdown panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-stone-500">
                      Our Treatment Offerings (Ladies &amp; Children Only)
                    </span>
                    <button
                      onClick={() => handleNav('services')}
                      className="text-xs font-bold text-[#9c6a46] hover:underline cursor-pointer"
                    >
                      View All Treatments
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-left">
                    {/* Column 1: Massage Therapy */}
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9c6a46] font-bold block mb-2.5">
                        Massage Therapy (9)
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        <li>
                          <button
                            onClick={() => handleNav('services', 'deep-tissue')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Deep Tissue Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90+</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'swedish-relaxation')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Swedish Relaxation</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90+</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'pre-natal')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Pre-natal Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90+</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'post-natal')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Post-natal Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90+</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'head-massage')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Head Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$50</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'head-neck-shoulder')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Head, Neck &amp; Shoulder</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'cupping-massage')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Cupping Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90+</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'hot-stone-massage')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Hot Stone Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$100</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'kids-massage')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Kid&apos;s Massage</span>
                            <span className="font-mono text-stone-500 text-[11px]">$90</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Traditional Ayurvedic Therapies */}
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9c6a46] font-bold block mb-2.5">
                        Ayurvedic Therapies (3)
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        <li>
                          <button
                            onClick={() => handleNav('services', 'shirodhara')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Shirodhara (Third Eye)</span>
                            <span className="font-mono text-stone-500 text-[11px]">$120</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'janu-vasti')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Janu-vasti (Knee Therapy)</span>
                            <span className="font-mono text-stone-500 text-[11px]">$100</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNav('services', 'potli-massage')}
                            className="w-full text-left p-1.5 hover:bg-stone-50 rounded-lg flex items-center justify-between cursor-pointer group"
                          >
                            <span className="font-semibold text-stone-800 group-hover:text-[#9c6a46]">Potli Herbal Compress</span>
                            <span className="font-mono text-stone-500 text-[11px]">$100</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Center Official Brand Logo matching wlogo.jpg */}
          <div className="flex justify-center py-1">
            <button
              onClick={() => handleNav('home')}
              className="flex flex-col items-center text-center cursor-pointer group focus:outline-hidden"
              aria-label="Rise to Wellness Home"
            >
              <RiseToWellnessLogo
                className="h-16 sm:h-[72px] w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </button>
          </div>

          {/* Right Nav Links & Dark Pill CTA Button - exactly 3 items + BOOK NOW button */}
          <div className="hidden lg:flex items-center justify-start gap-6 xl:gap-8 pl-6 xl:pl-10">
            <nav className="flex items-center gap-6 xl:gap-8 text-[12px] uppercase tracking-[0.14em] font-semibold text-[#333333]">
              <button
                onClick={() => handleNav('faq')}
                className={`hover:text-[#9c6a46] transition-colors cursor-pointer ${
                  currentPage === 'faq' ? 'text-[#9c6a46] font-bold' : ''
                }`}
              >
                FAQS
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`hover:text-[#9c6a46] transition-colors cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#9c6a46] font-bold' : ''
                }`}
              >
                CONTACT
              </button>
              <button
                onClick={() => handleNav('blog')}
                className={`hover:text-[#9c6a46] transition-colors cursor-pointer ${
                  currentPage === 'blog' ? 'text-[#9c6a46] font-bold' : ''
                }`}
              >
                BLOG
              </button>
            </nav>

            <button
              onClick={onOpenBooking}
              className="px-5 xl:px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white bg-[#222f27] hover:bg-[#151e18] transition-all rounded-full shadow-xs cursor-pointer active:scale-95 whitespace-nowrap"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#222f27] rounded-full cursor-pointer"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#333] hover:text-black cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-[#FAF3E0] text-[#6b4b1b] text-xs mb-4 flex items-center justify-between font-medium">
            <span>Ladies &amp; Children Only</span>
            <span className="text-[11px]">No Men Massage</span>
          </div>

          <nav className="flex flex-col gap-4 text-xs font-semibold tracking-[0.12em] uppercase text-[#333]">
            <button
              onClick={() => handleNav('home')}
              className={`text-left py-2 border-b border-stone-100 ${currentPage === 'home' ? 'text-[#9c6a46]' : ''}`}
            >
              HOME
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`text-left py-2 border-b border-stone-100 ${currentPage === 'about' ? 'text-[#9c6a46]' : ''}`}
            >
              ABOUT US
            </button>
            <div className="border-b border-stone-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left py-2 flex items-center justify-between ${
                  currentPage === 'services' ? 'text-[#9c6a46]' : ''
                }`}
              >
                <span>SERVICES &amp; PRICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#9c6a46]' : 'opacity-60'}`} />
              </button>

              {mobileServicesOpen && (
                <div className="py-2 pl-3 space-y-2 border-t border-stone-100/70 text-[11px] normal-case tracking-normal">
                  <button
                    onClick={() => handleNav('services')}
                    className="block font-bold text-[#9c6a46] py-1"
                  >
                    All Treatments Overview
                  </button>
                  <div className="space-y-1.5 pt-1">
                    <button onClick={() => handleNav('services', 'deep-tissue')} className="block text-stone-700 hover:text-black py-0.5">Full Body Deep Tissue ($90+)</button>
                    <button onClick={() => handleNav('services', 'swedish-relaxation')} className="block text-stone-700 hover:text-black py-0.5">Swedish Relaxation ($90+)</button>
                    <button onClick={() => handleNav('services', 'pre-natal')} className="block text-stone-700 hover:text-black py-0.5">Pre-natal Massage ($90+)</button>
                    <button onClick={() => handleNav('services', 'post-natal')} className="block text-stone-700 hover:text-black py-0.5">Post-natal Massage ($90+)</button>
                    <button onClick={() => handleNav('services', 'head-massage')} className="block text-stone-700 hover:text-black py-0.5">Head Massage ($50)</button>
                    <button onClick={() => handleNav('services', 'head-neck-shoulder')} className="block text-stone-700 hover:text-black py-0.5">Head, Neck &amp; Shoulder ($90)</button>
                    <button onClick={() => handleNav('services', 'cupping-massage')} className="block text-stone-700 hover:text-black py-0.5">Cupping Massage ($90+)</button>
                    <button onClick={() => handleNav('services', 'hot-stone-massage')} className="block text-stone-700 hover:text-black py-0.5">Hot Stone Massage ($100)</button>
                    <button onClick={() => handleNav('services', 'kids-massage')} className="block text-stone-700 hover:text-black py-0.5">Kid&apos;s Massage ($90)</button>
                    <button onClick={() => handleNav('services', 'shirodhara')} className="block text-stone-700 hover:text-black py-0.5">Shirodhara Third Eye ($120)</button>
                    <button onClick={() => handleNav('services', 'janu-vasti')} className="block text-stone-700 hover:text-black py-0.5">Janu-vasti Knee Therapy ($100)</button>
                    <button onClick={() => handleNav('services', 'potli-massage')} className="block text-stone-700 hover:text-black py-0.5">Potli Herbal Compress ($100)</button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => handleNav('faq')}
              className={`text-left py-2 border-b border-stone-100 ${currentPage === 'faq' ? 'text-[#9c6a46]' : ''}`}
            >
              FAQS
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`text-left py-2 border-b border-stone-100 ${currentPage === 'contact' ? 'text-[#9c6a46]' : ''}`}
            >
              CONTACT &amp; LOCATION
            </button>
            <button
              onClick={() => handleNav('blog')}
              className={`text-left py-2 border-b border-stone-100 ${currentPage === 'blog' ? 'text-[#9c6a46]' : ''}`}
            >
              WELLNESS BLOG
            </button>
          </nav>

          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#222f27] text-white font-semibold text-xs tracking-wider rounded-full shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#f0c987]" />
              <span>Call (825) 733-6007</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
