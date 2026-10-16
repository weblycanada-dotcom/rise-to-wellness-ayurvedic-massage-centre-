import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Phone, Clock, DollarSign, Calendar, Sparkles } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO, SERVICES } from '../data/wellnessData';
import { IMAGES } from '../assets/images';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onOpenBooking: () => void;
  onSelectServiceForBooking?: (serviceId: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onOpenBooking,
  onSelectServiceForBooking
}) => {
  const [selectedDurationIdx, setSelectedDurationIdx] = useState(0);

  // Resolve service image safely
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

  const currentImage = imageMap[service.imageKey] || IMAGES.cardMassageTherapy;
  const currentDuration = service.durations[selectedDurationIdx] || service.durations[0];

  const handleBookNow = () => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.id);
    } else {
      onOpenBooking();
    }
  };

  return (
    <div className="w-full bg-white pb-24">
      {/* Top Breadcrumb & Back Bar matching reference PDF screenshot 2 */}
      <div className="border-b border-stone-200 bg-[#FAF9F6] py-3.5 px-6 sm:px-8">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-stone-600 hover:text-[#222f27] font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </button>

          <div className="text-stone-400 font-light hidden sm:block">
            <button
              onClick={onBack}
              className="hover:text-stone-700 transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="mx-2">/</span>
            <span className="text-stone-800 font-medium">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Main Service Content */}
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-10">
        
        {/* Title in London font */}
        <div className="mb-8">
          <h1
            style={{
              fontFamily: 'London, sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 400,
              lineHeight: 'clamp(36px, 4.5vw, 52px)',
              color: '#333333',
            }}
            className="uppercase tracking-normal"
          >
            {service.name}
          </h1>
        </div>

        {/* 4-Column Metadata Strip matching reference PDF screenshot 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#FAF9F6] border border-stone-200/90 rounded-2xl mb-12 shadow-xs">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              FEE / RATE (CAD)
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-[#222f27]">
              ${service.durations[0].price} {service.durations.length > 1 ? `– $${service.durations[service.durations.length - 1].price}` : ''}
            </span>
            <span className="text-[11px] text-stone-500 block">+ applicable tax</span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              SESSION LENGTH
            </span>
            <span className="text-sm sm:text-base font-semibold text-stone-800">
              {service.durations.map(d => d.duration.replace(' minutes', 'm')).join(' / ')}
            </span>
            <span className="text-[11px] text-stone-500 block">Personalized pacing</span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              COMPLIMENTARY
            </span>
            <span className="text-sm sm:text-base font-semibold text-emerald-800">
              10-Min Steam Sauna
            </span>
            <span className="text-[11px] text-stone-500 block">+ Free hot towel care</span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              CLIENTELE POLICY
            </span>
            <span className="text-sm sm:text-base font-bold text-[#6b4b1b]">
              Ladies &amp; Kids Only
            </span>
            <span className="text-[11px] text-stone-500 block">No men massage</span>
          </div>
        </div>

        {/* 2-Column Split: Details on Left (7 cols), Sticky Booking on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* 1. About This Treatment */}
            <section className="space-y-4">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '28px',
                  color: '#333',
                }}
                className="uppercase tracking-normal pb-2 border-b border-stone-200"
              >
                ABOUT THIS TREATMENT
              </h2>

              <div
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  color: '#333',
                }}
                className="space-y-4"
              >
                {service.longDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 2. Key Benefits & Results matching reference PDF screenshot 2 */}
            <section className="space-y-4">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '28px',
                  color: '#333',
                }}
                className="uppercase tracking-normal pb-2 border-b border-stone-200"
              >
                KEY BENEFITS &amp; RESULTS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF9F6] border border-stone-200 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9c6a46] shrink-0 mt-0.5" />
                    <span
                      style={{ fontFamily: '"Open Sans", sans-serif' }}
                      className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug"
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Recommended For matching reference PDF screenshot 2 */}
            <section className="space-y-4">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '28px',
                  color: '#333',
                }}
                className="uppercase tracking-normal pb-2 border-b border-stone-200"
              >
                RECOMMENDED FOR
              </h2>

              <p
                style={{ fontFamily: '"Open Sans", sans-serif' }}
                className="text-sm text-stone-600 mb-2"
              >
                This treatment is especially beneficial if you are experiencing:
              </p>

              <div className="flex flex-wrap gap-2">
                {service.recommendedFor.map((item, idx) => (
                  <span
                    key={idx}
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                    className="px-3.5 py-1.5 bg-stone-100 border border-stone-200/90 rounded-full text-xs font-semibold text-stone-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* 4. Step-by-Step Clinical Protocol matching reference PDF screenshot 2 */}
            <section className="space-y-4">
              <h2
                style={{
                  fontFamily: 'London, sans-serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '28px',
                  color: '#333',
                }}
                className="uppercase tracking-normal pb-2 border-b border-stone-200"
              >
                STEP-BY-STEP TREATMENT PROTOCOL
              </h2>

              <p
                style={{ fontFamily: '"Open Sans", sans-serif' }}
                className="text-sm text-stone-600 mb-2"
              >
                What to expect during your appointment at Rise to Wellness:
              </p>

              <div className="space-y-3">
                {service.protocol.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 bg-white border border-stone-200 rounded-xl flex items-start gap-4 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#222f27] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div>
                      <h4
                        style={{ fontFamily: '"Open Sans", sans-serif' }}
                        className="text-sm font-bold text-stone-900 mb-1"
                      >
                        {step.title}
                      </h4>
                      <p
                        style={{ fontFamily: '"Open Sans", sans-serif' }}
                        className="text-xs text-stone-600 leading-relaxed font-light"
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Clinical Rigor & Safety / Direct Billing Box matching reference PDF */}
            <div className="p-6 bg-[#FAF7F0] border border-[#e6d7b8] rounded-2xl flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#9c6a46] shrink-0 mt-1" />
              <div style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-xs leading-relaxed text-stone-800 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[#9c6a46] block text-xs">
                  PROFESSIONAL PRACTICE &amp; DIRECT BILLING
                </span>
                <p>
                  Every session at Rise to Wellness is provided by Dr. Hargeet Kaur ({BUSINESS_INFO.credentials}) in a private, respectful environment strictly for ladies and children.
                </p>
                <p className="text-stone-600 pt-1">
                  Direct billing options available with TELUS Health, Sun Life, Medavie, and Alberta Blue Cross. Official receipts provided for extended insurance reimbursement.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Card (5 cols) matching reference PDF screenshot 2 */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="border border-stone-200/90 rounded-2xl p-6 bg-white shadow-lg space-y-5">
              
              {/* Image with Special Rate Badge */}
              <div className="relative rounded-xl overflow-hidden h-64 bg-stone-100">
                <img
                  src={currentImage}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#9c6a46] text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md">
                  SPECIAL RATE: ${currentDuration.price} CAD
                </div>
              </div>

              {/* Title & booking text */}
              <div>
                <h3
                  style={{
                    fontFamily: 'London, sans-serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    lineHeight: '26px',
                    color: '#333',
                  }}
                  className="uppercase"
                >
                  BOOK YOUR SESSION
                </h3>
                <p
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                  className="text-xs text-stone-600 mt-1"
                >
                  Schedule online or speak directly with Dr. Hargeet Kaur in Cornerstone NE, Calgary.
                </p>
              </div>

              {/* Duration selector */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-stone-700 block mb-2">
                  Select Session Duration:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {service.durations.map((d, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedDurationIdx(index)}
                      className={`p-2.5 text-left border rounded-xl cursor-pointer transition-colors ${
                        selectedDurationIdx === index
                          ? 'border-[#222f27] bg-[#222f27]/5 font-bold text-[#222f27]'
                          : 'border-stone-200 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      <div className="text-xs">{d.duration}</div>
                      <div className="text-sm font-bold text-[#222f27] font-mono">
                        ${d.price} CAD <span className="text-[10px] font-normal text-stone-500">+ tax</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleBookNow}
                  className="btn-ref-brown w-full py-3.5 cursor-pointer shadow-md text-xs uppercase tracking-wider"
                >
                  BOOK THIS TREATMENT
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="btn-ref-outline w-full py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9c6a46]" />
                  <span>CALL CLINIC (825) 733-6007</span>
                </a>
              </div>

              {/* Details & policy */}
              <div
                style={{ fontFamily: '"Open Sans", sans-serif' }}
                className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1.5"
              >
                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Free 10-Min Steam Sauna + Hot Towels Included</span>
                </div>
                <p>• Direct billing available for major Canadian insurance carriers.</p>
                <p>• Strictly for ladies and children. Location: Cornerstone NE, Calgary.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
