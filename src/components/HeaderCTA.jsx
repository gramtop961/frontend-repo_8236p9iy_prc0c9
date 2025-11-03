import React from 'react';

export default function HeaderCTA() {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-2 text-sm">
          <p className="text-slate-700 text-center sm:text-left font-medium">
            Free Mouth Spray with Whitening Strips – Limited Time Only 🕓
          </p>
          <a
            href="#offer"
            className="inline-flex items-center justify-center rounded-full bg-[#ADE2E4] px-4 py-2 text-slate-900 font-semibold shadow-sm hover:bg-[#9cd8da] transition-colors"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
}
