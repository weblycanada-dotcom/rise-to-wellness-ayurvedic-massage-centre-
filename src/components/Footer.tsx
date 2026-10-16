import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, CALGARY_COMMUNITIES } from '../data/wellnessData';
import { RiseToWellnessLogo } from './RiseToWellnessLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenOwnerChecklist?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenOwnerChecklist
}) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1c1c] text-[#cccccc] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 4-column layout matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-stone-800/80">
          
          {/* Col 1: Brand Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start">
              <RiseToWellnessLogo
                className="h-16 w-auto"
                variant="dark"
                showSubtitle={true}
              />
            </div>

            <p
              style={{ fontFamily: '"Open Sans", sans-serif' }}
              className="text-xs text-stone-400 leading-relaxed font-light max-w-sm"
            >
              Connecting ladies and children with the power of intentional leisure and authentic Ayurvedic wellness.
            </p>

            <div className="pt-2 text-[11px] text-[#f0c987]">
              <span>Client Policy: For Ladies &amp; Kids Only (No Men Massage)</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{ fontFamily: 'London, "Tenor Sans", sans-serif' }}
              className="text-xs uppercase tracking-[0.14em] text-white font-normal mb-5 block"
            >
              QUICK LINKS
            </h4>
            <ul
              style={{ fontFamily: '"Open Sans", sans-serif' }}
              className="space-y-2 text-xs text-[#cccccc]"
            >
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-[#d4ad76] hover:underline cursor-pointer font-medium">
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Calgary Communities (2 cols) */}
          <div className="lg:col-span-2">
            <h4
              style={{ fontFamily: 'London, "Tenor Sans", sans-serif' }}
              className="text-xs uppercase tracking-[0.14em] text-white font-normal mb-5 block"
            >
              CALGARY COMMUNITIES
            </h4>
            <ul
              style={{ fontFamily: '"Open Sans", sans-serif' }}
              className="space-y-2 text-xs text-[#cccccc]"
            >
              <li>Cornerstone NE</li>
              <li>Skyview Ranch</li>
              <li>Redstone</li>
              <li>Cityscape</li>
              <li>Savanna</li>
              <li>Saddleridge</li>
            </ul>
          </div>

          {/* Col 4: Get In Touch (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{ fontFamily: 'London, "Tenor Sans", sans-serif' }}
              className="text-xs uppercase tracking-[0.14em] text-white font-normal mb-5 block"
            >
              GET IN TOUCH
            </h4>
            <div
              style={{ fontFamily: '"Open Sans", sans-serif' }}
              className="space-y-3 text-xs text-[#cccccc]"
            >
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4ad76] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Cornerstone NE</p>
                  <p className="text-stone-400">Calgary, AB</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#d4ad76] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-white hover:text-[#d4ad76] font-semibold transition-colors"
                  >
                    (825) 733-6007
                  </a>
                  <p className="text-stone-400 text-[11px]">Dr. Hargeet Kaur</p>
                </div>
              </div>

              {/* Social Icons matching reference screenshot bottom right */}
              <div className="pt-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center hover:bg-stone-700 transition-colors cursor-pointer">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center hover:bg-stone-700 transition-colors cursor-pointer">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
