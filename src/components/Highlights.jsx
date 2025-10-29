import { GraduationCap, Users, Globe, Rocket } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Scholarships',
    desc: 'Funding and fee waivers that open doors to higher education for high-potential students.',
  },
  {
    icon: Users,
    title: 'Mentorship',
    desc: 'Structured 1:1 mentorship and peer communities to support learners end-to-end.',
  },
  {
    icon: Globe,
    title: 'Access & Outreach',
    desc: 'Workshops and outreach that reach underrepresented communities globally.',
  },
  {
    icon: Rocket,
    title: 'Career Pathways',
    desc: 'Internships, apprenticeships, and hiring pipelines for emerging talent.',
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-black">
      <div className="container mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold">What we do</h2>
          <p className="mt-3 text-white/70">Focused, practical support that removes barriers and unlocks potential.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-400 text-black shadow shadow-yellow-400/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
