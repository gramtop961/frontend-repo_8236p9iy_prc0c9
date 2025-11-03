import React from 'react';

export default function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* CTA + Urgency */}
        <div className="text-center rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm bg-gradient-to-b from-white to-[#F9FAFA]">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Don’t wait — offer ends soon!</h3>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#offer"
              className="inline-flex items-center justify-center rounded-full bg-[#ADE2E4] px-6 py-3 text-slate-900 font-bold shadow-sm hover:bg-[#9cd8da] transition-colors"
            >
              Add to Cart & Get Free Spray
            </a>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F6F7] text-slate-800 font-bold">⏰</span>
              <span>Limited time bonus</span>
            </div>
          </div>
        </div>

        {/* Closing / Signature */}
        <div className="mt-12 text-center">
          <p className="text-slate-700">Here’s to your confident smile,</p>
          <p className="text-slate-700 font-medium">The HolySmile Team</p>

          <div className="mt-6 inline-flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#F0F4F4] flex items-center justify-center text-slate-600 font-extrabold">HS</div>
            <span className="text-slate-500">HolySmile</span>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-slate-600">Instagram</a>
            <a href="#" className="hover:text-slate-600">TikTok</a>
            <a href="#" className="hover:text-slate-600">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
