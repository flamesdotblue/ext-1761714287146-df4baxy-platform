import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-sm bg-yellow-400" aria-hidden="true" />
            <p className="text-sm text-neutral-300">© {new Date().getFullYear()} OpenPath Foundation</p>
          </div>
          <nav className="flex gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
