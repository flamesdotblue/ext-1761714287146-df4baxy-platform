import React from 'react';

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-xl border border-neutral-800/60 bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
          <a href="#" className="flex items-center gap-3 px-4 py-2">
            <div className="h-6 w-6 rounded-sm bg-yellow-400" aria-hidden="true" />
            <span className="text-sm font-bold tracking-wider">OpenPath</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#programs" className="text-sm text-neutral-300 hover:text-white">Programs</a>
            <a href="#impact" className="text-sm text-neutral-300 hover:text-white">Impact</a>
            <a href="#stories" className="text-sm text-neutral-300 hover:text-white">Stories</a>
            <a href="#get-involved" className="text-sm text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-md px-3 py-2 font-semibold">Get involved</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
