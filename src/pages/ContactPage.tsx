import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import {
  MapPin,
  ShieldAlert,
  Clock,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/wellnessData';
import { BookingContactForm } from '../components/BookingContactForm';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenOwnerChecklist: () => void;
  initialServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  initialServiceId
}) => {
  return (
    <div className="w-full bg-[#FCFBF9]">
      <HeaderBanner
        title="Contact & Location"
        currentPage="Contact"
        onNavigate={onNavigate}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: SIMPLE LIGHT GREEN BOOKING FORM (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#135E26] font-bold block mb-1">
                  Cornerstone NE, Calgary
                </span>
                <h1
                  style={{
                    fontFamily: 'London, sans-serif',
                    fontSize: 'clamp(28px, 3.5vw, 38px)',
                    fontWeight: 400,
                    lineHeight: '1.2',
                    color: '#1E3B2E',
                  }}
                  className="uppercase tracking-normal"
                >
                  BOOK YOUR TREATMENT
                </h1>
                <p className="text-stone-600 text-sm mt-1">
                  Exclusively for ladies and children. Fill out this quick form and all booking details will be sent to your email.
                </p>
              </div>

              {/* Notice banner */}
              <div className="px-4 py-2.5 bg-[#FAF3E0] border border-[#e6d7b8] rounded-xl text-xs text-[#6b4b1b] flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#b87a00] shrink-0" />
                <span>Ladies &amp; children only · In-person sessions at our Cornerstone NE centre</span>
              </div>

              {/* PROMINENT LIGHT GREEN FORM COMPONENT */}
              <BookingContactForm initialServiceId={initialServiceId} />

            </div>

            {/* RIGHT COLUMN: GOOGLE MAPS EMBED & HOURS (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Exact Google Maps Embed as requested */}
              <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-md bg-stone-100">
                <div className="p-3.5 bg-[#1E3B2E] text-white flex items-center justify-between px-4">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <MapPin className="w-4 h-4 text-[#A5D6A7]" />
                    <span>Rise to Wellness Location</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Rise+to+Wellness+Ayurvedic+Massage+Centre/@51.1721101,-113.9362728,15z"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[11px] text-[#A5D6A7] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.100594856979!2d-113.9362728!3d51.1721101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537161cdad1957a3%3A0x3fadfa477d598f0!2sRise%20to%20Wellness%20Ayurvedic%20Massage%20Centre!5e1!3m2!1sen!2s!4v1792169137494!5m2!1sen!2s"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Rise to Wellness Ayurvedic Massage Centre Location"
                  className="w-full h-[380px] sm:h-[420px] block"
                />

                <div className="p-3 bg-stone-50 border-t border-stone-200 text-center">
                  <a
                    href="https://www.google.com/maps/dir//Rise+to+Wellness+Ayurvedic+Massage+Centre"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ref-outline py-2 px-5 inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#135E26]" />
                    <span>Get Directions on Google Maps ↗</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="border border-stone-200 p-5 bg-white rounded-3xl shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#135E26]" />
                  <h3
                    style={{ fontFamily: 'London, sans-serif' }}
                    className="text-base font-normal text-stone-900 uppercase"
                  >
                    TREATMENT HOURS
                  </h3>
                </div>

                <div className="space-y-1.5 text-xs text-stone-700 border-t border-b border-stone-100 py-2.5">
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-800">Monday - Friday:</span>
                    <span>7:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-800">Saturday &amp; Sunday:</span>
                    <span>7:00 AM – 8:00 PM</span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-500 italic">
                  * By appointment only. Every session includes private treatment and complimentary steam sauna.
                </p>

                <div className="pt-1 flex items-center justify-between text-xs border-t border-stone-100">
                  <span className="text-stone-500 font-medium">Direct Appointment Line:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-bold text-[#135E26] hover:underline"
                  >
                    (825) 733-6007
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
