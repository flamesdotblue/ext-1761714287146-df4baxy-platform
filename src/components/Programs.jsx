import React from 'react';

const programs = [
  {
    title: 'Scholarships',
    desc: 'Financial aid for tuition, living expenses, and learning resources to remove economic barriers.',
  },
  {
    title: 'Mentorship',
    desc: 'One-on-one coaching and peer cohorts that support academic success and career readiness.',
  },
  {
    title: 'Career Pathways',
    desc: 'Internships, apprenticeships, and job placement with mission-aligned companies and labs.',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Programs</h2>
          <p className="mt-4 text-neutral-300">We meet learners where they are and support them end-to-end — from admissions to career launch.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-sm transition hover:from-white/15 hover:to-white/10">
              <div className="mb-4 h-10 w-10 rounded-md bg-yellow-400/90 ring-1 ring-yellow-300/60" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
              <a href="#get-involved" className="mt-4 inline-flex text-sm font-semibold text-yellow-300 hover:text-yellow-200">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
