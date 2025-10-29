import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-24" aria-label="Hero">
      {/* Spline full-width background cover (no negative z-index) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g47qp9qcUcqjW1-A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-neutral-950/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:py-36 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-900">Non-profit</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Democratising access to education and opportunities
          </h1>
          <p className="mt-6 max-w-2xl text-base text-neutral-100/90 sm:text-lg">
            We create pathways to higher education and meaningful careers for underserved learners through scholarships, mentorship, and industry partnerships.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-involved" className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-yellow-300">
              Get involved
            </a>
            <a href="#programs" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Explore programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
