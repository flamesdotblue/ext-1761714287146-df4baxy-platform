import React from 'react';

const quotes = [
  {
    quote:
      'Thanks to the mentorship program, I gained the confidence and skills to secure a research internship. It changed my trajectory.',
    author: 'Aisha, First-generation student',
  },
  {
    quote:
      'The scholarship support meant I could focus on learning instead of juggling multiple jobs. I graduated with honors.',
    author: 'Mateo, Computer Science graduate',
  },
];

const Testimonials = () => {
  return (
    <section id="stories" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Learner Stories</h2>
          <p className="mt-4 text-neutral-300">Real people. Real outcomes. Our community is building a future where potential, not postcode, defines opportunity.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-neutral-100">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-400">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
