import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  CheckCircle2,
  ShieldAlert,
  AlertCircle,
  Mail,
  Copy,
  Sparkles,
  Send,
  Check
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/wellnessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

// Flat list of services with timing & price embedded directly in each option label
const SERVICE_OPTIONS = SERVICES.flatMap(s =>
  s.durations.map((d, idx) => ({
    key: `${s.id}__${idx}`,
    serviceId: s.id,
    serviceName: s.name,
    durationIdx: idx,
    duration: d.duration,
    price: d.price,
    category: s.category,
    label: `${s.name} — ${d.duration} ($${d.price} CAD)`
  }))
);

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId
}) => {
  const findInitialKey = (id?: string) => {
    if (!id) return SERVICE_OPTIONS[0].key;
    const match = SERVICE_OPTIONS.find(o => o.serviceId === id);
    return match ? match.key : SERVICE_OPTIONS[0].key;
  };

  const [selectedKey, setSelectedKey] = useState<string>(findInitialKey(preSelectedServiceId));
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9am - 12pm)');
  const [clientNotes, setClientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedKey(findInitialKey(preSelectedServiceId));
    }
  }, [preSelectedServiceId]);

  if (!isOpen) return null;

  const selectedOption = SERVICE_OPTIONS.find(o => o.key === selectedKey) || SERVICE_OPTIONS[0];

  const generateEmailSubject = () => {
    return encodeURIComponent(
      `Appointment Request: ${selectedOption.serviceName} - ${clientName} [Ref: ${referenceCode || 'RTW'}]`
    );
  };

  const generateEmailBody = () => {
    return encodeURIComponent(
      `RISE TO WELLNESS AYURVEDIC MASSAGE CENTRE - BOOKING REQUEST
=============================================================
Reference Code: ${referenceCode || 'RTW-' + Math.floor(100000 + Math.random() * 900000)}

CLIENT DETAILS:
- Name: ${clientName}
- Phone / WhatsApp: ${clientPhone}
- Email: ${clientEmail}

SELECTED SERVICE & TIMING:
- Service: ${selectedOption.serviceName}
- Length & Rate: ${selectedOption.duration} — $${selectedOption.price} CAD (+ tax)
- Preferred Date: ${preferredDate || 'Earliest Available'}
- Preferred Time Window: ${preferredTime}
- Included: 10-Min Steam Sauna + Hot Towels

NOTES / DIRECT BILLING:
${clientNotes || 'None specified'}

CENTRE:
- Rise to Wellness Ayurvedic Massage Centre
- Location: Cornerstone NE, Calgary, AB
- Phone: (825) 733-6007
- Policy: Ladies & Children Only
=============================================================`
    );
  };

  const getMailtoUrl = () => {
    const to = encodeURIComponent('dr.hargeet@risetowellness.ca');
    const cc = clientEmail ? `&cc=${encodeURIComponent(clientEmail)}` : '';
    return `mailto:${to}?subject=${generateEmailSubject()}&body=${generateEmailBody()}${cc}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number for appointment confirmation.');
      return;
    }
    if (!clientEmail.trim() || !clientEmail.includes('@') || !clientEmail.includes('.')) {
      setErrorMessage('Please provide a valid email address so we can send your confirmation.');
      return;
    }

    setErrorMessage('');
    const randomCode = 'RTW-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(randomCode);
    setIsSubmitted(true);

    try {
      const existing = JSON.parse(localStorage.getItem('rtw_bookings') || '[]');
      existing.unshift({
        refCode: randomCode,
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        service: selectedOption.serviceName,
        duration: selectedOption.duration,
        price: selectedOption.price,
        date: preferredDate || 'Earliest Available',
        timeWindow: preferredTime,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('rtw_bookings', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // Storage unavailable fallback
    }
  };

  const handleCopySummary = () => {
    const text = decodeURIComponent(generateEmailBody());
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setClientName('');
    setClientPhone('');
    setClientEmail('');
    setClientNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="bg-[#1E3B2E] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h2
              style={{ fontFamily: 'London, sans-serif' }}
              className="text-xl sm:text-2xl font-normal tracking-wide uppercase"
            >
              BOOK YOUR APPOINTMENT
            </h2>
            <p className="text-xs text-[#A5D6A7] mt-0.5">
              Dr. Hargeet Kaur · (825) 733-6007 · Cornerstone NE, Calgary
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="bg-[#FAF3E0] border-b border-[#e6d7b8] px-6 py-2 flex items-center gap-2 text-xs text-[#6b4b1b]">
          <ShieldAlert className="w-4 h-4 text-[#c27d00] shrink-0" />
          <span>Ladies &amp; children only · In-person at our Cornerstone NE centre</span>
        </div>

        {/* Body Content with Soft Light Green Accent */}
        <div className="p-5 sm:p-6 bg-[#EDF6EF] max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#135E26] mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3
                  style={{ fontFamily: 'London, sans-serif' }}
                  className="text-2xl font-normal uppercase text-[#1E3B2E]"
                >
                  ENQUIRY RECEIVED!
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Reference: <strong className="font-mono text-sm bg-white px-2 py-0.5 rounded border border-stone-300 text-stone-900">{referenceCode}</strong>
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-[#BCD7C1] text-xs text-left space-y-2 shadow-2xs">
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-500">Service:</span>
                  <strong className="text-[#135E26]">{selectedOption.serviceName}</strong>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-500">Duration &amp; Price:</span>
                  <strong className="text-[#8D5A37] font-mono">{selectedOption.duration} — ${selectedOption.price} CAD + tax</strong>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-500">Guest:</span>
                  <span className="font-semibold text-stone-800">{clientName} ({clientPhone})</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-500">Confirmation Sent To:</span>
                  <span className="font-semibold text-stone-800">{clientEmail}</span>
                </div>
                <div className="flex justify-between text-emerald-800 pt-0.5 font-semibold">
                  <span>Included:</span>
                  <span>10-Min Steam Sauna + Hot Towels</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={getMailtoUrl()}
                    className="py-2.5 px-3 rounded-xl bg-[#135E26] hover:bg-[#0f4d1f] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-stone-600" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full text-xs text-stone-500 hover:text-stone-800 underline py-1 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Single clean dropdown with service name, timing & price */}
              <div>
                <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                  Select Service &amp; Timing *
                </label>
                <select
                  value={selectedKey}
                  onChange={(e) => setSelectedKey(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border-2 border-[#BCD7C1] rounded-xl bg-white font-medium text-stone-900 focus:outline-hidden focus:border-[#135E26]"
                >
                  <optgroup label="Massage Therapy">
                    {SERVICE_OPTIONS.filter(o => o.category === 'massage').map(o => (
                      <option key={o.key} value={o.key}>
                        {o.label}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Traditional Ayurvedic Therapies">
                    {SERVICE_OPTIONS.filter(o => o.category === 'ayurvedic').map(o => (
                      <option key={o.key} value={o.key}>
                        {o.label}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <p className="text-[11px] text-emerald-800 mt-1 flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Includes complimentary 10-minute steam sauna &amp; hot towels.</span>
                </p>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jasleen Kaur"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (825) 733-6007"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jasleen@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
                />
                <span className="text-[10px] text-stone-500 mt-0.5 block">
                  * All booking details &amp; confirmation will be sent here.
                </span>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
                  >
                    <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                    <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                    <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
                    <option value="First Available">First Available</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                  Special Notes or Direct Billing (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Areas of tension or insurance provider..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
                />
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#135E26] hover:bg-[#0f4d1f] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>CONFIRM &amp; SEND TO EMAIL →</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
