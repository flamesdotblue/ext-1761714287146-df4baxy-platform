import React from 'react';

const CallToAction = () => {
  return (
    <section id="get-involved" className="relative isolate overflow-hidden bg-neutral-900 py-16">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rotate-12 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 -translate-y-1/2 -rotate-12 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Partner with us</h2>
            <p className="mt-3 max-w-2xl text-neutral-200">Whether you're a donor, university, or employer — together we can open doors and build equitable pathways to success.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-yellow-300">Donate</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Become a partner</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
