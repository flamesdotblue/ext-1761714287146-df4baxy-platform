export default function CTA() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="get-involved" className="relative bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Join the movement</h3>
              <p className="mt-3 text-white/70 max-w-2xl">Subscribe for updates, volunteer opportunities, and stories from learners we support. Together, we can make higher education truly accessible.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Your email address" className="flex-1 rounded-md bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button type="submit" className="rounded-md bg-yellow-400 text-black font-semibold px-5 py-3 hover:bg-yellow-300 transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
