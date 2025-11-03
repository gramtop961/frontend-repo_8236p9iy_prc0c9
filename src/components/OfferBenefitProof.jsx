import React from 'react';

export default function OfferBenefitProof() {
  return (
    <section id="offer" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        {/* Offer & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#E6F6F7] flex items-center justify-center text-slate-800 font-bold">WS</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Whitening Strips</h3>
                <p className="text-slate-600">Brighter teeth, naturally.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#E6F6F7] flex items-center justify-center text-slate-800 font-bold">MS</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Free Mouth Spray</h3>
                <p className="text-slate-600">Fresh breath, lasting confidence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 max-w-3xl">
          <p className="text-slate-700 leading-relaxed">
            Our Whitening Strips use 100% natural activated coconut charcoal — no peroxide, no surprises. And now, your cart gets an extra boost: the mouth spray that freshens and protects your smile.
          </p>
        </div>

        {/* Proof / Credibility */}
        <div className="mt-12 rounded-2xl bg-[#FAFAFA] p-6 sm:p-8 border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ADE2E4] text-slate-900 font-bold">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Safe, pain-free, and ultra-effective.</p>
                <p className="text-sm text-slate-600">Gentle on enamel with every use.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ADE2E4] text-slate-900 font-bold">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Cruelty-free and packed with premium minerals.</p>
                <p className="text-sm text-slate-600">Formulas you can feel good about.</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">Formulated and loved by HolySmile customers.</p>
        </div>
      </div>
    </section>
  );
}
