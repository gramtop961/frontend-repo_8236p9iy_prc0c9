import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd1cd11fe4b?q=80&w=1600&auto=format&fit=crop"
              alt="Bright smile holding whitening strips"
              className="w-full h-[320px] sm:h-[440px] object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur px-3 py-2 rounded-xl shadow ring-1 ring-slate-100 text-xs text-slate-700">
              Fresh. Clean. Confident.
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Your Smile Deserves More
            </h1>
            <p className="text-lg text-slate-600">
              Get a free mouth spray with every Whitening Strips purchase.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#offer"
                className="inline-flex items-center justify-center rounded-full bg-[#ADE2E4] px-6 py-3 text-slate-900 font-bold shadow-sm hover:bg-[#9cd8da] transition-colors"
              >
                Get Your Free Mouth Spray Now
              </a>
            </div>
            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-100 p-3 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop"
                  alt="Whitening strips flat lay"
                  className="w-full h-28 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm text-slate-600">Whitening Strips</p>
              </div>
              <div className="rounded-xl border border-slate-100 p-3 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1545231027-637d2f6210f4?q=80&w=1200&auto=format&fit=crop"
                  alt="Mouth spray product"
                  className="w-full h-28 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm text-slate-600">Free Mouth Spray</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
