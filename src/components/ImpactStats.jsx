import React from 'react';

const stats = [
  { label: 'Students Supported', value: '12,000+' },
  { label: 'Scholarship Funds', value: '$8.5M' },
  { label: 'Partner Universities', value: '65+' },
  { label: 'Mentor Network', value: '1,200+' },
];

const ImpactStats = () => {
  return (
    <section id="impact" className="relative bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Impact</h2>
          <div className="h-1 w-24 rounded bg-yellow-400" aria-hidden="true" />
        </div>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-sm">
              <dt className="text-sm text-neutral-300">{s.label}</dt>
              <dd className="mt-2 text-2xl font-extrabold text-yellow-400 sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ImpactStats;
