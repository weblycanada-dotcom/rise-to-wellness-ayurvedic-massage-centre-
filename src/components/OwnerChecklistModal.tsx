import React from 'react';
import { X, CheckCircle, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { OWNER_CHECKLIST_ITEMS, BUSINESS_INFO } from '../data/wellnessData';

interface OwnerChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerChecklistModal: React.FC<OwnerChecklistModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#18231C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#E7C794] font-medium uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Owner Pre-Launch Briefing</span>
            </div>
            <h2 className="font-heading text-xl font-bold tracking-wide">
              12 Items to Confirm Before Publication
            </h2>
            <p className="text-xs text-stone-300">
              {BUSINESS_INFO.name} · Cornerstone NE, Calgary
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational intro banner */}
        <div className="bg-[#FAF7F0] border-b border-[#EAE3D2] px-6 py-3 text-xs text-stone-700 leading-relaxed">
          <p>
            <strong>Note for Dr. Hargeet Kaur & Management:</strong> The website is fully constructed with all verified prices, services, and policies. Below is the checklist of operational details to confirm before linking a live domain or printing signage.
          </p>
        </div>

        {/* Scrollable list of 12 items */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {OWNER_CHECKLIST_ITEMS.map((item) => (
            <div
              key={item.id}
              className="border border-stone-200 bg-stone-50/50 p-4 transition-colors hover:border-stone-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#18231C] text-[#E7C794] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-xs text-stone-600">
                      <span className="font-medium text-stone-800">Implemented As: </span>
                      <span className="text-stone-700 italic">{item.currentStatus}</span>
                    </div>
                    <div className="mt-2 text-xs bg-amber-50/80 border border-amber-200/60 p-2 text-amber-900 rounded-none">
                      <span className="font-semibold">Action to confirm: </span>
                      {item.actionNeeded}
                    </div>
                  </div>
                </div>

                <span className="shrink-0 text-[11px] px-2 py-0.5 bg-stone-200 text-stone-800 font-medium">
                  Flagged
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-stone-100 border-t border-stone-200 px-6 py-3.5 flex items-center justify-between">
          <div className="text-xs text-stone-600">
            Main phone contact active: <strong>(825) 733-6007</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#18231C] hover:bg-[#2C4234] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
