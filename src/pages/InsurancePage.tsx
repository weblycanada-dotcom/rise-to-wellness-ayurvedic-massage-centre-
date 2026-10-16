import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INSURANCE_NETWORKS, BUSINESS_INFO } from '../data/wellnessData';

interface InsurancePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const InsurancePage: React.FC<InsurancePageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="w-full">
      <HeaderBanner
        title="Insurance &amp; Direct Billing"
        currentPage="Insurance &amp; Direct Billing"
        onNavigate={onNavigate}
      />

      {/* SECTION 1: INTRODUCTION & POLICIES */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: 'London, sans-serif',
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#333',
            }}
            className="uppercase tracking-normal mb-4"
          >
            INSURANCE &amp; DIRECT BILLING OPTIONS
          </h2>

          <p
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#333',
            }}
            className="mb-4"
          >
            Rise to Wellness Ayurvedic Massage Centre advertises direct billing and insurance options through selected providers. Coverage, eligible treatments, practitioner requirements, and direct-billing availability may vary depending on your individual plan.
          </p>

          <p
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              color: '#9c6a46',
            }}
            className="mb-8"
          >
            Contact us before your appointment to confirm your coverage and eligibility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="btn-ref-brown px-7 py-3 inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#f0c987]" />
              <span>CALL (825) 733-6007 TO CONFIRM</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="btn-ref-outline px-7 py-3 cursor-pointer"
            >
              BOOK YOUR MASSAGE
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: ORGANIZED NETWORKS & PROVIDER CARDS */}
      <section className="py-20 md:py-28 bg-[#f7f7f7] border-b border-stone-100">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center mb-14">
            <h3
              style={{
                fontFamily: 'London, sans-serif',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#333',
              }}
              className="uppercase tracking-normal mb-2"
            >
              ACCEPTED NETWORKS &amp; CARRIERS
            </h3>
            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#666',
              }}
            >
              The following networks and insurers represent the providers advertised through our centre:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSURANCE_NETWORKS.map((networkGroup) => (
              <div
                key={networkGroup.network}
                className="bg-white border border-stone-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
                    <h4
                      style={{
                        fontFamily: 'London, sans-serif',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '26px',
                        color: '#333',
                      }}
                      className="uppercase"
                    >
                      {networkGroup.network}
                    </h4>
                    <span className="text-[10px] bg-[#222f27] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Network
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: '#777',
                    }}
                    className="mb-4"
                  >
                    {networkGroup.description}
                  </p>

                  <div className="mt-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-stone-700 block mb-2">
                      Covered Plans / Member Carriers:
                    </span>
                    <ul
                      style={{ fontFamily: '"Open Sans", sans-serif' }}
                      className="space-y-1.5 text-xs text-stone-800"
                    >
                      {networkGroup.providers.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9c6a46] shrink-0" />
                          <span className="font-medium">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  Direct claims support upon policy card presentation.
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: PROMINENT DISCLAIMER BOX */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-stone-200/80 bg-[#FAF9F6] p-8 sm:p-12 rounded-2xl shadow-xs">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-[#9c6a46] shrink-0 mt-0.5" />
              <div>
                <h3
                  style={{
                    fontFamily: 'London, sans-serif',
                    fontSize: '26px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    color: '#333',
                  }}
                  className="uppercase mb-3"
                >
                  INSURANCE AND DIRECT BILLING DISCLAIMER
                </h3>

                <p
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#333',
                  }}
                  className="mb-4"
                >
                  {BUSINESS_INFO.insuranceDisclaimer}
                </p>

                <div
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                  className="space-y-2 text-xs text-stone-600 border-t border-stone-200 pt-4"
                >
                  <p>• Direct billing availability is subject to individual insurer online portal uptime and policy coverage.</p>
                  <p>• Any non-covered co-pay or deductible balance is due at the time of treatment.</p>
                  <p>• Official receipts with Dr. Hargeet Kaur&apos;s registration credentials ({BUSINESS_INFO.credentials}) are always issued for self-submission.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
