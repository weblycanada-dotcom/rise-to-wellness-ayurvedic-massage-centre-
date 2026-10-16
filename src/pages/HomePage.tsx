import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/wellnessData';
import { IMAGES } from '../assets/images';
import { BookingContactForm } from '../components/BookingContactForm';

interface HomePageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenBooking: () => void;
  onSelectServiceForBooking?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectServiceForBooking
}) => {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION matching reference screenshot exactly */}
      <section className="relative min-h-[640px] lg:min-h-[740px] 2xl:min-h-[820px] bg-[#1a231d] text-white flex items-center overflow-hidden">
        {/* Background photo matching reference scene: serene woman outdoors with lush green foliage overhead */}
        <img
          src={IMAGES.heroOtiumStyle}
          alt="Rise to Wellness Retreat and Spa"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88]"
          loading="eager"
        />
        {/* Scrim gradient on left to guarantee 100% legibility of white London font on all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 2xl:py-36 w-full">
          <div className="max-w-xl text-left">
            {/* Exact Hero Heading in London font, 60px, 400 weight, 60px line-height, #fff */}
            <h1
              style={{
                fontFamily: 'London, sans-serif',
                fontSize: 'clamp(38px, 4.5vw, 60px)',
                fontWeight: 400,
                lineHeight: 'clamp(42px, 4.5vw, 60px)',
                color: '#ffffff',
              }}
              className="tracking-normal uppercase drop-shadow-md text-white"
            >
              RISE TO<br />
              WELLNESS &amp;<br />
              AYURVEDIC<br />
              MASSAGE
            </h1>

            {/* Exact Subtitle in Open Sans, 16px, 400 weight, 24px line-height */}
            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#ffffff',
              }}
              className="mt-4 max-w-md opacity-95 text-white drop-shadow-sm"
            >
              Connecting ladies and children with the power of intentional leisure.
            </p>

            {/* Warm Camel/Tan Button matching reference screenshot */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-ref-brown px-7 py-3 inline-flex items-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-95"
              >
                <span>BOOK YOUR APPOINTMENT</span>
                <span className="text-sm font-normal">→</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-5 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#f0c987]" />
                <span>Call (825) 733-6007</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WELCOME TO RISE TO WELLNESS SECTION matching reference screenshot exactly */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-100">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Heading in London font, 32px, 400, 32px line-height, #333 */}
            <div className="md:col-span-5">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '32px',
                  fontWeight: 400,
                  lineHeight: '32px',
                  color: '#333333',
                }}
                className="tracking-normal uppercase"
              >
                WELCOME TO<br />
                RISE TO WELLNESS
              </h2>
            </div>

            {/* Right Column: Paragraph in Open Sans, 16px, 400, 24px line-height, #333 */}
            <div className="md:col-span-7">
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333333',
                }}
                className="mb-8"
              >
                At Rise to Wellness we support our clients to reconnect with their body, mind and spirit. Our skilled practitioner offers evidence-based treatments to help you relax, restore, and recharge. Our goal is to be of service to you so you can have the vitality to show up and serve in your own life.
              </p>

              <button
                onClick={() => onNavigate('about')}
                className="btn-ref-brown px-6 py-2.5 inline-flex items-center gap-1.5 cursor-pointer shadow-xs hover:scale-[1.02] active:scale-95"
              >
                <span>LEARN MORE ABOUT US</span>
                <span className="text-sm font-normal">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR VERTICAL CARDS SECTION WITH ARCHED IMAGES matching reference screenshot exactly */}
      <section className="py-20 md:py-28 bg-[#f7f7f7] relative overflow-hidden">
        
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Delicate botanical leaf branch drawing illustration positioned relative to the content */}
          <div className="absolute -left-6 2xl:-left-10 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none hidden xl:block">
            <svg className="w-24 h-56 text-[#222f27]" viewBox="0 0 100 240" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 230 Q 30 150 15 10"/>
              <path d="M22 170 Q 55 160 55 140 Q 35 145 20 160" fill="currentColor" opacity="0.2"/>
              <path d="M18 130 Q 55 120 50 100 Q 32 108 17 122" fill="currentColor" opacity="0.2"/>
              <path d="M15 90 Q 50 78 45 60 Q 28 68 14 82" fill="currentColor" opacity="0.2"/>
              <path d="M12 50 Q 42 38 38 22 Q 22 30 11 44" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            
            {/* Card 1: MASSAGE THERAPY */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/70 p-4 pb-6 flex flex-col items-center text-center">
              {/* Arched Top Image matching reference screenshot */}
              <div className="w-full h-64 rounded-t-[90px] rounded-b-md overflow-hidden bg-stone-100 mb-5">
                <img
                  src={IMAGES.cardMassageTherapy}
                  alt="Massage Therapy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333333',
                }}
                className="uppercase tracking-wide mb-6"
              >
                MASSAGE THERAPY
              </h3>

              <div className="w-full space-y-2 mt-auto">
                <button
                  onClick={() => onNavigate('services', 'deep-tissue')}
                  className="w-full py-2.5 btn-ref-brown cursor-pointer"
                >
                  LEARN MORE
                </button>
                <button
                  onClick={() => {
                    if (onSelectServiceForBooking) {
                      onSelectServiceForBooking('deep-tissue');
                    } else {
                      onNavigate('contact', 'deep-tissue');
                    }
                  }}
                  className="w-full py-2.5 btn-ref-outline cursor-pointer"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Card 2: AYURVEDIC THERAPIES */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/70 p-4 pb-6 flex flex-col items-center text-center">
              {/* Arched Top Image matching reference screenshot */}
              <div className="w-full h-64 rounded-t-[90px] rounded-b-md overflow-hidden bg-stone-100 mb-5">
                <img
                  src={IMAGES.shirodharaTherapy}
                  alt="Ayurvedic Therapies"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333333',
                }}
                className="uppercase tracking-wide mb-6"
              >
                AYURVEDIC THERAPIES
              </h3>

              <div className="w-full space-y-2 mt-auto">
                <button
                  onClick={() => onNavigate('services', 'shirodhara')}
                  className="w-full py-2.5 btn-ref-brown cursor-pointer"
                >
                  LEARN MORE
                </button>
                <button
                  onClick={() => {
                    if (onSelectServiceForBooking) {
                      onSelectServiceForBooking('shirodhara');
                    } else {
                      onNavigate('contact', 'shirodhara');
                    }
                  }}
                  className="w-full py-2.5 btn-ref-outline cursor-pointer"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Card 3: COMPLIMENTARY CARE */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/70 p-4 pb-6 flex flex-col items-center text-center">
              {/* Arched Top Image matching reference screenshot */}
              <div className="w-full h-64 rounded-t-[90px] rounded-b-md overflow-hidden bg-stone-100 mb-5">
                <img
                  src={IMAGES.potliHerbalCompress}
                  alt="Complimentary Steam Sauna & Towels"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333333',
                }}
                className="uppercase tracking-wide mb-6"
              >
                COMPLIMENTARY CARE
              </h3>

              <div className="w-full space-y-2 mt-auto">
                <button
                  onClick={() => onNavigate('services', 'potli-massage')}
                  className="w-full py-2.5 btn-ref-brown cursor-pointer"
                >
                  LEARN MORE
                </button>
                <button
                  onClick={() => {
                    if (onSelectServiceForBooking) {
                      onSelectServiceForBooking('potli-massage');
                    } else {
                      onNavigate('contact', 'potli-massage');
                    }
                  }}
                  className="w-full py-2.5 btn-ref-outline cursor-pointer"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Card 4: LADIES & KIDS ONLY */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/70 p-4 pb-6 flex flex-col items-center text-center">
              {/* Arched Top Image matching reference screenshot */}
              <div className="w-full h-64 rounded-t-[90px] rounded-b-md overflow-hidden bg-stone-100 mb-5">
                <img
                  src={IMAGES.hotStoneTherapy}
                  alt="Ladies and Kids Massage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333333',
                }}
                className="uppercase tracking-wide mb-6"
              >
                LADIES &amp; KIDS MASSAGE
              </h3>

              <div className="w-full space-y-2 mt-auto">
                <button
                  onClick={() => onNavigate('services', 'kids-massage')}
                  className="w-full py-2.5 btn-ref-brown cursor-pointer"
                >
                  LEARN MORE
                </button>
                <button
                  onClick={() => {
                    if (onSelectServiceForBooking) {
                      onSelectServiceForBooking('kids-massage');
                    } else {
                      onNavigate('contact', 'kids-massage');
                    }
                  }}
                  className="w-full py-2.5 btn-ref-outline cursor-pointer"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR EXTRAORDINARY TEAM / PRACTITIONER SECTION matching reference screenshot exactly */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-100 text-center">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8">
          <h2
            style={{
              fontFamily: 'London, sans-serif',
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#333333',
            }}
            className="tracking-normal uppercase mb-5"
          >
            OUR EXTRAORDINARY PRACTITIONER
          </h2>

          <p
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#333333',
            }}
            className="max-w-2xl mx-auto mb-2"
          >
            We are honoured to share our knowledge and passion for health and wellness with you.
          </p>

          <p
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#333333',
            }}
            className="max-w-2xl mx-auto mb-8"
          >
            At Rise to Wellness our practitioner Dr. Hargeet Kaur is the heart and soul of our clinic. You are in good hands.
          </p>

          <button
            onClick={() => onNavigate('about')}
            className="btn-ref-brown px-7 py-3 inline-flex items-center gap-1.5 cursor-pointer shadow-xs hover:scale-[1.02] active:scale-95"
          >
            <span>MEET DR. HARGEET KAUR</span>
            <span className="text-sm font-normal">→</span>
          </button>
        </div>
      </section>

      {/* 5. ONLINE APPOINTMENT BOOKING & LOCATION SANCTUARY SECTION */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-stone-200" id="booking-section">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#135E26] font-bold block mb-1">
              Easy Online Booking · Ladies &amp; Children Only
            </span>
            <h2
              style={{
                fontFamily: 'London, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400,
                lineHeight: '1.2',
                color: '#1E3B2E',
              }}
              className="uppercase tracking-normal"
            >
              BOOK YOUR APPOINTMENT
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-xl mx-auto">
              Select your service &amp; timing below. All booking information will be sent directly to your email and Dr. Hargeet Kaur will confirm your slot.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Prominent Light Green Booking Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <BookingContactForm />
            </div>

            {/* Right Column: Google Maps Sanctuary Embed & Hours (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100">
                <div className="p-3.5 bg-[#1E3B2E] text-white flex items-center justify-between px-4">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <MapPin className="w-4 h-4 text-[#A5D6A7]" />
                    <span>Rise to Wellness Location</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Rise+to+Wellness+Ayurvedic+Massage+Centre/@51.1721101,-113.9362728,15z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#A5D6A7] hover:underline font-medium"
                  >
                    Open in Maps ↗
                  </a>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.100594856979!2d-113.9362728!3d51.1721101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537161cdad1957a3%3A0x3fadfa477d598f0!2sRise%20to%20Wellness%20Ayurvedic%20Massage%20Centre!5e1!3m2!1sen!2s!4v1792169137494!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Rise to Wellness Location Map"
                  className="w-full h-[280px] sm:h-[300px] block"
                />
              </div>

              {/* Sanctuary details card */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-3.5 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#135E26] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block text-sm">Rise to Wellness Ayurvedic Massage Centre</strong>
                    <span>Cornerstone NE, Calgary, Alberta, Canada</span>
                    <p className="text-[11px] text-stone-500 mt-0.5">Exclusively for ladies and children</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <Clock className="w-4 h-4 text-[#135E26] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Treatment Hours (By Appointment):</span>
                    <div className="mt-0.5 text-stone-600">Mon - Fri: 7am - 9pm · Sat &amp; Sun: 7am - 8pm</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <span className="text-stone-500">Call / Text Booking:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-bold text-[#135E26] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>(825) 733-6007</span>
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
