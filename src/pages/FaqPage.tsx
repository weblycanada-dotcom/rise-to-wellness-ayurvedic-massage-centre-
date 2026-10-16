import React, { useState } from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { Phone, Search } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/wellnessData';

interface FaqPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    '0': true,
    '1': true
  });

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'general', label: 'General & Policies' },
    { key: 'massage', label: 'Massage Therapy' },
    { key: 'ayurvedic', label: 'Ayurvedic Therapies' },
    { key: 'insurance', label: 'Insurance & Billing' },
    { key: 'complimentary', label: 'Complimentary Care' }
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full">
      <HeaderBanner
        title="Frequently Asked Questions"
        currentPage="Frequently Asked Questions"
        onNavigate={onNavigate}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: 'London, sans-serif',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '32px',
                color: '#333',
              }}
              className="uppercase tracking-normal mb-3"
            >
              ANSWERS &amp; CLIENT GUIDELINES
            </h2>

            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#333',
              }}
              className="max-w-xl mx-auto"
            >
              Clear information about our ladies-and-kids policy, services, booking procedures, and direct billing options.
            </p>
          </div>

          {/* Search bar & filter controls */}
          <div className="mb-10 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions (e.g. direct billing, steam sauna, shirodhara)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontFamily: '"Open Sans", sans-serif' }}
                className="w-full pl-10 pr-4 py-3 text-sm border border-stone-300 rounded-full bg-stone-50/50 focus:bg-white focus:outline-hidden focus:border-[#222f27]"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCategory(c.key)}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                    activeCategory === c.key
                      ? 'bg-[#222f27] text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List matching reference screenshot 4 */}
          <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = !!openItems[index];
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 hover:text-[#9c6a46] transition-colors cursor-pointer group"
                    >
                      <span
                        style={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '16px',
                          fontWeight: 600,
                          lineHeight: '24px',
                          color: '#333',
                        }}
                        className="group-hover:text-[#9c6a46]"
                      >
                        {faq.question}
                      </span>
                      <span className="text-stone-400 font-mono text-xl shrink-0 group-hover:text-[#9c6a46]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '15px',
                          fontWeight: 400,
                          lineHeight: '24px',
                          color: '#555',
                        }}
                        className="mt-3 leading-relaxed pr-8 animate-in fade-in duration-150"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-sm text-stone-500">
                No matching questions found. Call Dr. Hargeet Kaur directly at (825) 733-6007.
              </div>
            )}
          </div>
        </div>

        </div>
      </section>
    </div>
  );
};
