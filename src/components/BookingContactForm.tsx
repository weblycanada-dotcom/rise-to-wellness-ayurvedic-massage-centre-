import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Mail,
  Copy,
  Sparkles,
  Send,
  Check
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/wellnessData';

// Flat list of services with timing & price embedded directly in each option label
export const SERVICE_OPTIONS = SERVICES.flatMap(s =>
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

interface BookingContactFormProps {
  initialServiceId?: string;
  title?: string;
  subtitle?: string;
}

export const BookingContactForm: React.FC<BookingContactFormProps> = ({
  initialServiceId,
  title = "BOOK YOUR TREATMENT",
  subtitle = "Exclusively for ladies and children. Fill out this quick form and all booking details will be sent to your email."
}) => {
  const findInitialKey = (id?: string) => {
    if (!id) return SERVICE_OPTIONS[0].key;
    const match = SERVICE_OPTIONS.find(o => o.serviceId === id);
    return match ? match.key : SERVICE_OPTIONS[0].key;
  };

  const [selectedKey, setSelectedKey] = useState<string>(findInitialKey(initialServiceId));
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeWindow, setTimeWindow] = useState('Morning (9am - 12pm)');
  const [notes, setNotes] = useState('');

  // Submission state
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [validationError, setValidationError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedKey(findInitialKey(initialServiceId));
    }
  }, [initialServiceId]);

  const selectedOption = SERVICE_OPTIONS.find(o => o.key === selectedKey) || SERVICE_OPTIONS[0];

  const generateEmailSubject = () => {
    return encodeURIComponent(
      `Appointment Booking: ${selectedOption.serviceName} - ${name} [Ref: ${refCode || 'RTW'}]`
    );
  };

  const generateEmailBody = () => {
    return encodeURIComponent(
      `RISE TO WELLNESS AYURVEDIC MASSAGE CENTRE - BOOKING CONFIRMATION
================================================================
Reference Code: ${refCode || 'RTW-' + Math.floor(100000 + Math.random() * 900000)}

CLIENT DETAILS:
- Name: ${name}
- Phone / WhatsApp: ${phone}
- Email: ${email}

BOOKED SERVICE & TIMING:
- Service: ${selectedOption.serviceName}
- Duration: ${selectedOption.duration}
- Listed Rate: $${selectedOption.price} CAD (+ tax)
- Preferred Date: ${date || 'Earliest Available'}
- Preferred Time Window: ${timeWindow}
- Included Complimentary: 10-Min Steam Sauna + Hot Towels

NOTES / DIRECT BILLING:
${notes || 'None specified'}

CENTRE LOCATION & CONTACT:
- Rise to Wellness Ayurvedic Massage Centre
- Location: Cornerstone NE, Calgary, Alberta
- Practitioner: Dr. Hargeet Kaur (B.A.M.S. ; R.H. ; R.M.T.)
- Phone: (825) 733-6007
- Policy: Exclusively for Ladies & Children
================================================================`
    );
  };

  const getMailtoUrl = () => {
    const to = encodeURIComponent('dr.hargeet@risetowellness.ca');
    const cc = email ? `&cc=${encodeURIComponent(email)}` : '';
    return `mailto:${to}?subject=${generateEmailSubject()}&body=${generateEmailBody()}${cc}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setValidationError('Please provide a valid 10-digit phone number for appointment confirmation.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setValidationError('Please provide a valid email so we can send your appointment details.');
      return;
    }

    setValidationError('');
    const code = 'RTW-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setSubmitted(true);

    try {
      const existing = JSON.parse(localStorage.getItem('rtw_bookings') || '[]');
      existing.unshift({
        refCode: code,
        name,
        phone,
        email,
        service: selectedOption.serviceName,
        duration: selectedOption.duration,
        price: selectedOption.price,
        date: date || 'Earliest Available',
        timeWindow,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('rtw_bookings', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // storage fallback
    }
  };

  const handleCopySummary = () => {
    const text = decodeURIComponent(generateEmailBody());
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#EDF6EF] border-2 border-[#BCD7C1] p-6 sm:p-8 rounded-3xl shadow-sm">
      {submitted ? (
        /* SUBMISSION CONFIRMATION */
        <div className="space-y-5">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#135E26] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3
              style={{ fontFamily: 'London, sans-serif' }}
              className="text-2xl font-normal uppercase text-[#1E3B2E]"
            >
              BOOKING ENQUIRY SENT!
            </h3>
            <p className="text-xs text-stone-600">
              Reference Code: <strong className="font-mono text-sm bg-white px-2.5 py-1 rounded-md border border-stone-300 text-stone-900">{refCode}</strong>
            </p>
          </div>

          {/* Email confirmation card */}
          <div className="p-4 bg-white/90 border border-[#BCD7C1] rounded-2xl flex items-start gap-3 text-xs text-stone-800 shadow-2xs">
            <Mail className="w-5 h-5 text-[#135E26] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#135E26] text-sm font-bold">
                Confirmation Details Sent to Your Email
              </strong>
              <p className="mt-0.5 text-stone-600">
                A copy of this appointment request has been prepared for <strong className="text-stone-900">{email}</strong> and Dr. Hargeet Kaur.
              </p>
            </div>
          </div>

          {/* Selected service receipt */}
          <div className="bg-white rounded-2xl p-4 border border-[#BCD7C1] text-xs space-y-2 shadow-2xs">
            <div className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Selected Treatment:</span>
              <strong className="text-[#135E26] text-sm">{selectedOption.serviceName}</strong>
            </div>
            <div className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Duration &amp; Price:</span>
              <strong className="font-mono text-[#8D5A37] text-sm">
                {selectedOption.duration} — ${selectedOption.price} CAD <span className="text-[10px] text-stone-500 font-normal">+ tax</span>
              </strong>
            </div>
            <div className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Client Name:</span>
              <span className="font-semibold text-stone-800">{name} ({phone})</span>
            </div>
            <div className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Preferred Time:</span>
              <span className="font-medium text-stone-800">{date || 'Earliest Available'} · {timeWindow}</span>
            </div>
            <div className="flex justify-between text-emerald-800 pt-1 font-semibold">
              <span>Complimentary Inclusion:</span>
              <span>10-Min Steam Sauna &amp; Hot Towels</span>
            </div>
          </div>

          <p className="text-xs text-stone-600 bg-amber-50/80 border border-amber-200/80 p-3 rounded-xl">
            <strong>Next step:</strong> Dr. Hargeet Kaur will review and call you directly at <strong>{phone}</strong> to confirm your slot.
          </p>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={getMailtoUrl()}
                className="py-3 px-4 rounded-xl bg-[#135E26] hover:bg-[#0f4d1f] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="py-3 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
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
              onClick={() => {
                setSubmitted(false);
                setName('');
                setPhone('');
                setEmail('');
                setNotes('');
              }}
              className="w-full text-center text-xs text-stone-500 hover:text-stone-800 underline py-1 cursor-pointer"
            >
              Book Another Treatment
            </button>
          </div>
        </div>
      ) : (
        /* STREAMLINED FORM - JUST DROPDOWN WITH TIMING & PRICE */
        <form onSubmit={handleSubmit} className="space-y-4">
          {title && (
            <div className="mb-2">
              <h2
                style={{ fontFamily: 'London, sans-serif' }}
                className="text-xl sm:text-2xl font-normal text-[#1E3B2E] uppercase"
              >
                {title}
              </h2>
              {subtitle && (
                <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {validationError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* 1. SINGLE CLEAN DROPDOWN WITH SERVICE NAME, TIMING & PRICE */}
          <div>
            <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1.5">
              Select Service &amp; Timing *
            </label>
            
            <select
              value={selectedKey}
              onChange={(e) => setSelectedKey(e.target.value)}
              className="w-full px-4 py-3 text-sm border-2 border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26] focus:ring-1 focus:ring-[#135E26] font-medium text-stone-900 shadow-2xs"
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

            <p className="text-[11px] text-emerald-800 mt-1.5 flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Includes complimentary 10-minute steam sauna &amp; hot towels.</span>
            </p>
          </div>

          {/* 2. CUSTOMER NAME & PHONE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jasleen Kaur"
                className="w-full px-3.5 py-2.5 text-sm border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26] focus:ring-1 focus:ring-[#135E26]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. (825) 733-6007"
                className="w-full px-3.5 py-2.5 text-sm border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26] focus:ring-1 focus:ring-[#135E26]"
              />
            </div>
          </div>

          {/* 3. EMAIL */}
          <div>
            <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
              Your Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. jasleen@example.com"
              className="w-full px-3.5 py-2.5 text-sm border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26] focus:ring-1 focus:ring-[#135E26]"
            />
            <span className="text-[11px] text-stone-600 mt-1 block">
              * All booking details &amp; confirmation will be sent to your email.
            </span>
          </div>

          {/* 4. DATE & TIME PREFERENCE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
                Preferred Time Window
              </label>
              <select
                value={timeWindow}
                onChange={(e) => setTimeWindow(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
              >
                <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
                <option value="First Available Slot">First Available Slot</option>
              </select>
            </div>
          </div>

          {/* 5. NOTES OR DIRECT BILLING INFO (OPTIONAL) */}
          <div>
            <label className="block text-xs font-bold text-[#1E3B2E] uppercase tracking-wider mb-1">
              Special Notes or Direct Billing (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Lower back stiffness, or Sun Life direct billing..."
              className="w-full px-3.5 py-2 text-sm border border-[#BCD7C1] rounded-xl bg-white focus:outline-hidden focus:border-[#135E26]"
            />
          </div>

          {/* 6. SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#135E26] hover:bg-[#0f4d1f] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>CONFIRM &amp; SEND TO EMAIL →</span>
            </button>
            <p className="text-[11px] text-stone-500 text-center mt-2">
              Need immediate booking? Call Dr. Hargeet Kaur at <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-semibold text-stone-900 underline">(825) 733-6007</a>.
            </p>
          </div>

        </form>
      )}
    </div>
  );
};
