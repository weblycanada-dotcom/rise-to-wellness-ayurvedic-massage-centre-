import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/wellnessData';
import { IMAGES } from '../assets/images';
import { ServiceDetailPage } from './ServiceDetailPage';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onSelectServiceForBooking?: (serviceId: string) => void;
  initialServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectServiceForBooking,
  initialServiceId
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(initialServiceId || null);

  useEffect(() => {
    setSelectedServiceId(initialServiceId || null);
  }, [initialServiceId]);

  const imageMap: { [key: string]: string } = {
    cardMassageTherapy: IMAGES.cardMassageTherapy,
    heroOtiumStyle: IMAGES.heroOtiumStyle,
    servicePrenatalMassage: IMAGES.servicePrenatalMassage,
    heroAyurvedicSpa: IMAGES.heroAyurvedicSpa,
    serviceHeadMassage: IMAGES.serviceHeadMassage,
    serviceCuppingTherapy: IMAGES.serviceCuppingTherapy,
    hotStoneTherapy: IMAGES.hotStoneTherapy,
    shirodharaTherapy: IMAGES.shirodharaTherapy,
    serviceJanuVasti: IMAGES.serviceJanuVasti,
    potliHerbalCompress: IMAGES.potliHerbalCompress
  };

  // If a specific service is selected, render the simple Service Detail Page
  if (selectedServiceId) {
    const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
    return (
      <ServiceDetailPage
        service={activeService}
        onBack={() => {
          setSelectedServiceId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={onOpenBooking}
        onSelectServiceForBooking={onSelectServiceForBooking}
      />
    );
  }

  return (
    <div className="w-full bg-[#FCFBF9] pb-24">
      
      {/* Top Bar matching PDF screenshot 1: "← Back to Home" on left, "12 treatments available" on right */}
      <div className="border-b border-stone-200 bg-white py-3.5 px-6 sm:px-8">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto flex items-center justify-between text-xs">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-stone-600 hover:text-[#222f27] font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span
            style={{ fontFamily: '"Open Sans", sans-serif' }}
            className="text-stone-500 font-medium"
          >
            {SERVICES.length} treatments available
          </span>
        </div>
      </div>

      {/* Header section matching PDF screenshot 1 */}
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-10 text-center">
        <h1
          style={{
            fontFamily: 'London, sans-serif',
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 400,
            lineHeight: 'clamp(32px, 4vw, 40px)',
            color: '#333333',
          }}
          className="uppercase tracking-normal mb-3"
        >
          MASSAGE THERAPY &amp; AYURVEDIC CLINIC
        </h1>

        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: '#666666',
          }}
          className="max-w-2xl mx-auto mb-6"
        >
          Specialized authentic Ayurvedic therapies and registered massage treatments for rejuvenation, relaxation, and balance in Cornerstone NE, Calgary.
        </p>
      </div>

      {/* Grid of 12 treatment cards matching PDF screenshot 1 */}
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const img = imageMap[service.imageKey] || IMAGES.cardMassageTherapy;
            const minPrice = service.durations[0].price;

            return (
              <div
                key={service.id}
                onClick={() => {
                  setSelectedServiceId(service.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80"
              >
                {/* Image Container with overlay matching PDF screenshot 1 */}
                <img
                  src={img}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Title & Price text inside lower part of image matching reference screenshot 1 */}
                <div className="absolute bottom-5 left-4 right-4 text-center">
                  <h3
                    style={{
                      fontFamily: 'London, sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: '#ffffff',
                    }}
                    className="uppercase tracking-wide drop-shadow-sm mb-1.5"
                  >
                    {service.name}
                  </h3>
                  <span
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                    className="text-xs font-semibold text-stone-200 tracking-wider block font-mono"
                  >
                    ${minPrice} CAD {service.durations.length > 1 ? `· ${service.durations.map(d => d.duration.replace(' minutes', 'm')).join('/')}` : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Consultation Box matching reference PDF screenshot 1 */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mt-16">
        <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-2xl p-8 sm:p-10 text-center shadow-xs">
          <h3
            style={{
              fontFamily: 'London, sans-serif',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '28px',
              color: '#333',
            }}
            className="uppercase tracking-normal mb-2"
          >
            NOT SURE WHICH TREATMENT IS RIGHT FOR YOU?
          </h3>

          <p
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '22px',
              color: '#666',
            }}
            className="max-w-lg mx-auto mb-6"
          >
            Request personalized treatment guidance with Dr. Hargeet Kaur (B.A.M.S. ; R.H. ; R.M.T.) at Rise to Wellness in Cornerstone NE, Calgary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-ref-brown px-7 py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              REQUEST CONSULTATION / ENQUIRY
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="btn-ref-outline px-6 py-3 text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#9c6a46]" />
              <span>Call (825) 733-6007</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
