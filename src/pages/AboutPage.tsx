import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { Phone, ShieldAlert, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/wellnessData';
import { IMAGES } from '../assets/images';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="w-full">
      {/* Header Banner matching reference screenshot 6 */}
      <HeaderBanner
        title="About Us"
        currentPage="About Us"
        onNavigate={onNavigate}
      />

      {/* SECTION 1: ABOUT US */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-100">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '32px',
                  fontWeight: 400,
                  lineHeight: '32px',
                  color: '#333',
                }}
                className="uppercase tracking-normal"
              >
                ABOUT RISE TO WELLNESS
              </h2>

              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333',
                }}
              >
                Rise to Wellness Ayurvedic Massage Centre brings together massage therapy, relaxation treatments, and traditional Ayurvedic therapies in a welcoming environment for ladies and children.
              </p>

              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333',
                }}
              >
                Our approach combines modern massage techniques with traditional Ayurvedic practices to help clients make time for relaxation, feel refreshed, and support their overall sense of well-being.
              </p>

              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333',
                }}
              >
                We aim to provide a comfortable, respectful setting where clients can explore treatments suited to their preferences and enjoy a moment of calm in their day.
              </p>

              {/* Policy Callout */}
              <div className="p-4 bg-[#FAF3E0] border border-[#e6d7b8] rounded-xl text-xs text-[#6b4b1b] space-y-1">
                <span className="font-bold uppercase tracking-wider block">
                  Ladies &amp; Children Only Policy
                </span>
                <p>
                  Rise to Wellness serves ladies and children only. Massage services for men are not offered.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-ref-brown px-7 py-3 cursor-pointer shadow-xs hover:scale-[1.02]"
                >
                  BOOK AN APPOINTMENT →
                </button>
              </div>
            </div>

            {/* Right Column: Imagery */}
            <div className="lg:col-span-5">
              <div className="border border-stone-200 p-2 bg-stone-50 rounded-2xl shadow-sm overflow-hidden">
                <img
                  src={IMAGES.heroAyurvedicSpa}
                  alt="Rise to Wellness Ayurvedic Spa Interior"
                  className="w-full h-[440px] object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS RISE TO WELLNESS / AYURVEDIC TRADITION */}
      <section className="py-20 md:py-28 bg-[#f7f7f7] border-b border-stone-100">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="border border-stone-200 p-2 bg-white rounded-2xl shadow-sm overflow-hidden">
                <img
                  src={IMAGES.shirodharaTherapy}
                  alt="Traditional Ayurvedic Shirodhara"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '32px',
                  fontWeight: 400,
                  lineHeight: '32px',
                  color: '#333',
                }}
                className="uppercase tracking-normal"
              >
                WHAT IS AYURVEDIC WELLNESS?
              </h2>

              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333',
                }}
              >
                Ayurveda is a traditional system of healthcare that views physical ease, emotional calm, and nervous system replenishment as deeply intertwined.
              </p>

              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#333',
                }}
              >
                At Rise to Wellness in Cornerstone NE, Calgary, our treatments pair evidence-based registered massage methods with classical therapies like Shirodhara (Third Eye oil flow), Janu-vasti (warm oil knee pools), and Potli (warm herbal pouches).
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#333]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9c6a46]" />
                  <span>Warm Botanical Oils</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9c6a46]" />
                  <span>Natural Herbal Compresses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9c6a46]" />
                  <span>Free 10-Min Steam Sauna</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9c6a46]" />
                  <span>Complimentary Hot Towels</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: MEET DR. HARGEET KAUR */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-100">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="border border-stone-200/80 p-8 sm:p-12 bg-[#FAF9F6] rounded-2xl shadow-xs">
            
            <div className="w-16 h-16 rounded-full bg-[#222f27] text-[#f0c987] mx-auto flex items-center justify-center mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h2
              style={{
                fontFamily: 'London, sans-serif',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#333',
              }}
              className="uppercase tracking-normal mb-2"
            >
              DR. HARGEET KAUR
            </h2>

            <div className="inline-block px-4 py-1 bg-[#222f27] text-[#f0c987] text-xs font-mono font-bold tracking-wider rounded-full mb-6">
              {BUSINESS_INFO.credentials}
            </div>

            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#333',
              }}
              className="max-w-2xl mx-auto mb-8"
            >
              Dr. Hargeet Kaur is the named booking contact for Rise to Wellness Ayurvedic Massage Centre. With extensive training in traditional Ayurvedic medicine and registered massage therapy, she brings mindful, compassionate care to ladies and children throughout Calgary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-ref-brown px-7 py-3 cursor-pointer shadow-xs"
              >
                BOOK WITH DR. HARGEET KAUR
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-6 py-3 rounded-full border border-stone-300 text-[#333] hover:bg-white text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#9c6a46]" />
                <span>Call (825) 733-6007</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
